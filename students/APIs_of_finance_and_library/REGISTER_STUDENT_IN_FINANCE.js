
async function REGISTER_STUDENT_IN_FINANCE(student) {
  let accountCreated = false;
  if (student) {
    try {
      const data = { studentId: student.id };
      const response = await fetch('http://localhost:8081/accounts/', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(data)
      });

      if (response.ok) {
        student.is_student = true;
        await student.save();
        accountCreated = true;
      } else {
        console.error(`Failed to create finance account. Status code: ${response.status}`);
      }
    } catch (error) {
      console.error('An error occurred:', error.message);
    }
  }
  return accountCreated;
}


module.exports = { REGISTER_STUDENT_IN_FINANCE };
