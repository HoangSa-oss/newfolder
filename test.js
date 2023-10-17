import Queue from 'bull';
import cookie from './cookiedefault.json' assert { type: 'json' }
const queueKeyWord = new Queue('queueKeyWord','redis://127.0.0.1:6379')
const queueDetailUrl = new Queue('queueDetailUrl','redis://127.0.0.1:6379')
const queueHasTag = new Queue('queueHasTag','redis://127.0.0.1:6379')
const queueKeyWordApi = new Queue('queueKeyWordApi','redis://127.0.0.1:6379')
const queueKeyWordApi1 = new Queue('queueKeyWordApi1','redis://127.0.0.1:6379')

console.log(await queueDetailUrl.count())
console.log(await queueKeyWord.count())
console.log(await queueHasTag.count())
console.log(await queueKeyWordApi.count())
console.log(await queueKeyWordApi1.count())

cookie.map((x)=>{console.log(x.length)})
