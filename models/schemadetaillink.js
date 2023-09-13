import mongoose from 'mongoose';
import mongo_info from './connectmongo.js';
const {Schema,model} = mongoose;


mongoose.connect(mongo_info.name_colection);
const profileSchema = new Schema({
    keyword:String,
    urlPost:String,
    hashtag:String,
    idPost:String,
    date:Number

    
}, { versionKey: false })
export default model('1hashtag1111',profileSchema);
