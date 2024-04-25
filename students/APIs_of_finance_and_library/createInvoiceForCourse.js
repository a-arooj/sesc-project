async function createInvoice(amount, dueDate, invoiceType, studentId) {
  const data = {
    amount,
    dueDate,
    type: invoiceType,
    account: {
      studentId
    }
  };

  const url = "http://localhost:8081/invoices/";
  const headers = {
    "Content-Type": "application/json"
  };

  try {
    const response = await fetch(url, {
      method: 'POST',
      headers,
      body: JSON.stringify(data)
    });

    switch (response.status) {
      case 201:
        const invoiceData = await response.json();
        return {
          is_created: true,
          reference: invoiceData.reference || null
        };
      case 422:
        return {
          is_created: false,
          reference: null,
          invalid_student: true
        };
      default:
        return {
          is_created: false,
          reference: null
        };
    }
  } catch (error) {
    console.error(`An error occurred: ${error.message}`);
    return {
      is_created: false,
      reference: null
    };
  }
}

module.exports = { createInvoice }