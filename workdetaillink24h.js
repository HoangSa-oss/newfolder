import puppeteer from 'puppeteer';
import domDetailUrl from './dom/domdetailurl.json' assert { type: 'json' }
import moment from 'moment';
import Queue from 'bull';
import schemadetailurl24h from './models/schemadetaillink24h.js';

const queueDetailUrl24h = new Queue('queueDetailUrl24h','redis://127.0.0.1:6379')


const  tiktokProfile = async()=>{
    const browser = await puppeteer.launch({
        headless: false,
        // userDataDir: 'C:\Users\Twice\AppData\Local\Google\Chrome\User Data\Profile 3',
    });
        queueDetailUrl24h.process(1,async (job,done)=>{
        
                const page = await browser.newPage();
                page.setViewport({width: 1920, height: 1080});
           
            try {
                await page.goto(job.data.urlPost)
                const checkForm = await page.$(domDetailUrl.checkFormUrl.elementCheckFromUrl)
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
                    const dateReverse = detailUrl.date.split('').reverse().join('')
                    const dateSlice = dateReverse.slice(0,dateReverse.indexOf('·')-1)
                    const check24h = checktime24h(dateSlice.split('').reverse().join(''))
                    if(check24h ==true){
                        detailUrl.date = await processTime(dateSlice.split('').reverse().join(''))
                        const insertDetailUrl =  new schemadetailurl24h({...job.data,...detailUrl,idPost:"'"+job.data.urlPost.slice(job.data.urlPost.indexOf(/video/)+7,job.data.urlPost.indexOf(/video/)+26)})
                        await insertDetailUrl.save()
                    }
                }else{
                    const vieOrEng = await page.evaluate((domDetailUrl)=>{
                        return document.querySelector(domDetailUrl.checkLanguage.elementLanguage).textContent
                    },domDetailUrl)
                    if(vieOrEng == 'For You'){
                        var domTiktok = domDetailUrl.domCheckFromLinkTrue.english
                    } else{
                        domTiktok = domDetailUrl.domCheckFromLinkTrue.vietnamese
                    }
                    await page.waitForSelector(domTiktok.elementProfile)
                    const detailUrl = await page.evaluate((domTiktok)=>{
                        return({
                            date:document.querySelector(domTiktok.elementDate)?.textContent.trim(), 
                        })
                    },domTiktok)
                    const dateReverse = detailUrl.date.split('').reverse().join('')
                    const dateSlice = dateReverse.slice(0,dateReverse.indexOf('·')-1)
                    const check24h = checktime24h(dateSlice.split('').reverse().join(''))
                    if(check24h ==true){
                        detailUrl.date = await processTime(dateSlice.split('').reverse().join(''))
                        const insertDetailUrl =  new schemadetailurl24h({...job.data,...detailUrl,idPost:"'"+job.data.urlPost.slice(job.data.urlPost.indexOf(/video/)+7,job.data.urlPost.indexOf(/video/)+26)})
                        await insertDetailUrl.save()
                    }
                }
            } catch (error) {
                try {
                    const contentError = await page.evaluate((domTiktok)=>{
                        return document.querySelector(domTiktok.elementUrlError)?.textContent
                    },domTiktok)
                    if(contentError!="Video currently unavailable"){
                        queueDetailUrl24h.add(job.data)
                    
                    }
                } catch (error) {
                    queueDetailUrl24h.add(job.data)
                
                }
           
                console.log(error)
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
const checktime24h = (time)=>{
    if( time.indexOf('m')!=-1 || time.indexOf('phút')!=-1 || time.indexOf('h')!=-1 || time.indexOf('giờ')!=-1){
        return true;
    }
    return false;
}
