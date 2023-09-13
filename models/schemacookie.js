import mongoose from 'mongoose';
import mongo_info from './connectmongo.js';
const {Schema,model} = mongoose;


mongoose.connect(mongo_info.name_colection);
const profileSchema = new Schema({
    keyword:String,
    indexCookie:String,
    ordinalCookie:String,
    length:String
}, { versionKey: false })
export default model('cookiee',profileSchema);
