import path from "path";
require('dotenv').config({ path: path.join(process.cwd(), '.env') })
const CONNECTOR = process.env.CONNECTOR

import mongoose, { mongo } from 'mongoose';

// Mongo connection
mongoose.Promise = global.Promise;
mongoose.connect(CONNECTOR, {
  useNewUrlParser: true,
  useUnifiedTopology: true
});

const friendSchema = new mongoose.Schema({
  firstName: {
    type: String
  },
  lastName: {
    type: String
  },
  gender: {
    type: String
  },
  age: {
    type: Number
  },
  language: {
    type: String
  },
  email: {
    type: String
  },
  contacts: {
    type: Array
  }
});
const Friends = mongoose.model('friends', friendSchema)
export { Friends };
