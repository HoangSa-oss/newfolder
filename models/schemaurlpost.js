import mongoose from 'mongoose';
import mongo_info from './connectmongo.js';
const {Schema,model} = mongoose;


mongoose.connect(mongo_info.name_colection);
const profileSchema = new Schema({
    keyword:String,
    urlPost:String,
    date:String,
    idPost:String
    
}, { versionKey: false })
export default model('1keyword111',profileSchema);
