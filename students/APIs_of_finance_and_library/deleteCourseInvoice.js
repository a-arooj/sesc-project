
async function DELETE_INVOICE(invoiceReference) {
  try {
    const url = `http://localhost:8081/invoices/${invoiceReference}/cancel`;
    const response = await fetch(url, { method: 'DELETE' });

    switch (response.status) {
      case 200:
        return { status: 200, message: 'Invoice Cancelled' };
      case 405:
        return { status: 405, message: "You can't Cancel an Invoice that is Already Paid." };
      case 404:
        return { status: 404, message: "Invoice not found" };
      default:
        return null;
    }
  } catch (error) {
    return { status: 400, message: "Something Went Wrong. Please Ensure that Finance Module is Running." };
  }
}

module.exports = { DELETE_INVOICE };
