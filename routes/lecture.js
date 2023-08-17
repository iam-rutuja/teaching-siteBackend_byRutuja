const express = require('express');
const router = express.Router();

const { addLectureToCourse } = require('../controller/lecture');
const { requireSign } = require('../controller/auth');

router.post('/course-lecture/:id', requireSign, addLectureToCourse)

module.exports = router;