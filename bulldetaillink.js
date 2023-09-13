import Queue from 'bull';
import schemaurlpost from './models/schemaurlpost.js';
import schemahastag from './models/schemahastag.js';
import schemahastag1 from './models/schemahastag1.js';

import schemadetaillink from './models/schemadetaillink.js';
const queueDetailUrl = new Queue('queueDetailUrl','redis://127.0.0.1:6379')
const urlPost = await schemaurlpost.find({}).select('-_id')
const urlPostHashTag = await schemahastag.find({

}).select('-_id')

console.log(urlPostHashTag.length)
// console.log(urlPostHashTag)
// urlPost.map(x=>{
//     console.log(x)
//     queueDetailUrl.add(x)
// })
var a= 0

urlPostHashTag.map(async(x)=>{

        queueDetailUrl.add(x)

        // console.log(x)
        // queueDetailUrl.add(x)

    
    // console.log(x)
})

// queueDetailUrl.process((job,done)=>{
//     console.log(job.data)
//     done()
// })
// queueDetailUrl.process((job,done)=>{
//     console.log(job.data)
//     done()
// })
// queueDetailUrl.obliterate({ force: true });
