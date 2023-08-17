const mongoose = require('mongoose');

const instructorSchema = new mongoose.Schema({
  name: {
    type: String,
    trim: true,
    maxlength: 12,
    minlength: 5
  },
  email: {
    type: String,
    required: true,
    unique: true,
    trim: true,
    lowercase: true
  }
})

const Instructor = mongoose.model('instructors', instructorSchema);

module.exports = Instructor;