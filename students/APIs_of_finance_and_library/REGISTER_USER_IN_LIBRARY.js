
async function REGISTER_USER_IN_LIBRARY(studentId) {
  const payload = { studentId };
  const headers = { 'Content-Type': 'application/json' };

  try {
    const response = await fetch('http://localhost:80/api/register', {
      method: 'POST',
      headers,
      body: JSON.stringify(payload)
    });

    if (response.ok) {
      console.log('Library account created successfully.');
      return true;
    } else {
      console.error(`Failed to create library account. Status code: ${response.status}`);
      return false;
    }
  } catch (error) {
    console.error(`An error occurred: ${error.message}`);
    return false;
  }
}

module.exports = { REGISTER_USER_IN_LIBRARY }