import Queue from 'bull';
import schemaurlpost from './models/schemaurlpost.js';

const queueDetailUrl24h = new Queue('queueDetailUrl24h','redis://127.0.0.1:6379')
const urlPost = await schemaurlpost.find({}).select('-_id')

urlPost.map(x=>{
    console.log(x)
    queueDetailUrl24h.add(x)
})
// queueDetailUrl.process((job,done)=>{
//     console.log(job.data)
//     done()
// })
// queueDetailUrl.obliterate({ force: true });
