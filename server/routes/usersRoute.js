const router = require('express').Router();
const bcrypt = require('bcryptjs');
const User = require('../models/userModel');

//register new user
router.post('/register', async (req, res) => {
  try {
    //check if user already exists
    const userExists = await User.findOne({ email: req.body.email });
    if (userExists) {
      return res.send({
        success: false,
        message: "User already exists",
      });
    }

    //hash the password
    const salt = await bcrypt.genSalt(10);
    const hashedPassword = await bcrypt.hash(req.body.password, salt);
    req.body.password = hashedPassword;

    //save user
    const user = new User(req.body);
    await user.save();

    return res.send({
      success: true,
      message: "User registered successully",
    });


  } catch (error) {
    return res.send({
      success: false,
      message: error.message,
    });
  }
});