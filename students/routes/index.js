var express = require('express');
const { homePage } = require('../controllers/course/home.controller');
const { allCourses } = require('../controllers/course/allCourses.controller');
const { getEnrolledCourses } = require('../controllers/course/enrolledCourses.controller');
const { getUserProfile } = require('../controllers/course/userProfile.controller');
const { viewCourse } = require('../controllers/course/viewCourse.controller');
const { enrollCourse } = require('../controllers/course/enrollCourse.controller');
const { cancelEnrollment } = require('../controllers/course/cancelEnrollment.controller');
const { findCourse } = require('../controllers/course/searchCourse.controller');
const { retryToCrateLibraryAccount } = require('../controllers/course/createLibraryAccountEndPoint.controller');
const { isLoggedIn } = require('../middlewares/checkLoggedIn.middleware');
const { myInvoicesList } = require('../controllers/course/myInvoices.controller');
const { graduationStatus } = require('../controllers/course/graduationStatus.controller');
const { libraryInfo } = require('../controllers/course/library.controller');
// const User = require('../modals/UserModal');
var router = express.Router();

/* GET home page. */
router.get('/', homePage);

router.get('/all-courses', allCourses)

router.get('/enrolled-courses', isLoggedIn, getEnrolledCourses);

router.get('/profile', isLoggedIn, getUserProfile)

router.get('/course/:id', isLoggedIn, viewCourse)

router.get('/my-invoices', isLoggedIn, myInvoicesList
)

router.get('/graduation-status', isLoggedIn, graduationStatus)

router.get('/library-info', isLoggedIn, libraryInfo)

// Route handler for enrolling a user in a course
router.get('/enroll-course/:id', isLoggedIn, enrollCourse);

// Route handler for canceling enrollment
router.get('/cancel-enrollment/:Eid/:Cid', cancelEnrollment);

router.post('/search-courses', isLoggedIn, findCourse);

router.get('/create-library-account', isLoggedIn, retryToCrateLibraryAccount)



module.exports = router;
