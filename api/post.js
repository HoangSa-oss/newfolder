import moment from 'moment';
import schemaurlpost from '../models/schemaurlpost.js';
import Queue from 'bull';
const daily = 2
const monthly= 13

const timeDaily = moment().subtract(2, 'days').format('X')
const timeMonthly = moment.months().format('X')
console.log(timeMonthly)
// const RedisQueueConfig = {
//     redis: {
//       host: '51.79.21.42',
//       port: 1795,
//       db: 7,sssss
//       password: '98ySUFdCXrFG',
//     }
// };

// const insertBuzzQueue = new Queue(`TT:URL:GET-POST`, RedisQueueConfig);
// const postData = async()=>{
//     const data = await schemaurlpost.aggregate([
//         {$match:{date:{$gte:dateTimeStampStart,$lte:dateTimeStampEnd},postApi:false}},
//         { $limit : 10 }
//     ])
//     let id_list = []
//     let data_list=[]
//     data.map((x)=>{   
//         id_list.push(x._id)
//         data_list.push({keyword:x.keyword,urlPost:x.urlPost,date:x.date,crawl:"monthly"})
//     })
//     await schemaurlpost.updateMany(
//         {"_id":{$in:id_list} },
//         {$set:{postApi:true}}
//     )
//     console.log(data_list)
//     // const a = await insertBuzzQueue.add(data_list, { removeOnComplete: true });    

    
// }
// schedule(`*/10 * * * * *`, async() => {
//    await postData()
// });
