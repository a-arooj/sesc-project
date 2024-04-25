
const mongoose = require('mongoose');

const { Course } = require('../modals/courseModals');
const { ADD_INITIAL_COURSES_IN_DATABASE } = require('../APIs_of_finance_and_library/ADD_INITIAL_COURSES');

async function connectToDatabase() {
  try {
    await mongoose.connect('mongodb://localhost:27017/student_portal');
    console.log('Connected to Database successfully');
    console.log('Server Started at: http://localhost:3000');

    // Check if there are any courses in the database
    const courses = await Course.find();
    if (courses.length === 0) {
      // If no courses found, add default courses
      await ADD_INITIAL_COURSES_IN_DATABASE()
    }
  } catch (err) {
    console.error('Failed to connect to MongoDB:', err);
  }
}

module.exports = connectToDatabase;
