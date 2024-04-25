const axios = require('axios');

async function getAllInvoicesForStudent(studentId) {
  const url = 'http://localhost:8081/invoices';

  try {
    const response = await fetch(url);
    if (!response.ok) throw new Error(`Failed to retrieve invoices. Status code: ${response.status}`);
    const { _embedded: { invoiceList } } = await response.json();
    const studentInvoices = invoiceList.filter(invoice => invoice.studentId === studentId);
    return studentInvoices;
  } catch (error) {
    console.error('Error retrieving invoices:', error.message);
    return null;
  }
}

module.exports = { getAllInvoicesForStudent };
