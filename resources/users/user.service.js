const argon2 = require("argon2");
const jwt = require("jsonwebtoken");
const crypto = require("crypto");
const users = require("./user.entity");

const userService = {
  registerAdmin: async function (adminBody) {
    const { name, email, password, password2 } = adminBody;
    if (!name || !email || !password || !password2) {
      throw new Error("Fill all the details");
    }
    if (password !== password2) {
      throw new Error("Password was not matching");
    }

    const matchedUser = await users.find({
      $or: [{ email: email }, { name: name }],
    });
    if (matchedUser.length > 0) {
      throw new Error("User already exists with same email");
    }

    const salt = crypto.randomBytes(32);
    const passwordHashed = await argon2.hash(password, { salt });
    const role = adminBody.role || "lab-admin";

    const createdUser = await users.create({
      name: name,
      email: email,
      password: passwordHashed,
      salt: salt,
      role: role,
    });
    return {
      name: createdUser.name,
      email: createdUser.email,
    };
  },
  userExists: async (name) => {
    const user = await users.findOne({ name: name });
    if (user) {
      throw new Error("Username already registered");
    }
    return {
      user: {
        name: name,
      },
    };
  },
  login: async (email, password) => {
    const userRecord = await users.findOne({ email: email });
    if (!userRecord) {
      throw new Error("User not found");
    } else {
      const correctPassword = await argon2.verify(
        userRecord.password,
        password
      );
      if (!correctPassword) {
        throw new Error("Incorrect password");
      }
    }

    return {
      user: {
        email: userRecord.email,
        name: userRecord.name,
      },
      token: generateToken(userRecord),
    };
  },
};

function generateToken(user) {
  const data = {
    _id: user._id,
    name: user.name,
    email: user.email,
  };
  const signature = "c0vib91_z3c5t";
  const expiration = "6h";

  return jwt.sign({ data }, signature, { expiresIn: expiration });
}

module.exports = userService;
