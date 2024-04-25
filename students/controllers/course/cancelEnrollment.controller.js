const { DELETE_INVOICE } = require("../../APIs_of_finance_and_library/deleteCourseInvoice");
const { Enrollment } = require("../../modals/courseModals");


const cancelEnrollment = async (req, res) => {
  try {
    const enrollmentId = req.params.Eid;
    const enrollment = await Enrollment.findById(enrollmentId);
    const invoiceDeleted = await DELETE_INVOICE(enrollment.reference);
    let message;
    switch (invoiceDeleted.status) {
      case 200:
        await Enrollment.findByIdAndDelete(enrollmentId);
        message = 'You invoice has been cancelled';
        break;
      case 405:
        message = 'You cannot cancel invoice once Paid';
        break;
      case 404:
        message = 'Failed to find invoice';
        break;
      default:
        message = 'Failed to cancel enrollment';
    }

    req.flash('message', message);
    return res.redirect(`/course/${req.params.Cid}`);
  } catch (error) {
    console.error('Error canceling enrollment:', error);
    res.status(500).send('Internal Server Error');
  }
};
module.exports = { cancelEnrollment }