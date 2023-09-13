import puppeteer from 'puppeteer';
import domtiktokkey from './dom/domhastag.json' assert { type: 'json' }
import delay from 'delay';
import fs from 'fs/promises'
const  tiktokProfile = async()=>{
    const timewait =5000
    const getEnd=100
    const browser = await puppeteer.launch({
        headless: false,
        // userDataDir: '/Users/hoangsa/Library/Application Support/Google/Chrome/Profile 9',
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
        const page = await browser.newPage()
        // await page.setCookie(...cookie.cookie[9])
        page.setViewport({width: 1440, height: 900});
            await page.goto(`https://www.tiktok.com/@surthycooks/video/7167871314240244997`)
            await delay(20000)
            const cookies = await page.cookies()
            await fs.writeFile('cookiedetaillink.json',JSON.stringify(cookies))  
            await browser.close()
    }
tiktokProfile()