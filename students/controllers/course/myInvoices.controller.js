const { getAllInvoicesForStudent } = require("../../APIs_of_finance_and_library/GetAllInvoices");
const User = require("../../modals/userModal");

const myInvoicesList = async (req, res) => {
  try {
    const user = await User.findOne({ username: req.session.passport.user });
    const invoices = await getAllInvoicesForStudent(user.id) || null;
    res.render('myInvoices', { message: req.flash('message'), invoices })
  } catch (error) {
    req.flash('message', "Something Went Wrong")
  }
}


module.exports = { myInvoicesList }