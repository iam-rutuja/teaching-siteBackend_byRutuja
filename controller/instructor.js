const Instructor = require("../model/instructor")
const Lecture = require('../model/lecture')

exports.readInstructors = async (req, res) => {
  try {
    const instructors = await Instructor.find();
    res.status(200).send({
      instructors
    })
  } catch (error) {
    res.status(404).json({ error })
  }
}

exports.getInstructorLectures = async (req, res) => {
  try {
    const instructorId = req.params.id;
    
    const instructor = await Instructor.findById(instructorId);

    if (!instructor) {
      return res.status(404).json({ error: 'Instructor not found' });
    }

    const lectures = await Lecture.find({ instructorId }).populate({
      path: 'courseId',
      select: 'name',
    });

    res.status(200).json(lectures);
  } catch (error) {
    res.status(500).json({ error: 'Error fetching instructor lectures' });
  }
};
