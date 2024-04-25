

const libraryInfo = function (req, res) {
  res.render('libraryInfo', { message: req.flash('message') })
}


module.exports = { libraryInfo }