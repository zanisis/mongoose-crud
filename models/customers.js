const mongoose = require('mongoose');
var Schema = mongoose.Schema

const customersSchema = new Schema({
  name : String,
  memberid : String,
  address : String,
  zipcode : String,
  phone : String
})

let Customer = mongoose.model('Customer', customersSchema)

module.exports = Customer;
