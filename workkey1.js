import puppeteer from 'puppeteer-extra';
import workkeyfunction from './workkeyfunction1.js';
import domtiktokkey from './dom/domtiktokkey.json' assert { type: 'json' }
import Queue from 'bull';
import moment from 'moment';
import cookie from './cookiedefault.json' assert { type: 'json' }
import schemaurlpost from './models/schemaurlpost1.js';
import delay from 'delay';
import StealthPlugin from 'puppeteer-extra-plugin-stealth';
import  {executablePath} from 'puppeteer'
import fs from 'fs/promises'

const queueKeyWordApi1 = new Queue('queueKeyWordApi1','redis://127.0.0.1:6379')
const queueKeyWordApi2 = new Queue('queueKeyWordApi1','redis://127.0.0.1:6379')
const queueKeyWordApi3 = new Queue('queueKeyWordApi1','redis://127.0.0.1:6379')
const queueKeyWordApi4 = new Queue('queueKeyWordApi1','redis://127.0.0.1:6379')
const queueKeyWordApi5 = new Queue('queueKeyWordApi1','redis://127.0.0.1:6379')
const queueKeyWordApi6 = new Queue('queueKeyWordApi1','redis://127.0.0.1:6379')
const queueKeyWordApi7 = new Queue('queueKeyWordApi1','redis://127.0.0.1:6379')
const queueKeyWordApi8 = new Queue('queueKeyWordApi1','redis://127.0.0.1:6379')
const queueKeyWordApi9 = new Queue('queueKeyWordApi1','redis://127.0.0.1:6379')
const queueKeyWordApi10 = new Queue('queueKeyWordApi1','redis://127.0.0.1:6379')
const queueKeyWordApi11 = new Queue('queueKeyWordApi1','redis://127.0.0.1:6379')
const queueKeyWordApi12 = new Queue('queueKeyWordApi1','redis://127.0.0.1:6379')

puppeteer.use(StealthPlugin());


const  tiktokProfile = async(i)=>{
    try {
        await delay(i*2000)
    process.setMaxListeners(0)
    const sumQueued = 5
    const date = '2024-05-01'
    const dateTimeStamp = moment(date).format('X')
    console.log(dateTimeStamp)
    let cookieArray = cookie
    const queueKeyWordApi = new Queue('queueKeyWordApi1','redis://127.0.0.1:6379')
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
            executablePath:executablePath()
    
    }); 
    let ordinalCookie = 0
    queueKeyWordApi.process(async(job,done)=>{
        let arrayData = await workkeyfunction(i,job,browser,ordinalCookie)
            console.log(arrayData.length)
            if(arrayData.length>100){
                arrayData.map(async(x)=>{
                    if(x.date>=dateTimeStamp){
                        const insert = new schemaurlpost({keyword:job.data.keyword,...x})
                        await insert.save()
                    } 
                })
            }else{
                // if(arrayData.length==2){
                //     arrayCookieDelete.push(arrayData)
                //     await fs.writeFile('deletecookie.json',JSON.stringify(arrayCookieDelete))
                // }
                if(job.data.addQueued<sumQueued){
                    console.log('conca')
                    queueKeyWordApi.add({keyword:job.data.keyword,addQueued:job.data.addQueued+1})
                    ordinalCookie++
                    if(ordinalCookie==cookieArray[i].length){
                        ordinalCookie = 0
                    }
                }
            }

            done()
    })
    } catch (error) {
        console.log(error)
    }
    
    }
    // const browser1 = await puppeteer.launch({
    //     headless: false,
    //     // userDataDir: 'C:/Users/Sa/AppData/Local/Google/Chrome/User Data/Profile 11',
    
    //     args: [
    //         '--enable-features=NetworkService',
    //         '--no-sandbox',
    //         '--disable-setuid-sandbox',
    //         '--disable-dev-shm-usage',
    //         '--disable-web-security',
    //         '--disable-features=IsolateOrigins,site-per-process',
    //         '--shm-size=3gb', // this solves the issue
    //       ],
    //       ignoreHTTPSErrors: true,
    //       executablePath:executablePath()
    
    // }); 
    // const browser2 = await puppeteer.launch({
    //     headless: false,
    //     // userDataDir: 'C:/Users/Sa/AppData/Local/Google/Chrome/User Data/Profile 11',
    
    //     args: [
    //         '--enable-features=NetworkService',
    //         '--no-sandbox',
    //         '--disable-setuid-sandbox',
    //         '--disable-dev-shm-usage',
    //         '--disable-web-security',
    //         '--disable-features=IsolateOrigins,site-per-process',
    //         '--shm-size=3gb', // this solves the issue
    //       ],
    //       ignoreHTTPSErrors: true,
    //       executablePath:executablePath()
    
    // }); 
    // const browser3 = await puppeteer.launch({
    //     headless: false,
    //     // userDataDir: 'C:/Users/Sa/AppData/Local/Google/Chrome/User Data/Profile 11',
    
    //     args: [
    //         '--enable-features=NetworkService',
    //         '--no-sandbox',
    //         '--disable-setuid-sandbox',
    //         '--disable-dev-shm-usage',
    //         '--disable-web-security',
    //         '--disable-features=IsolateOrigins,site-per-process',
    //         '--shm-size=3gb', // this solves the issue
    //       ],
    //       ignoreHTTPSErrors: true,
    //       executablePath:executablePath()
    
    // }); 
    // const browser4 = await puppeteer.launch({
    //     headless: false,
    //     // userDataDir: 'C:/Users/Sa/AppData/Local/Google/Chrome/User Data/Profile 11',
    
    //     args: [
    //         '--enable-features=NetworkService',
    //         '--no-sandbox',
    //         '--disable-setuid-sandbox',
    //         '--disable-dev-shm-usage',
    //         '--disable-web-security',
    //         '--disable-features=IsolateOrigins,site-per-process',
    //         '--shm-size=3gb', // this solves the issue
    //       ],
    //       ignoreHTTPSErrors: true,
    //       executablePath:executablePath()
    
    // });
    // const browser5 = await puppeteer.launch({
    //     headless: false,
    //     // userDataDir: 'C:/Users/Sa/AppData/Local/Google/Chrome/User Data/Profile 11',
    
    //     args: [
    //         '--enable-features=NetworkService',
    //         '--no-sandbox',
    //         '--disable-setuid-sandbox',
    //         '--disable-dev-shm-usage',
    //         '--disable-web-security',
    //         '--disable-features=IsolateOrigins,site-per-process',
    //         '--shm-size=3gb', // this solves the issue
    //       ],
    //       ignoreHTTPSErrors: true,
    //       executablePath:executablePath()
    
    // });
    // const browser6 = await puppeteer.launch({
    //     headless: false,
    //     // userDataDir: 'C:/Users/Sa/AppData/Local/Google/Chrome/User Data/Profile 11',
    
    //     args: [
    //         '--enable-features=NetworkService',
    //         '--no-sandbox',
    //         '--disable-setuid-sandbox',
    //         '--disable-dev-shm-usage',
    //         '--disable-web-security',
    //         '--disable-features=IsolateOrigins,site-per-process',
    //         '--shm-size=3gb', // this solves the issue
    //       ],
    //       ignoreHTTPSErrors: true,
    //       executablePath:executablePath()
    
    // });
    // const browser7 = await puppeteer.launch({
    //     headless: false,
    //     // userDataDir: 'C:/Users/Sa/AppData/Local/Google/Chrome/User Data/Profile 11',
    
    //     args: [
    //         '--enable-features=NetworkService',
    //         '--no-sandbox',
    //         '--disable-setuid-sandbox',
    //         '--disable-dev-shm-usage',
    //         '--disable-web-security',
    //         '--disable-features=IsolateOrigins,site-per-process',
    //         '--shm-size=3gb', // this solves the issue
    //       ],
    //       ignoreHTTPSErrors: true,
    //       executablePath:executablePath()
    
    // });
    // const browser8 = await puppeteer.launch({
    //     headless: false,
    //     // userDataDir: 'C:/Users/Sa/AppData/Local/Google/Chrome/User Data/Profile 11',
    
    //     args: [
    //         '--enable-features=NetworkService',
    //         '--no-sandbox',
    //         '--disable-setuid-sandbox',
    //         '--disable-dev-shm-usage',
    //         '--disable-web-security',
    //         '--disable-features=IsolateOrigins,site-per-process',
    //         '--shm-size=3gb', // this solves the issue
    //       ],
    //       ignoreHTTPSErrors: true,
    //       executablePath:executablePath()
    
    // });
    // const browser9 = await puppeteer.launch({
    //     headless: false,
    //     // userDataDir: 'C:/Users/Sa/AppData/Local/Google/Chrome/User Data/Profile 11',
    
    //     args: [
    //         '--enable-features=NetworkService',
    //         '--no-sandbox',
    //         '--disable-setuid-sandbox',
    //         '--disable-dev-shm-usage',
    //         '--disable-web-security',
    //         '--disable-features=IsolateOrigins,site-per-process',
    //         '--shm-size=3gb', // this solves the issue
    //       ],
    //       ignoreHTTPSErrors: true,
    //       executablePath:executablePath()
    
    // });

    // let ordinalCookie1 = 0
    // queueKeyWordApi1.process(async(job,done)=>{
      
    //     let arrayData = await workkeyfunction(0,job,browser1,ordinalCookie1)
    //     console.log(arrayData.length)
    //     if(arrayData.length>100){
    //         arrayData.map(async(x)=>{
    //             if(x.date>=dateTimeStamp){
    //                 const insert = new schemaurlpost({keyword:job.data.keyword,...x})
    //                 await insert.save()
    //             } 
    //         })
    //     }else{
    //         if(arrayData.length==2){
    //             arrayCookieDelete.push(arrayData)
    //             await fs.writeFile('deletecookie.json',JSON.stringify(arrayCookieDelete))
    //         }
    //         if(job.data.addQueued<sumQueued){
    //             queueKeyWordApi1.add({keyword:job.data.keyword,addQueued:job.data.addQueued+1})
    //             ordinalCookie1++
    //             if(ordinalCookie1==cookieArray[0].length){
    //                 ordinalCookie1 = 0
    //             }
    //         }
    //     }
        
    //     done()
    // })
    
    // let ordinalCookie2 = 0
    // queueKeyWordApi2.process(async(job,done)=>{
    //     let arrayData = await workkeyfunction(1,job,browser2,ordinalCookie2)
    //     console.log(arrayData.length)
    //     if(arrayData.length>100){
    //         arrayData.map(async(x)=>{
    //             if(x.date>=dateTimeStamp){

    //             const insert = new schemaurlpost({keyword:job.data.keyword,...x})
    //             await insert.save()
    //             }
    //         })
    //     }else{
    //         if(arrayData.length==2){
    //             arrayCookieDelete.push(arrayData)
    //             await fs.writeFile('deletecookie.json',JSON.stringify(arrayCookieDelete))
    //         }
    //         if(job.data.addQueued<sumQueued){

    //             queueKeyWordApi2.add({keyword:job.data.keyword,addQueued:job.data.addQueued+1})

    //             ordinalCookie2++
    //             if(ordinalCookie2==cookieArray[1].length){
    //                 ordinalCookie2 = 0
    //             }
    //         }
    //         }
        
    //     done()
    // })
    // let ordinalCookie3 = 0
    // queueKeyWordApi3.process(async(job,done)=>{
    //     console.log(cookieArray[2].length)
    //     let arrayData = await workkeyfunction(2,job,browser3,ordinalCookie3)
    //     console.log(arrayData.length)

    //     if(arrayData.length>100){
    //         arrayData.map(async(x)=>{
    //             if(x.date>=dateTimeStamp){

    //             const insert = new schemaurlpost({keyword:job.data.keyword,...x})
    //             await insert.save()}
    //         })
    //     }else{
    //         if(arrayData.length==2){
    //             arrayCookieDelete.push(arrayData)
    //             await fs.writeFile('deletecookie.json',JSON.stringify(arrayCookieDelete))
    //         }
    //         if(job.data.addQueued<sumQueued){

    //         queueKeyWordApi3.add({keyword:job.data.keyword,addQueued:job.data.addQueued+1})

    //         ordinalCookie3++
    //         if(ordinalCookie3==cookieArray[2].length){
    //             ordinalCookie3 = 0
    //         }
    //     }
    //         }
    //     done()
    // })
    // let ordinalCookie4 = 0
    // queueKeyWordApi4.process(async(job,done)=>{
    //     let arrayData = await workkeyfunction(3,job,browser4,ordinalCookie4)
    //     console.log(arrayData.length)
    //     if(arrayData.length>100){
    //         arrayData.map(async(x)=>{
    //             if(x.date>=dateTimeStamp){

    //             const insert = new schemaurlpost({keyword:job.data.keyword,...x})
    //             await insert.save()}
    //         })
    //     }else{
    //         if(arrayData.length==2){
    //             arrayCookieDelete.push(arrayData)
    //             await fs.writeFile('deletecookie.json',JSON.stringify(arrayCookieDelete))
    //         }
    //         if(job.data.addQueued<sumQueued){

    //             queueKeyWordApi4.add({keyword:job.data.keyword,addQueued:job.data.addQueued+1})
    //             ordinalCookie4++
    //             if(ordinalCookie4==cookieArray[3].length){
    //                 ordinalCookie4 = 0
    //             }
    //         }
    //         }
        
    //     done()
    // })
    // let ordinalCookie5 = 0
    // queueKeyWordApi5.process(async(job,done)=>{
    //     let arrayData = await workkeyfunction(4,job,browser5,ordinalCookie5)
    //     console.log(arrayData.length)
    //     if(arrayData.length>100){
    //         arrayData.map(async(x)=>{
    //             if(x.date>=dateTimeStamp){

    //             const insert = new schemaurlpost({keyword:job.data.keyword,...x})
    //             await insert.save()}
    //         })
    //     }else{
    //         if(arrayData.length==2){
    //             arrayCookieDelete.push(arrayData)
    //             await fs.writeFile('deletecookie.json',JSON.stringify(arrayCookieDelete))
    //         }
    //         if(job.data.addQueued<sumQueued){

    //             queueKeyWordApi5.add({keyword:job.data.keyword,addQueued:job.data.addQueued+1})
    //             ordinalCookie5++
    //             if(ordinalCookie5==cookieArray[4].length){
    //                 ordinalCookie5 = 0
    //             }
    //         }
    //         }
         
        
    //     done()
    // })
    // let ordinalCookie6 = 0
    // queueKeyWordApi6.process(async(job,done)=>{
    //     let arrayData = await workkeyfunction(5,job,browser6,ordinalCookie6)
    //     console.log(arrayData.length)
    //     if(arrayData.length>100){
    //         arrayData.map(async(x)=>{
    //             if(x.date>=dateTimeStamp){
    //             const insert = new schemaurlpost({keyword:job.data.keyword,...x})
    //             await insert.save()}
    //         })
    //     }else{
    //         if(arrayData.length==2){
    //             arrayCookieDelete.push(arrayData)
    //             await fs.writeFile('deletecookie.json',JSON.stringify(arrayCookieDelete))
    //         }
    //         if(job.data.addQueued<sumQueued){

    //             queueKeyWordApi6.add({keyword:job.data.keyword,addQueued:job.data.addQueued+1})
    //             ordinalCookie6++
    //             if(ordinalCookie6==cookieArray[5].length){
    //                 ordinalCookie6 = 0
    //             }
    //         }
    //         }
        
    //     done()
    // })
    // let ordinalCookie7 = 0
    // queueKeyWordApi7.process(async(job,done)=>{
    //     let arrayData = await workkeyfunction(6,job,browser7,ordinalCookie7)
    //     console.log(arrayData.length)
    //     if(arrayData.length>100){
    //         arrayData.map(async(x)=>{
    //             if(x.date>=dateTimeStamp){

    //             const insert = new schemaurlpost({keyword:job.data.keyword,...x})
    //             await insert.save()}
    //         })
    //     }else{
    //         if(arrayData.length==2){
    //             arrayCookieDelete.push(arrayData)
    //             await fs.writeFile('deletecookie.json',JSON.stringify(arrayCookieDelete))
    //         }
    //         if(job.data.addQueued<sumQueued){

    //             queueKeyWordApi7.add({keyword:job.data.keyword,addQueued:job.data.addQueued+1})
    //             ordinalCookie7++
    //             if(ordinalCookie7==cookieArray[6].length){
    //                 ordinalCookie7 = 0
    //             }
    //         }
    //         }   
        
    //     done()
    // })
    // let ordinalCookie8 = 0
    // queueKeyWordApi8.process(async(job,done)=>{
    //     let arrayData = await workkeyfunction(7,job,browser8,ordinalCookie8)
    //     console.log(arrayData.length)
    //     if(arrayData.length>100){
    //         arrayData.map(async(x)=>{
    //             if(x.date>=dateTimeStamp){

    //             const insert = new schemaurlpost({keyword:job.data.keyword,...x})
    //             await insert.save()}
    //         })
    //     }else{
    //         if(arrayData.length==2){
    //             arrayCookieDelete.push(arrayData)
    //             await fs.writeFile('deletecookie.json',JSON.stringify(arrayCookieDelete))
    //         }
    //         if(job.data.addQueued<sumQueued){

    //             queueKeyWordApi8.add({keyword:job.data.keyword,addQueued:job.data.addQueued+1})
    //             ordinalCookie8++
    //             if(ordinalCookie8==cookieArray[7].length){
    //                 ordinalCookie8 = 0
    //             }
    //         }
    //         }
        
    //     done()
    // })
    // let ordinalCookie9 = 0
    // queueKeyWordApi9.process(async(job,done)=>{
    //     let arrayData = await workkeyfunction(8,job,browser9,ordinalCookie9)
    //     console.log(arrayData.length)
    //     if(arrayData.length>100){
    //         arrayData.map(async(x)=>{
    //             if(x.date>=dateTimeStamp){

    //             const insert = new schemaurlpost({keyword:job.data.keyword,...x})
    //             await insert.save()}
    //         })
    //     }else{
    //         if(arrayData.length==2){
    //             arrayCookieDelete.push(arrayData)
    //             await fs.writeFile('deletecookie.json',JSON.stringify(arrayCookieDelete))
    //         }
    //         if(job.data.addQueued<sumQueued){

    //             queueKeyWordApi9.add({keyword:job.data.keyword,addQueued:job.data.addQueued+1})
    //             ordinalCookie9++
    //             if(ordinalCookie9==cookieArray[8].length){
    //                 ordinalCookie9 = 0
    //             }
    //         }
    //         }
        
    //     done()
    // })

// }
for(let i=0;i<9;i++){
    tiktokProfile(i)
}


