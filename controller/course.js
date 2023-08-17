const Course = require('../model/course');

exports.addCourse = async (req, res) => {
  try {
    const { name, description, image } = req.body;

    const courses = await Course.find({ name });

    if(courses.length > 0) {
      return res.status(400).json({ error: "Course with provided name already exists" })
    }
    
    const newCourse = new Course({
      name,
      description,
      image
    });

    const savedCourse = await newCourse.save();
    res.status(201).json(savedCourse);
  } catch (error) {
    console.log(error)
    res.status(400).json({ error: 'Failed to add course' });
  }
};

exports.getCourses = async (req, res) => {
  try {
    const courses = await Course.find();
    if(courses.length > 0) {
     return  res.status(200).json({
        courses
      })
    }

    res.status(400).json({
      error: "Courses not added"
    })
  } catch (error) {
    res.status(400).json({ error: 'Failed to get courses' });
  }
}