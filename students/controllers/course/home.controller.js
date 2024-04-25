const homePage = (req, res, next) => {
  res.render('index', { title: 'Express', message: req.flash('message') });
}

module.exports = { homePage }