const { REGISTER_STUDENT_IN_FINANCE } = require("../../APIs_of_finance_and_library/REGISTER_STUDENT_IN_FINANCE");
const { REGISTER_USER_IN_LIBRARY } = require("../../APIs_of_finance_and_library/REGISTER_USER_IN_LIBRARY");
const User = require("../../modals/userModal");

const uuid = require('uuid')

const registerUser = async (req, res) => {
  try {
    const { username, email, password, password2 } = req.body;
    const existing = await User.findOne({ $or: [{ username }, { email }] });

    if (existing) {
      req.flash("message", "Username or email already exists.");
      return res.redirect("/");
    }

    if (password !== password2) {
      req.flash("message", "Passwords do not match.");
      return res.redirect("/");
    }

    const userId = uuid.v4().substring(0, 5);
    const newUser = new User({ id: userId, username, email });
    const registeredUser = await User.register(newUser, password);

    const financeCreated = await REGISTER_STUDENT_IN_FINANCE(registeredUser);
    if (!financeCreated) req.flash("message", "Failed to create finance account. Please start the Finance Module.");

    const libraryCreated = await REGISTER_USER_IN_LIBRARY(registeredUser.id);
    if (!libraryCreated) req.flash("message", "Failed to create library account. Please start the Library Module.");

    req.flash("message", "Registration successful. Finance & Library Accounts created.");
    res.redirect("/");
  } catch (error) {
    console.error("Error:", error);
    req.flash("message", "An error occurred.");
    res.redirect("/register");
  }
};

module.exports = { registerUser }