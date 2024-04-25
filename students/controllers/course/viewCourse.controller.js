const { Course, Enrollment } = require("../../modals/courseModals");
const User = require("../../modals/userModal");


// view course
const viewCourse = async (req, res) => {
  const { id: courseId } = req.params;
  const user = await User.findOne({ username: req.session.passport.user });
  const [course, enrollment] = await Promise.all([
    Course.findById(courseId),
    Enrollment.findOne({ course: courseId, user: user })
  ]);

  res.render('courseView', { course, message: req.flash('message'), enrollment: enrollment || null });
};

module.exports = { viewCourse }