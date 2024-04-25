const { checkOutStandingBalance } = require("../../APIs_of_finance_and_library/checkOutstandingBalance");
const User = require("../../modals/userModal");


const graduationStatus = async function (req, res) {
  const user = await User.findOne({ username: req.session.passport.user });
  const studentInfo = await checkOutStandingBalance(user.id);

  if (!studentInfo || studentInfo.error) {
    req.flash('message', "Please start finance module ");
    return res.redirect("/");
  }
  res.render('graduation', {
    message: req.flash('message'),
    hasOutstandingBalance: studentInfo.hasOutstandingBalance || false
  });

}


module.exports = { graduationStatus }