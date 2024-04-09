import puppeteer from 'puppeteer-extra';
import workkeyfunction from './workkeyfunction.js';
import domtiktokkey from './dom/domtiktokkey.json' assert { type: 'json' }
import Queue from 'bull';
import moment from 'moment';
import cookie from './cookiedefault.json' assert { type: 'json' }
import schemaurlpost from './models/schemaurlpost.js';
import delay from 'delay';
import StealthPlugin from 'puppeteer-extra-plugin-stealth';
import  {executablePath} from 'puppeteer'
import fs from 'fs/promises'
import { fileURLToPath } from 'url';
import { dirname } from 'path';
const queueKeyWordApi1 = new Queue('queueKeyWordApi','redis://127.0.0.1:6379')
const queueKeyWordApi2 = new Queue('queueKeyWordApi','redis://127.0.0.1:6379')
const queueKeyWordApi3 = new Queue('queueKeyWordApi','redis://127.0.0.1:6379')
const queueKeyWordApi4 = new Queue('queueKeyWordApi','redis://127.0.0.1:6379')
const queueKeyWordApi5 = new Queue('queueKeyWordApi','redis://127.0.0.1:6379')
const queueKeyWordApi6 = new Queue('queueKeyWordApi','redis://127.0.0.1:6379')
const queueKeyWordApi7 = new Queue('queueKeyWordApi','redis://127.0.0.1:6379')
const queueKeyWordApi8 = new Queue('queueKeyWordApi','redis://127.0.0.1:6379')
const queueKeyWordApi9 = new Queue('queueKeyWordApi','redis://127.0.0.1:6379')
const queueKeyWordApi10 = new Queue('queueKeyWordApi','redis://127.0.0.1:6379')
const queueKeyWordApi11 = new Queue('queueKeyWordApi','redis://127.0.0.1:6379')
const queueKeyWordApi12= new Queue('queueKeyWordApi','redis://127.0.0.1:6379')

puppeteer.use(StealthPlugin());


const  tiktokProfile = async()=>{
    process.setMaxListeners(0)
    const sumQueued = 5
    let arrayCookieDelete = []
    const date = '2024-04-06'
    const dateTimeStamp = moment(date).format('X')
    console.log(dateTimeStamp)
    let indexCookie = 0 
    const browser1 = await puppeteer.launch({
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
            '--user-agent=Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/120.0.0.0 Safari/537.36'
            
          ],
          ignoreHTTPSErrors: true,
          executablePath:executablePath()
    
    }); 
    const browser2 = await puppeteer.launch({
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
    const browser3 = await puppeteer.launch({
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
    const browser4 = await puppeteer.launch({
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
    const browser5 = await puppeteer.launch({
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
    const browser6 = await puppeteer.launch({
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
    const browser7 = await puppeteer.launch({
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
    const browser8 = await puppeteer.launch({
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
    const browser9 = await puppeteer.launch({
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
    const browser10 = await puppeteer.launch({
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
    const browser11 = await puppeteer.launch({
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
    
    });    const browser12 = await puppeteer.launch({
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
    let ordinalCookie1 = 0
    queueKeyWordApi1.process(async(job,done)=>{
        let arrayData = await workkeyfunction(0,job,browser1,ordinalCookie1)
        console.log(arrayData.length)
        if(arrayData.length>200){
            arrayData.map(async(x)=>{
                if(x.date>=dateTimeStamp){
                    const insert = new schemaurlpost({keyword:job.data.keyword,...x})
                    await insert.save()
                } 
            })
        }else{
            if(arrayData.length==2){
                arrayCookieDelete.push(arrayData)
                await fs.writeFile('deletecookie.json',JSON.stringify(arrayCookieDelete))
            }
            if(job.data.addQueued<sumQueued){
                queueKeyWordApi1.add({keyword:job.data.keyword,addQueued:job.data.addQueued+1})
                ordinalCookie1++
                if(ordinalCookie1==19){
                    ordinalCookie1 = 0
                }
            }
        }
        
        done()
    })
    let ordinalCookie2 = 0
    queueKeyWordApi2.process(async(job,done)=>{
        let arrayData = await workkeyfunction(1,job,browser2,ordinalCookie2)
        console.log(arrayData.length)
        if(arrayData.length>200){
            arrayData.map(async(x)=>{
                if(x.date>=dateTimeStamp){

                const insert = new schemaurlpost({keyword:job.data.keyword,...x})
                await insert.save()
                }
            })
        }else{
            if(arrayData.length==2){
                arrayCookieDelete.push(arrayData)
                await fs.writeFile('deletecookie.json',JSON.stringify(arrayCookieDelete))
            }
            if(job.data.addQueued<sumQueued){

                queueKeyWordApi2.add({keyword:job.data.keyword,addQueued:job.data.addQueued+1})

                ordinalCookie2++
                if(ordinalCookie2==19){
                    ordinalCookie2 = 0
                }
            }
            }
        
        done()
    })
    let ordinalCookie3 = 0
    queueKeyWordApi3.process(async(job,done)=>{
        let arrayData = await workkeyfunction(2,job,browser3,ordinalCookie3)
        console.log(arrayData.length)

        if(arrayData.length>200){
            arrayData.map(async(x)=>{
                if(x.date>=dateTimeStamp){

                const insert = new schemaurlpost({keyword:job.data.keyword,...x})
                await insert.save()}
            })
        }else{
            if(arrayData.length==2){
                arrayCookieDelete.push(arrayData)
                await fs.writeFile('deletecookie.json',JSON.stringify(arrayCookieDelete))
            }
            if(job.data.addQueued<sumQueued){

            queueKeyWordApi3.add({keyword:job.data.keyword,addQueued:job.data.addQueued+1})

            ordinalCookie3++
            if(ordinalCookie3==19){
                ordinalCookie3 = 0
            }
        }
            }
        done()
    })
    let ordinalCookie4 = 0
    queueKeyWordApi4.process(async(job,done)=>{
        let arrayData = await workkeyfunction(3,job,browser4,ordinalCookie4)
        console.log(arrayData.length)
        if(arrayData.length>200){
            arrayData.map(async(x)=>{
                if(x.date>=dateTimeStamp){

                const insert = new schemaurlpost({keyword:job.data.keyword,...x})
                await insert.save()}
            })
        }else{
            if(arrayData.length==2){
                arrayCookieDelete.push(arrayData)
                await fs.writeFile('deletecookie.json',JSON.stringify(arrayCookieDelete))
            }
            if(job.data.addQueued<sumQueued){

                queueKeyWordApi4.add({keyword:job.data.keyword,addQueued:job.data.addQueued+1})
                ordinalCookie4++
                if(ordinalCookie4==19){
                    ordinalCookie4 = 0
                }
            }
            }
        
        done()
    })
    let ordinalCookie5 = 0
    queueKeyWordApi5.process(async(job,done)=>{
        let arrayData = await workkeyfunction(4,job,browser5,ordinalCookie5)
        console.log(arrayData.length)
        if(arrayData.length>200){
            arrayData.map(async(x)=>{
                if(x.date>=dateTimeStamp){

                const insert = new schemaurlpost({keyword:job.data.keyword,...x})
                await insert.save()}
            })
        }else{
            if(arrayData.length==2){
                arrayCookieDelete.push(arrayData)
                await fs.writeFile('deletecookie.json',JSON.stringify(arrayCookieDelete))
            }
            if(job.data.addQueued<sumQueued){

                queueKeyWordApi5.add({keyword:job.data.keyword,addQueued:job.data.addQueued+1})
                ordinalCookie5++
                if(ordinalCookie5==19){
                    ordinalCookie5 = 0
                }
            }
            }
         
        
        done()
    })
    let ordinalCookie6 = 0
    queueKeyWordApi6.process(async(job,done)=>{
        let arrayData = await workkeyfunction(5,job,browser6,ordinalCookie6)
        console.log(arrayData.length)
        if(arrayData.length>200){
            arrayData.map(async(x)=>{
                if(x.date>=dateTimeStamp){
                const insert = new schemaurlpost({keyword:job.data.keyword,...x})
                await insert.save()}
            })
        }else{
            if(arrayData.length==2){
                arrayCookieDelete.push(arrayData)
                await fs.writeFile('deletecookie.json',JSON.stringify(arrayCookieDelete))
            }
            if(job.data.addQueued<sumQueued){

                queueKeyWordApi6.add({keyword:job.data.keyword,addQueued:job.data.addQueued+1})
                ordinalCookie6++
                if(ordinalCookie6==19){
                    ordinalCookie6 = 0
                }
            }
            }
        
        done()
    })
    let ordinalCookie7 = 0
    queueKeyWordApi7.process(async(job,done)=>{
        let arrayData = await workkeyfunction(6,job,browser7,ordinalCookie7)
        console.log(arrayData.length)
        if(arrayData.length>200){
            arrayData.map(async(x)=>{
                if(x.date>=dateTimeStamp){

                const insert = new schemaurlpost({keyword:job.data.keyword,...x})
                await insert.save()}
            })
        }else{
            if(arrayData.length==2){
                arrayCookieDelete.push(arrayData)
                await fs.writeFile('deletecookie.json',JSON.stringify(arrayCookieDelete))
            }
            if(job.data.addQueued<sumQueued){

                queueKeyWordApi7.add({keyword:job.data.keyword,addQueued:job.data.addQueued+1})
                ordinalCookie7++
                if(ordinalCookie7==19){
                    ordinalCookie7 = 0
                }
            }
            }   
        
        done()
    })
    let ordinalCookie8 = 0
    queueKeyWordApi8.process(async(job,done)=>{
        let arrayData = await workkeyfunction(7,job,browser8,ordinalCookie8)
        console.log(arrayData.length)
        if(arrayData.length>200){
            arrayData.map(async(x)=>{
                if(x.date>=dateTimeStamp){

                const insert = new schemaurlpost({keyword:job.data.keyword,...x})
                await insert.save()}
            })
        }else{
            if(arrayData.length==2){
                arrayCookieDelete.push(arrayData)
                await fs.writeFile('deletecookie.json',JSON.stringify(arrayCookieDelete))
            }
            if(job.data.addQueued<sumQueued){

                queueKeyWordApi8.add({keyword:job.data.keyword,addQueued:job.data.addQueued+1})
                ordinalCookie8++
                if(ordinalCookie8==19){
                    ordinalCookie8 = 0
                }
            }
            }
        
        done()
    })
    let ordinalCookie9 = 0
    queueKeyWordApi9.process(async(job,done)=>{
        let arrayData = await workkeyfunction(8,job,browser9,ordinalCookie9)
        console.log(arrayData.length)
        if(arrayData.length>200){
            arrayData.map(async(x)=>{
                if(x.date>=dateTimeStamp){

                const insert = new schemaurlpost({keyword:job.data.keyword,...x})
                await insert.save()}
            })
        }else{
            if(arrayData.length==2){
                arrayCookieDelete.push(arrayData)
                await fs.writeFile('deletecookie.json',JSON.stringify(arrayCookieDelete))
            }
            if(job.data.addQueued<sumQueued){

                queueKeyWordApi9.add({keyword:job.data.keyword,addQueued:job.data.addQueued+1})
                ordinalCookie9++
                if(ordinalCookie9==19){
                    ordinalCookie9 = 0
                }
            }
            }
        
        done()
    })
    let ordinalCookie10 = 0
    queueKeyWordApi10.process(async(job,done)=>{
        let arrayData = await workkeyfunction(9,job,browser10,ordinalCookie10)
        console.log(arrayData.length)
        if(arrayData.length>200){
            arrayData.map(async(x)=>{
                if(x.date>=dateTimeStamp){

                const insert = new schemaurlpost({keyword:job.data.keyword,...x})
                await insert.save()}
            })
        }else{
            if(arrayData.length==2){
                arrayCookieDelete.push(arrayData)
                await fs.writeFile('deletecookie.json',JSON.stringify(arrayCookieDelete))
            }
            if(job.data.addQueued<sumQueued){

                queueKeyWordApi10.add({keyword:job.data.keyword,addQueued:job.data.addQueued+1})
                ordinalCookie10++
                if(ordinalCookie10==19){
                    ordinalCookie10 = 0
                }
            }
            }
        
        done()
    }) 
    let ordinalCookie11 = 0
    queueKeyWordApi11.process(async(job,done)=>{
        let arrayData = await workkeyfunction(10,job,browser11,ordinalCookie11)
        console.log(arrayData.length)
        if(arrayData.length>200){
            arrayData.map(async(x)=>{
                if(x.date>=dateTimeStamp){

                const insert = new schemaurlpost({keyword:job.data.keyword,...x})
                await insert.save()}
            })
        }else{
            if(arrayData.length==2){
                arrayCookieDelete.push(arrayData)
                await fs.writeFile('deletecookie.json',JSON.stringify(arrayCookieDelete))
            }
            if(job.data.addQueued<sumQueued){

                queueKeyWordApi11.add({keyword:job.data.keyword,addQueued:job.data.addQueued+1})
                ordinalCookie11++
                if(ordinalCookie11==19){
                    ordinalCookie11 = 0
                }
            }
            }
        
        done()
    }) 
    let ordinalCookie12 = 0
    queueKeyWordApi12.process(async(job,done)=>{
        let arrayData = await workkeyfunction(11,job,browser12,ordinalCookie12)
        console.log(arrayData.length)
        if(arrayData.length>200){
            arrayData.map(async(x)=>{
                if(x.date>=dateTimeStamp){

                const insert = new schemaurlpost({keyword:job.data.keyword,...x})
                await insert.save()}
            })
        }else{
            if(arrayData.length==2){
                arrayCookieDelete.push(arrayData)
                await fs.writeFile('deletecookie.json',JSON.stringify(arrayCookieDelete))
            }
            if(job.data.addQueued<sumQueued){

                queueKeyWordApi12.add({keyword:job.data.keyword,addQueued:job.data.addQueued+1})
                ordinalCookie12++
                if(ordinalCookie12==19){
                    ordinalCookie12 = 0
                }
            }
            }
        
        done()
    }) 
}
tiktokProfile()


