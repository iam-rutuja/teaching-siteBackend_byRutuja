const mongoose = require('mongoose');
const Instructor = require('./instructor')
const bcrypt = require('bcryptjs');

const userSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
    trim: true,
    maxlength: 32
  },
  email: {
    type: String,
    required: true,
    unique: true,
    trim: true,
    lowercase: true
  },
  instructorId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'instructors'
  },
  password: {
    type: String,
    required: true
  },
  role: {
    type: String,
    enum: ['admin', 'instructor']
  },
  resetPasswordLink: {
    type: String,
    default: ''
  }
}, { timestamps: true })

userSchema.pre('save', async function (next) {
  this.password = await bcrypt.hash(this.password, 10);

  console.log(this)
  if (this.role === 'instructor') {
    let instructor = await Instructor.findOne({ email: this.email });

    if (!instructor) {
      console.log("NOT FOUND")
      instructor = new Instructor({
        name: this.name,
        email: this.email
      });
    } else {
      console.log("Found")
      instructor.name = this.name;
    }

    console.log("instructor", instructor)

    let savedInstructor = await instructor.save();

    this.instructorId = savedInstructor._id
  }

  next();
});

const User = mongoose.model('users', userSchema);

module.exports = User;