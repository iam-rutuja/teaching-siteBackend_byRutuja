const mongoose = require('mongoose');

const courseSchema = new mongoose.Schema({
  name: {
    type: String,
    trim: true,
    maxlength: 32,
    minlength: 3
  },
  level: {
    type: String,
    enum: ['Beginner', 'Intermediate', 'Advanced'],
    default: 'Beginner'
  },
  description: {
    type: String,
    trim: true,
    minlength: 5
  },
  image: {
    type: String
  },
  lectures: [
    {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'lectures',
    },
  ]
});

const Course = mongoose.model('courses', courseSchema);

module.exports = Course;
