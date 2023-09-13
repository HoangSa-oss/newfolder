import cookie from './cookiedefault.json' assert { type: 'json' }
import arrayIndexCookieDelete from './deletecookie.json' assert { type: 'json' }
import fs from 'fs/promises'
let arrayCopy = JSON.parse(JSON.stringify(cookie)); 
await fs.writeFile('cookiebackup.json',JSON.stringify(cookie))
for(let i = 0;i<arrayIndexCookieDelete.length;i++){
    arrayCopy[arrayIndexCookieDelete[i][0]].splice(arrayIndexCookieDelete[i][1],1)
}
await fs.writeFile('cookiedefault.json',JSON.stringify(arrayCopy))