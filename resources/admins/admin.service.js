const argon2 = require("argon2");
const crypto = require("crypto");
const mapper = require("object-mapper");
const users = require("../users/user.entity");
const adminProfile = require("./admin.profile");
const doctors = require("../doctors/doctor.entity");
const organizations = require("../organizations/organization.entity");

const adminService = {
  registerOrganization: async function (registerBody) {
    const { name, email } = registerBody;
    const registeredOrganization = await organizations.findOne({ email: email });
    if (registeredOrganization) {
      throw new Error(
        `requested email already registered for ${registeredOrganization.name}`
      );
    }
    const createdOrganization = await organizations.create({
      name: name,
      email: email,
      mobile: registerBody.mobile,
      landline: registerBody.landline,
      address: registerBody.address,
      city: registerBody.city,
      area: registerBody.area,
      status: registerBody.status,
      comments: registerBody.comments,
    });
    return {
      user: {
        name: createdOrganization.name,
        email: createdOrganization.email,
      },
    };
  },
  registerDoctor: async function (registerBody) {
    const { name, email } = registerBody;
    const registeredDoctor = await doctors.findOne({ email: email });
    if (registeredDoctor) {
      throw new Error(
        `requested email already registered for ${registeredDoctor.name}`
      );
    }
    const createdDoctor = await doctors.create({
      name: name,
      email: email,
      mobile: registerBody.mobile,
      landline: registerBody.landline,
      address: registerBody.address,
      city: registerBody.city,
      area: registerBody.area,
      status: registerBody.status,
      comments: registerBody.comments,
    });
    return {
      user: {
        name: createdDoctor.name,
        email: createdDoctor.email,
      },
    };
  },

  registerLab: async function (registerBody) {
    console.log(registerBody);
    const { name, email, password, password2 } = registerBody;
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
    const role = registerBody.role || "lab-user";

    const createdUser = await users.create({
      name: name,
      email: email,
      password: passwordHashed,
      salt: salt,
      mobile: registerBody.mobile,
      landline: registerBody.landline,
      address: registerBody.address,
      city: registerBody.city,
      area: registerBody.area,
      status: registerBody.status,
      comments: registerBody.comments,
      signature: registerBody.signature,
      role: role,
    });

    return {
      user: {
        name: createdUser.name,
        email: createdUser.email,
      },
    };
  },

  labLists: async () => {
    let labs = await users.find({ role: { $ne: "lab-admin" } });
    return mapper(labs, adminProfile.labList);
  },
  organizationLists: async () => {
    let organizationList = await organizations.find({});
    return mapper(organizationList, adminProfile.organizationList);
  },
  doctorLists: async () => {
    let doctorList = await doctors.find({});
    return mapper(doctorList, adminProfile.doctorsList);
  },
};

module.exports = adminService;
