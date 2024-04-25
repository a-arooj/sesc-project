const logoutUser = (req, res, next) => {
  req.logout(err => {
    if (err) return next(err);
    req.flash('message', 'Logged out ');
    res.redirect('/');
  });
};
module.exports = { logoutUser }