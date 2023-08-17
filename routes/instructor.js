const express = require('express');
const router = express.Router();

//controllers
const { readInstructors, getInstructorLectures } = require('../controller/instructor');
const { requireSign } = require('../controller/auth');

router.get('/instructors', requireSign, readInstructors);
router.get('/instructor-lecture/:id', requireSign, getInstructorLectures)

module.exports = router;