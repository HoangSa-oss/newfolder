import Queue from 'bull';

const queueDetailUrl = new Queue('queueDetailUrl','redis://127.0.0.1:6379')
console.log(await queueDetailUrl.count())