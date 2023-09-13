import puppeteer, { Keyboard } from 'puppeteer';
import domtiktokkey from './dom/domhastag.json' assert { type: 'json' }
import Queue from 'bull';
import moment from 'moment';
import schemaurlpost from './models/schemahastag.js';
import fs from 'fs/promises'
import cookie from './cookiedefault.json' assert { type: 'json' }
import schemadetailurl from './models/schemadetaillink.js';

import schemahastag from './models/schemahastag.js';
import delay from 'delay';
import { response } from 'express';
export const  tiktokProfile = async(indexCookie)=>{
    const queueHasTag = new Queue('queueHasTag','redis://127.0.0.1:6379')

    var ordinalCookie = 0
    const date = '2022-12-01'
    const dateTimeStamp = moment(date).format('X')
    const timewait =500
    const getEnd=20000
    console.log(dateTimeStamp)
    const browser = await puppeteer.launch({
        headless: false,
        // userDataDir: 'C:/Users/Sa/AppData/Local/Google/Chrome/User Data/Profile 11',
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
        queueHasTag.process(1,async(job,done)=>{

            const page = await browser.newPage()
            // await page.setCookie(...cookie[indexCookie][ordinalCookie])

            await page.exposeFunction("processTime", processTime);
            page.setViewport({width: 1440, height: 900});
            var domTiktok = ''
            try {
                // await page.keyboard.type(`https://www.tiktok.com/tag/${job.data.hashtag.slice(1,2000)}`,{delay: 50})
                // await delay(1000)
                // await page.keyboard.press('Enter')
                await page.goto(`https://www.tiktok.com/tag/${job.data.hashtag.slice(1,2000)}`,{
                    waitUntil: 'networkidle2'
                })
                // await page.waitForSelector('a > span > svg')
                await delay(5000)
                page.on('response',async(response)=>{
                    if(response.url().includes('https://www.tiktok.com/api/challenge/item_list')){
                        try {
                            let text = await response?.text()
                            let text1 = JSON.parse(text)
                            let abc = text1.itemList?.map((item)=>{
                                return {
                                    date: item.createTime,
                                    urlPost: `https://www.tiktok.com/@${item.author.uniqueId}/video/${item.id}`,
                                }
                            })
                            abc?.map(async(x)=>{
                                try {
                                   if(x.date>dateTimeStamp){
                                    const insertDetailUrl =  new schemadetailurl({...job.data,...x})
                                        insertDetailUrl.save()
                                   }
                                } catch (error) {
    
                                }
    
                            }) 
                        } catch (error) {
                            console.log(error)
                        }   
                    
                    }
                } )
            
                domTiktok = domtiktokkey.english
                await page.waitForSelector(domTiktok.elementVideoLastChild,{timeout:10000})
                for (let i=0;i<10000;i++){
                    await delay(1000)
                    const totalVideo = await page.evaluate((domTiktok)=>{
                        return document.querySelectorAll(domTiktok.elementVideo).length 
                    },domTiktok)
                    const totalVideo1 = await page.evaluate((domTiktok)=>{
                        return document.querySelectorAll(domTiktok.elementVideo1).length 
                    },domTiktok)
                    console.log(totalVideo,totalVideo1)
                    await page.evaluate( () => {
                        scrollBy(0, document.body.scrollHeight*100000)
                    });  
                    for(let j=0;j<timewait;j++){
                        await delay(100)
                        const conditinBreak = await page.evaluate((domTiktok)=>{
                            return document.querySelectorAll(domTiktok.elementVideo).length 
                        },domTiktok)
                        const conditinBreak1 = await page.evaluate((domTiktok)=>{
                            return document.querySelectorAll(domTiktok.elementVideo1).length 
                        },domTiktok)
                       
                        if(j==timewait/15 || j==timewait/10|| j==timewait/5||j==timewait/20||j==timewait/300||j==timewait/4000||j==timewait/2000){
                            await page.evaluate( () => {
                            scrollBy(0, -document.body.scrollHeight*1000)
                          
                            })
                            await page.evaluate( () => {
                                scrollBy(0, document.body.scrollHeight*100000)
                              
                                })
                                await page.evaluate( () => {
                                    scrollBy(0, -document.body.scrollHeight*1000)
                                  
                                    })
                                    await page.evaluate( () => {
                                        scrollBy(0, document.body.scrollHeight*100000)
                                      
                                        })
                        }
                  
                        if(totalVideo!=conditinBreak||totalVideo1!=conditinBreak1){
                            break;
                        }
                        if(j==timewait-1){
                            var conditionBreakScroll = true
                        }
                    }
                    if(conditionBreakScroll==true || totalVideo > getEnd){
                        break;
                    }
                }
                const cacha = await page.$(domTiktok.elementCacha)
                if(cacha!=null){
                    console.log('cacha')
                    console.log(job.data.hashtag)
                    ordinalCookie++
                    await queueHasTag.add(job.data) 
                }
            } catch (error) {
                console.log(error)
                console.log(`${job.data.hashtag}: https://www.tiktok.com/tag/${job.data.hashtag.slice(1,2000)}`)
                const errorContent = await page.evaluate((domTiktok)=>{
                        return document.querySelector(domTiktok.elementUrlError)?.textContent
                },domTiktok)
                console.log('dm')
                if(errorContent!="Couldn't find this hashtag" && errorContent!="No videos with this hashtag yet"){
                    await queueHasTag.add({hashtag:`${job.data.hashtag}`})
                    ordinalCookie++

                }
            }
            try {
                await page.close()
            } catch (error) {
                console.log(error)
            }
            done()     
        })
}
for(let i=0;i<2;i++){
    tiktokProfile(i)

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