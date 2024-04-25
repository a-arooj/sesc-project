const User = require("../../modals/userModal");

// update user profile
const updateUserProfile = async (req, res) => {
  try {
    const { username, email, first_name, last_name } = req.body;
    const userId = await User.findOne({ username: req.session.passport.user });
    const existingUser = await User.findOne({ $or: [{ email }, { username }] });
    let message;
    if (existingUser && existingUser._id.toString() !== userId._id.toString()) {
      if (existingUser.email === email) {
        message = 'Email is already in use';
      } else {
        message = 'Username is already in use';
      }
    } else {
      await User.findByIdAndUpdate(userId, { username, email, first_name, last_name });
      message = 'Profile updated successfully';
    }
    req.flash('message', message);
    res.redirect('/profile');
  } catch (error) {
    console.log(error)
    req.flash('message', "Message Something went wrong")
    return redirect('/')
  }
};


module.exports = { updateUserProfile }