import schemakeyword from './models/schemakeyword.js';
import Queue from 'bull';
import schemaurlpost from './models/schemaurlpost.js';
import schemaurlpost1 from './models/schemaurlpost1.js';
import delay from 'delay';
const queueKeyWord = new Queue('queueKeyWordApi1','redis://127.0.0.1:6379')

  

const urlVdideo = [
    "#Lazada1212",
    "#LivestreamSuperSale1212",
    "#LazLive",
    "#PinkyLazzie",
    "#Saletungbung",
    "#SieuHoiChemGia",
    "#LazadaGiaHoi",
    "#HotSaleLive",
    "#LazFlashMax",
    "#ChoiceonLazada",
    "Lazada1212",
    "Lazada 12.12",
    "LIVESTREAM SUPERSALE 12.12",
    
    
]
console.log(urlVdideo.length)
let addQueue = 0
for(let i=0;i<urlVdideo.length;i++){
    const urlPost = await schemaurlpost1.find({keyword:`${urlVdideo[i]}`})
    console.log(urlPost.length)
// if(urlPost.length ==0){
        if(addQueue<0){
            addQueue++
            queueKeyWord.add({keyword:`${urlVdideo[i]}`,addQueued:0})
            console.log({keyword:`${urlVdideo[i]}`})
            await delay(10000)

        }else{
            queueKeyWord.add({keyword:`${urlVdideo[i]}`,addQueued:0})
            console.log({keyword:`${urlVdideo[i]}`,addQueued:0})
        }
       
}
// }

// const urlVdideo = await schemakeyword.find({})
// console.log(urlVdideo.length)
// let addQueue = 0
// for(let i=0;i<urlVdideo.length;i++){
//     const urlPost = await schemaurlpost.find({keyword:`${urlVdideo[i].keyword}`})
//     console.log(urlPost.length)
//     if(urlPost.length ==0 ){
        
//         if(addQueue<7){
//                         addQueue++
//                         queueKeyWord.add({keyword:`${urlVdideo[i].keyword}`,addQueued:0})
//                         console.log({keyword:`${urlVdideo[i].keyword}`,addQueued:0})
//                         await delay(10000)
            
//                     }else{
//                         queueKeyWord.add({keyword:`${urlVdideo[i].keyword}`,addQueued:0})
//                         console.log({keyword:`${urlVdideo[i].keyword}`,addQueued:0})
//                     }
//     } 

// }


// await queueKeyWord.obliterate({ force: true });
