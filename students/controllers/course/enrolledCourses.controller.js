const { Course, Enrollment } = require("../../modals/courseModals");
const User = require("../../modals/userModal");


const getEnrolledCourses = async (req, res, next) => {
  try {
    const loggedInUser = await User.findOne({ username: req.session.passport.user });
    const enrolledCourses = await Course.find({ _id: { $in: (await Enrollment.find({ user: loggedInUser })).map(enrollment => enrollment.course) } });
    res.render('courses', { title: 'My Enrolled Courses', courses: enrolledCourses, message: req.flash('message') });
  } catch (error) {
    console.error('Error fetching enrolled courses:', error);
    req.flash('message', 'Failed to fetch enrolled courses. Please try again later.');
    res.status(500).send('Internal Server Error');
  }
};

module.exports = { getEnrolledCourses };