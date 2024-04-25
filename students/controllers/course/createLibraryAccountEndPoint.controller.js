const { REGISTER_USER_IN_LIBRARY } = require("../../APIs_of_finance_and_library/REGISTER_USER_IN_LIBRARY");
const User = require("../../modals/userModal");

const retryToCrateLibraryAccount = async (req, res) => {
  try {
    const username = req.session.passport.user;
    const user = await User.findOne({ username });
    if (!user) {
      req.flash('message', 'User not found. Please log in again.');
      return res.redirect('/');
    }

    const libraryAccount = await REGISTER_USER_IN_LIBRARY(user.id);

    if (libraryAccount) {
      req.flash('message', 'Library account created successfully. Enjoy accessing resources!');
    } else {
      req.flash('message', 'Failed to create library account. Please try again later or contact support.');
    }

    return res.redirect('/profile');
  } catch (error) {
    console.error('An error occurred while retrying to create library account:', error);
    req.flash('message', 'Failed to create library account. Please try again later or contact support.');
    return res.redirect('/');
  }
};


module.exports = { retryToCrateLibraryAccount }