const mongoose = require('mongoose');
const Schema = mongoose.Schema;

// Course Schema
const courseSchema = new Schema({
  title: {
    type: String,

  },
  description: {
    type: String,

  },
  amount: {
    type: Number,
    required: true
  },
  enrolledBy: [{
    type: Schema.Types.ObjectId,
    ref: 'User'
  }],
  enrolledDate: {
    type: Date,
    default: Date.now
  }
});


// Enrollment Schema
const enrollmentSchema = new Schema({
  reference: {
    type: String,
    required: true
  },
  course: {
    type: Schema.Types.ObjectId,
    ref: 'Course',
    required: true
  },
  user: {
    type: Schema.Types.ObjectId,
    ref: 'User',
    required: true
  }
});

courseSchema.index({ title: 'text', description: 'text' });
const Course = mongoose.model('Course', courseSchema);
const Enrollment = mongoose.model('Enrollment', enrollmentSchema);

module.exports = { Course, Enrollment };
