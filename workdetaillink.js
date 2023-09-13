import puppeteer from 'puppeteer';
import domDetailUrl from './dom/domdetailurl.json' assert { type: 'json' }
import moment from 'moment';
import Queue from 'bull';
import schemadetailurl from './models/schemadetaillink.js';
import cookie from './cookiedefault.json' assert { type: 'json' }

import delay from 'delay';

const queueDetailUrl = new Queue('queueDetailUrl','redis://127.0.0.1:6379')


const  tiktokProfile = async()=>{
    const browser = await puppeteer.launch({
        headless: false,
    //    userDataDir: 'C:/Users/Sa/AppData/Local/Google/Chrome/User Data/Profile 5',

        args: [
            '--enable-features=NetworkService',
            '--no-sandbox',
            '--disable-setuid-sandbox',
            '--disable-dev-shm-usage',
            '--disable-web-security',
            '--disable-features=IsolateOrigins,site-per-process',
            '--shm-size=3gb', // this solves the issue
          ],
          ignoreHTTPSErrors: true,
    });
    const date = '2023-03-20'
    const dateTimeStamp = moment(date).format('x')
    console.log(dateTimeStamp)
        queueDetailUrl.process(5,async (job,done)=>{
            await delay(1000)
                const page = await browser.newPage();
                page.setViewport({width: 1440, height: 900});
                // await page.setCookie(...cookie[2])

            try {
                console.log(job.data.urlPost)
                await page.goto(job.data.urlPost)
                await delay(1000)
                const checkForm = await page.$(domDetailUrl.checkLanguage.elementLanguage)
                if(checkForm==null){
                    const vieOrEng = await page.evaluate((domDetailUrl)=>{
                        return document.querySelector(domDetailUrl.checkLanguage.elementLanguage).textContent
                    },domDetailUrl)
                    if(vieOrEng == 'For You'){
                        var domTiktok = domDetailUrl.domCheckFormLinkFalse.english
                    } else{
                        domTiktok = domDetailUrl.domCheckFormLinkFalse.vietnamese
                    }
                    await page.waitForSelector(domTiktok.elementProfile)
                    const detailUrl = await page.evaluate((domTiktok)=>{
                        return({
                            date:document.querySelector(domTiktok.elementDate)?.textContent.trim(),
                        })
                    },domTiktok)
                    console.log(detailUrl.date)
                    const dateReverse = detailUrl.date.split('').reverse().join('')
                    const dateSlice = dateReverse.slice(0,dateReverse.indexOf('·')-1)
                    detailUrl.date = await processTime(dateSlice.split('').reverse().join(''))
                    console.log(detailUrl.date)
                    // detailUrl.date = await processTime(detailUrl.date.slice(detailUrl.date.indexOf('·')+9,1000))
                    const insertDetailUrl = new schemadetailurl({...job.data,...detailUrl,idPost:"'"+job.data.urlPost.slice(job.data.urlPost.indexOf(/video/)+7,job.data.urlPost.indexOf(/video/)+26)})
                    await insertDetailUrl.save()
                }else{
                    const vieOrEng = await page.evaluate((domDetailUrl)=>{
                        return document.querySelector(domDetailUrl.checkLanguage.elementLanguage).textContent
                    },domDetailUrl)
                    if(vieOrEng == 'For You'){
                        var domTiktok = domDetailUrl.domCheckFromLinkTrue.english
                    } else{
                        domTiktok = domDetailUrl.domCheckFromLinkTrue.vietnamese
                    }
                    await page.waitForSelector(domTiktok.elementDate)
                    const detailUrl = await page.evaluate((domTiktok)=>{
                        console.log(document.querySelector(domTiktok.elementDate).textContent)
                        return({
                            date:document.querySelector(domTiktok.elementDate).textContent, 
                        })
                    },domTiktok)
                    detailUrl.date = await processTime(detailUrl.date)
                    console.log(moment(detailUrl.date).format())
                    console.log(detailUrl.date>dateTimeStamp)
                    console.log(detailUrl.date)
                    if(detailUrl.date>=dateTimeStamp){
                        const insertDetailUrl =  new schemadetailurl({...job.data,...detailUrl,idPost:"'"+job.data.urlPost.slice(job.data.urlPost.indexOf(/video/)+7,job.data.urlPost.indexOf(/video/)+26)})
                        await insertDetailUrl.save()
                    }
                  
                }
            } catch (error) {
                console.log(error)
                try {
                    const contentError = await page.evaluate((domTiktok)=>{
                        return document.querySelector(domTiktok.elementUrlError)?.textContent
                    },domTiktok)
                    console.log(contentError)
                    if(contentError==null){
                        console.log('No Video currently unavailable"')
                        queueDetailUrl.add(job.data)
                    }
                } catch (error) {
                    console.log('No Video currently unavailable"')

                    queueDetailUrl.add(job.data)
                }
           
                // console.log(error)
            }   
            try {
                await page.close()
            } catch(error) {  
                console.log(error)
            } 
            done();   
        })
}
tiktokProfile()  
const processStringToNumber = (String)=>{
switch(true){
    case String.indexOf('M')!=-1:
        return Number(String.slice(0,String.indexOf('M')))*1000000
    case String.indexOf('K')!=-1:
        return Number(String.slice(0,String.indexOf('M')))*1000
    case String.indexOf('B')!=-1:
        return Number(String.slice(0,String.indexOf('B')))*1000000000
    case String.indexOf('M')==-1 && String.indexOf('K')==-1 && String.indexOf('B')==-1:
        return Number(String)
    default:   
        break; 
}
}
const processTime = async (time)=>{
    const daymillisecond = moment().format('x');
    switch(true){
        case time.indexOf('m')!=-1 || time.indexOf('phút')!=-1:
            return parseInt(daymillisecond)-parseInt(time.slice(0,time.indexOf('m')))*60000;
            break;
        case time.indexOf('h')!=-1 || time.indexOf('giờ')!=-1:
            return parseInt(daymillisecond)-parseInt(time.slice(0,time.indexOf('h')))*60000*60;
            break;
        case time.indexOf('d')!=-1 || time.indexOf('ngày')!=-1:
            return parseInt(daymillisecond)-parseInt(time.slice(0,time.indexOf('m')))*60000*60*24;
            break;
        case time.indexOf('w')!=-1 || time.indexOf('tuần')!=-1:
            return parseInt(daymillisecond)-parseInt(time.slice(0,time.indexOf('m')))*60000*60*24*7;
            break;
        case time.length == 4 || time.length==5||time.length==3:
            const currentYear = (new Date()).getFullYear()+'-'
            const day = currentYear.concat(time)
            return parseInt(moment(day ).format('x'));
            break;
        case time.length == 8 ||time.length == 9 || time.length==10:
            return parseInt(moment(time).format('x'));
            break;
    }
} 


