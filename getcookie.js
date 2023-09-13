import puppeteer from 'puppeteer-extra';

import domtiktokkey from './dom/domhastag.json' assert { type: 'json' }
import delay from 'delay';
import fs from 'fs/promises'
import cookie from './cookiedefault.json' assert { type: 'json' }
import StealthPlugin from 'puppeteer-extra-plugin-stealth';
import  {executablePath} from 'puppeteer'
puppeteer.use(StealthPlugin());

const  tiktokProfile = async()=>{
    let cookiee=[]
    // for (let i=0;i<2;i++){
    //     var ordinalCookie = i
    //     const timewait =15000
    //     const getEnd=100
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
            // await page.setCookie(...cookie[ordinalCookie])
            page.setViewport({width: 1440, height: 900});
            var domTiktok = ''
                await page.goto(`https://www.tiktok.com/tag/love`)
    //             await delay(10000)

    //             const vieOrEng = await page.evaluate((domtiktokkey)=>{
    //                 return document.querySelector(domtiktokkey.checkLanguage.elementLanguage).textContent
    //             },domtiktokkey)
    //             if(vieOrEng == 'For You'){
    //                 domTiktok = domtiktokkey.english
    //             } else{
    //                 domTiktok = domtiktokkey.vietnamese
    //             }
    //             await page.waitForSelector(domTiktok.elementVideoLastChild)
    //             for(let i=0;i<10000;i++){
    //                 const totalVideo = await page.evaluate((domTiktok)=>{
    //                     return document.querySelectorAll(domTiktok.elementVideo).length 
    //                 },domTiktok)
    //                 await page.evaluate( () => {
    //                     scrollBy(0, document.body.scrollHeight*100000)
    //                 });  
    //                 for(let i=0;i<timewait;i++){
    //                     const conditinBreak = await page.evaluate((domTiktok)=>{
    //                         return document.querySelectorAll(domTiktok.elementVideo).length 
    //                     },domTiktok)
    //                     if(i==timewait/15 || i==timewait/10|| i==timewait/5){
    //                         await page.evaluate( () => {
    //                         scrollBy(0, -document.body.scrollHeight)
    //                         scrollBy(0, document.body.scrollHeight*100000)
    //                         scrollBy(0, -document.body.scrollHeight)
    //                         scrollBy(0, document.body.scrollHeight*100000)
    //                         })
    //                     }
    //                     if(totalVideo!=conditinBreak){
    //                         break;
    //                     }
    //                     if(i==timewait-1){
    //                         var conditionBreakScroll = true
    //                     }
    //                 }
    //                 if(conditionBreakScroll==true || totalVideo > getEnd){
    //                     break;
    //                 }
    //             }
    //             await page.evaluate(()=>{
    //                 localStorage.clear()
    //                 sessionStorage.clear();
    //             })
    //             const cookies = await page.cookies()
    //             cookiee.push(cookies)
             
              
    //             browser.close()
    // }
    // await fs.writeFile('cookiehashtag.json',JSON.stringify(cookiee))  

    }
tiktokProfile()