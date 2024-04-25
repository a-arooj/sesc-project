const { getDueDate } = require("../../APIs_of_finance_and_library/GET_DUE_DATE");
const { createInvoice } = require("../../APIs_of_finance_and_library/createInvoiceForCourse");
const { Course, Enrollment } = require("../../modals/courseModals");
const User = require("../../modals/userModal");


const enrollCourse = async (req, res) => {
  try {
    const courseIdParam = req.params.id;
    const loggedInUsername = req.session.passport.user;
    const loggedInUser = await User.findOne({ username: loggedInUsername });

    // Check if the user is already enrolled in the course
    const existingEnrollment = await Enrollment.findOne({ course: courseIdParam, user: loggedInUser });

    // If the user is not enrolled, proceed with enrollment
    if (!existingEnrollment) {
      try {
        // Find the course by ID
        const course = await Course.findById(courseIdParam);

        // Create an invoice for course enrollment
        const enrollmentInvoice = await createInvoice(parseFloat(course.amount), getDueDate(), "TUITION_FEES", loggedInUser.id);

        if (enrollmentInvoice.is_created) {
          // Create a new enrollment instance
          const newEnrollment = new Enrollment({
            reference: enrollmentInvoice.reference,
            course: courseIdParam,
            user: loggedInUser
          });
          await newEnrollment.save();

          // Update course with the enrolled user
          await Course.findByIdAndUpdate(courseIdParam, { $push: { enrolledBy: loggedInUser._id } });

          req.flash('message', 'You have successfully enrolled in the course!');
        } else {
          req.flash('message', 'Failed to enroll. Please try again later.');
        }
      } catch (error) {
        console.error('Error enrolling user in course:', error);
        req.flash('message', 'Failed to enroll. Please try again later.');
      }
      return res.redirect(`/course/${courseIdParam}`);
    }

    // If the user is already enrolled, inform them
    req.flash('message', 'You are already enrolled in this course.');
    return res.redirect(`/course/${courseIdParam}`);
  } catch (error) {
    console.error('Error enrolling user in course:', error);
    req.flash('message', 'Error enrolling user in course. Please try again later or contact support.');
    return res.redirect('/');
  }
};

module.exports = { enrollCourse }