import mongoose, {mongo} from 'mongoose';
const path = require("path")
require('dotenv').config({ path: path.join(process.cwd(), '.env') })
const CONNECTOR = process.env.CONNECTION
//Mongo connection

mongoose.Promise = global.Promise;
mongoose.connect(CONNECTOR, {
    useNewUrlParser: true,
    useUnifiedTopology: true
});

const friendSchema = new mongoose.Schema({
    firstName:{
        type: String
    },
    lastName:{
        type: String
    },
    gender:{
        type: String
    },
    age:{
        type: Number
    },
    language:{
        type: String
    },
    email:{
        type: String
    },
    contacts:{
        type: Array
    },
});
const Friends = mongoose.model('friends', friendSchema)
export {Friends}