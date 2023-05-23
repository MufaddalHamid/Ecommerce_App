const router = require("express").Router();
const User = require("../models/User");
const crypto = require("crypto");
const jwt = require("jsonwebtoken");

// REGISTER
router.post("/register", async (req, res) => {
  const { username, email, password } = req.body;

  try {
    const encryptedPassword = encrypt(password);
    const newUser = new User({
      username,
      email,
      password: encryptedPassword,
    });

    const savedUser = await newUser.save();
    const accessToken = jwt.sign(
          {
            id: savedUser._id,
            isAdmin: savedUser.isAdmin,
          },
          process.env.JWT_SEC,
          { expiresIn: "3d" }
        );
    const userWithAccessToken = {
      ...savedUser.toObject(),
      accessToken: accessToken,
    };

    console.log("call register");
    console.log(userWithAccessToken);
    res.status(201).json(userWithAccessToken);
  } catch (err) {
    res.status(500).json(err);
  }
});

// LOGIN
router.post("/login", async (req, res) => {
  try {
    const user = await User.findOne({ username: req.body.username });
    if (!user) {
      return res.status(401).json("Wrong credentials!1");
    }

    const decryptedPassword = decrypt(user.password);
    if (decryptedPassword !== req.body.password) {
      return res.status(401).json("Wrong credentials! "+decryptedPassword+req.body.password);
    }

    const accessToken = jwt.sign(
      {
        id: user._id,
        isAdmin: user.isAdmin,
      },
      process.env.JWT_SEC,
      { expiresIn: "3d" }
    );

    const { password, ...others } = user._doc;

    res.status(200).json({ ...others, accessToken });
  } catch (err) {
    res.status(500).json(err);
  }
});

function encrypt(text) {
  const cipher = crypto.createCipher("aes-256-cbc", process.env.PASS_SEC);
  let encrypted = cipher.update(text, "utf8", "hex");
  encrypted += cipher.final("hex");
  return encrypted;
}

function decrypt(encryptedText) {
  const decipher = crypto.createDecipher("aes-256-cbc", process.env.PASS_SEC);
  let decrypted = decipher.update(encryptedText, "hex", "utf8");
  decrypted += decipher.final("utf8");
  return decrypted;
}

module.exports = router;
