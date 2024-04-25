

const handleSuccessLogin = (req, res) => {
  req.flash("message", "You have successfully logged in.");
  res.redirect("/");
}

const handleFailLogin = (req, res) => {
  req.flash("message", "Login failed! Please check your username and password.");
  res.redirect("/");
}


module.exports = { handleSuccessLogin, handleFailLogin }