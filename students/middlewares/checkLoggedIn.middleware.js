function isLoggedIn(req, res, next) {
  if (req.isAuthenticated()) {
    return next();
  }
  req.flash('message', "Please login first")
  res.redirect("/");
}
module.exports = { isLoggedIn }