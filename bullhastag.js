import schemahashtag from './models/schemahashtag.js';
import Queue from 'bull';
import schemaurlpost from './models/schemahastag.js';
import schemadetaillink from './models/schemadetaillink.js';
const queueHasTag = new Queue('queueHasTag','redis://127.0.0.1:6379')

// const urlVdideo = await schemahashtag.find({})
// for(let i=0;i<urlVdideo.length;i++){
//     // const urlPost = await schemaurlpost.find({keyword:`${urlVdideo[i].keyword}`})
//     // if(urlPost.length ==0){
//         queueHasTag.add({hashtag:`${urlVdideo[i].hashtag}`})
//         console.log({hashtag:`${urlVdideo[i].hashtag}`})
// } 
const urlVdideo = [
       
]
for(let i=0;i<urlVdideo.length;i++){
  
                queueHasTag.add({hashtag:`${urlVdideo[i]}`})
                console.log({hashtag:`${urlVdideo[i]}`})

     

}

// await queueHasTag.obliterate({ force: true });

// 
// 
