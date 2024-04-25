const { Course } = require("../../modals/courseModals");

const findCourse = async (req, res) => {
  try {
    const courses = await Course.find({ $text: { $search: req.body.query } });
    res.render('courses', { courses, message: req.flash('message'), title: `Search Results for ${req.body.query}` });
  } catch (error) {
    console.error('Error searching courses:', error);
    res.status(500).send('Internal Server Error');
  }
};

module.exports = { findCourse }