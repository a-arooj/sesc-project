var express = require('express');
const User = require('../modals/userModal');
var router = express.Router();
const passport = require("passport");
const localStrategy = require("passport-local");
const { registerUser } = require('../controllers/user/register.controller');
const { logoutUser } = require('../controllers/user/logout.controller');
const { updateUserProfile } = require('../controllers/user/updateProfile.controller');
const { handleSuccessLogin, handleFailLogin } = require('../controllers/user/handleAuthentication.helper');
const { isLoggedIn } = require('../middlewares/checkLoggedIn.middleware');
passport.use(new localStrategy(User.authenticate()));

router.post("/register", registerUser)
router.get('/logout', isLoggedIn, logoutUser)
router.post('/update-profile', isLoggedIn, updateUserProfile);
router.get('/login-fail', handleFailLogin
)
router.get('/login-success', handleSuccessLogin
)
router.post(
  "/login",
  passport.authenticate("local", {
    failureRedirect: "/users/login-fail",
    successRedirect: "/users/login-success",
  }),
  function (req, res, next) { }
);


module.exports = router;
