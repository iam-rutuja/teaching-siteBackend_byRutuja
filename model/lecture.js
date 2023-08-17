const mongoose = require('mongoose');

const lectureSchema = new mongoose.Schema({
  courseId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'courses',
  },
  instructorId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'instructors',
  },
  date: Date,
});

const Lecture = mongoose.model('lectures', lectureSchema);

module.exports = Lecture;
