import puppeteer from 'puppeteer-extra';
import domtiktokkey from './dom/domtiktokkey.json' assert { type: 'json' }
import Queue from 'bull';
import moment from 'moment';
import cookie from './cookiedefault.json' assert { type: 'json' }
import schemaurlpost from './models/schemaurlpost.js';
const queueKeyWord = new Queue('queueKeyWord','redis://127.0.0.1:6379')
import fs from 'fs/promises'
import delay from 'delay';
import StealthPlugin from 'puppeteer-extra-plugin-stealth';
import  {executablePath} from 'puppeteer'
puppeteer.use(StealthPlugin());


const  tiktokProfile = async()=>{
    let sessionall=[]
    let cookieall=[]
    for (let i=0;i<1;i++){
        var ordinalCookie = i
    
    const date = '2022--01'
    const dateTimeStamp = moment(date).format('x')
    console.log(Number(dateTimeStamp))
    
    const browser = await puppeteer.launch({
        headless: false,
        userDataDir: 'C:/Users/Sa/AppData/Local/Google/Chrome/User Data/Profile 11',
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
          executablePath:executablePath()
    }); 
    
            const page = await browser.newPage()
         
          
            await page.exposeFunction("processTime", processTime);
            // await page.setCookie(...cookie[ordinalCookie])
            await page.setDefaultTimeout(30000)
            page.setViewport({width: 1440, height: 500});
            var domTiktok = ''
            await page.goto('https://www.tiktok.com')
            await page.evaluate(()=>{
                localStorage.clear()
                sessionStorage.clear();
            })
            const vieOrEng = await page.evaluate((domtiktokkey)=>{
                return document.querySelector(domtiktokkey.checkLanguage.elementLanguage).textContent
            },domtiktokkey)
            if(vieOrEng == 'For You'){
                domTiktok = domtiktokkey.english
            } else{
                domTiktok = domtiktokkey.vietnamese
            }
            await page.focus(domTiktok.elementSearchBar)
            await page.keyboard.type('SCB')
            await page.keyboard.press('Enter')
            try {
                await page.waitForSelector(domTiktok.elementTabVideo)
                await page.evaluate((domTiktok)=>{
                    document.querySelector(domTiktok.elementTabVideo).click()
                },domTiktok)
                await page.waitForSelector(domTiktok.elementLoadMore)
                for(let i=0;i<20+5;i++){
                    await page.evaluate((domTiktok)=>{
                        document.querySelector(domTiktok.elementLoadMore)?.click()
                    },domTiktok)
                    for(let i=0;i<6000;i++){
                        var conditionClick = await page.$(domTiktok.elementLoadMore)
                        if(conditionClick!=null){
                            break;
                        }
                        if(i==5999){
                            var condtion_break_for_outside = true
                        }
                    }
                    
                    if(condtion_break_for_outside==true){
                        break;
                    }
                }
                let session = await page.evaluate((domTiktok)=>{
                    let keyArray = []
                    let valueArray = []
                    for (i = 0; i < sessionStorage.length; i++)   {
                        let key = sessionStorage.key(i);
                        let value = sessionStorage.getItem(key);  
                        keyArray.push(key)
                        valueArray.push(value)
                    }
                    console.log(keyArray)
                    console.log(valueArray)
                    return [keyArray,valueArray]
                },domTiktok)
                sessionall.push(session)
                const cookies = await page.cookies()
                cookieall.push(cookies)
            } catch (error) {
                await fs.writeFile('cookiehashtag.json',JSON.stringify( sessionall)) 
                await fs.writeFile('cookie.json',JSON.stringify( cookieall)) 

            }
            browser.close()
    }
    await fs.writeFile('cookiehashtag.json',JSON.stringify( sessionall)) 
    await fs.writeFile('cookie.json',JSON.stringify(cookieall)) 


            
           
}
tiktokProfile()
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

