const mongoose = require('mongoose');
const { Schema } = mongoose;

const visitorSchema = new Schema({
  name: { type: String, trim: true },
  email: { type: String, trim: true },
  age: { type: Number },
});

module.exports = mongoose.model('Visitor', visitorSchema);
