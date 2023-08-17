const express = require('express');
const router = express.Router();

const { addCourse, getCourses } = require('../controller/course');
const { requireSign } = require('../controller/auth');

router.post('/course', requireSign ,addCourse)
router.get('/courses', requireSign, getCourses)

module.exports = router;