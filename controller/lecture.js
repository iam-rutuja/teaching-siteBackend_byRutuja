const Course = require('../model/course');
const Lecture = require('../model/lecture');

exports.addLectureToCourse = async (req, res) => {
  try {
    const courseId = req.params.id;
    const { instructorId, date } = req.body;

    const existingLecture = await Lecture.findOne({ instructorId, date });
    if (existingLecture) {
      return res.status(400).json({ error: 'Instructor is already assigned on this date' });
    }

    const newLecture = new Lecture({
      courseId,
      instructorId,
      date,
    });

    const savedLecture = await newLecture.save();

    const courseToUpdate = await Course.findById(courseId);

    if (!courseToUpdate) {
      return res.status(404).json({ error: 'Course not found' });
    }

    courseToUpdate.lectures.push(savedLecture._id);
    await courseToUpdate.save();

    res.status(201).json(savedLecture);
  } catch (error) {
    res.status(400).json({ error: 'Failed to add lecture to course' });
  }
};