const { Course } = require("../../modals/courseModals");

const allCourses = async function (req, res, next) {
  try {
    const courses = await Course.find();
    const context = {
      title: 'All Courses',
      message: req.flash('message'),
      courses: courses
    };
    res.render('courses', context);
  } catch (error) {
    console.error('Error fetching courses:', error);
    res.status(500).send('An error occurred while fetching courses');
  }
};


module.exports = { allCourses }