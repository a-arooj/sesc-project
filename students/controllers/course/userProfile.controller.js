
const { getAllInvoicesForStudent } = require("../../APIs_of_finance_and_library/GetAllInvoices");
const { REGISTER_USER_IN_LIBRARY } = require("../../APIs_of_finance_and_library/REGISTER_USER_IN_LIBRARY");
const { checkOutStandingBalance } = require("../../APIs_of_finance_and_library/checkOutstandingBalance");
const User = require("../../modals/userModal");


const getUserProfile = async (req, res) => {
  const user = await User.findOne({ username: req.session.passport.user });

  try { await REGISTER_USER_IN_LIBRARY(user.id) }
  catch (error) { console.log(`Error creating library account: ${error}`) }

  const invoices = await getAllInvoicesForStudent(user.id) || null;
  const studentInfo = await checkOutStandingBalance(user.id);

  if (!studentInfo || studentInfo.error) {
    req.flash('message', "Please start finance module ");
    return res.redirect("/");
  }

  res.render('profile', {
    message: req.flash('message'),
    invoices,
    hasOutstandingBalance: studentInfo.hasOutstandingBalance || false
  });
};


module.exports = { getUserProfile }