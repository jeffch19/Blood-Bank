const router = require('express').Router();
const bcrypt = require('bcryptjs');
const User = require('../models/userModel');
const jwt = require('jsonwebtoken');
const authMiddleware = require('../middleware/authMiddleware');

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

// login user
router.post("/login", async (req, res) => {

  try {
  
    //check if user exists
    const user = await User.findOne({ email: req.body.email });
    if (!user) {
      return res.send ({
        success: false,
        message: "User not found",
      });
    }

    //compare password
    const validPassword = await bcrypt.compare(
      req.body.password,
      user.password,
    );

    if (!validPassword) {
      return res.send ({
        success: false,
        message: "Invalid Password",
      });
    }

    //generate token
    const token = jwt.sign(
      {userId : user._id}, process.env.jwt_secret, { expiresIn: '1d'}
    )
    
    return res.send ({
      success: true,
      message: "User logged in successully",
      data: token,
    });
    





  } catch (error) {
    return res.send({
      success: false,
      message: error.message,
    });
  }
});

//get current user
router.get("/get-current-user", authMiddleware,  async (req, res) => {
  try {
    const user = await User.findOne({ _id: req.body.userId });
    return res.send ({
      success: true,
      message: "User Fetched Successfully",
      data: user,
    })
  } catch (error) {
    return res.send({
      success: false,
      message: error.message,
    });
  }
})

module.exports = router;