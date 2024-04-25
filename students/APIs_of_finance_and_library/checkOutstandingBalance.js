const axios = require('axios');

async function checkOutStandingBalance(studentId) {
  const url = `http://localhost:8081/accounts/student/${studentId}`;

  try {
    const response = await fetch(url);
    const data = await response.json();

    if (response.ok) {
      const hasAccount = !!data.hasOutstandingBalance;
      const hasOutstandingBalance = !!data.hasOutstandingBalance;
      return { hasAccount, hasOutstandingBalance, error: false };
    } else if (response.status === 404) {
      return { hasAccount: false, error: false };
    } else {
      return { error: 'Something Went Wrong!' };
    }
  } catch (error) {
    return { error: 'Unable to Send Request. Please ensure Finance Module is Running' };
  }
}

module.exports = { checkOutStandingBalance };
