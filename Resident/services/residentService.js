const User = require("../models/User");
const Response = require("../dtos/Response");
const UserDto = require("../dtos/UserDto");
const FullDetails = require("../dtos/FullDetails");
const authClient = require("../clients/authClient");

const createtuple = async (id) => {
  const user = new User();
  user.userId = id;
  const auth = await authClient.getUser(id);

  if (auth.userName === "ADMIN") {
    user.status = "APPROVED";
    user.email = "admin@gmail.com";
    user.phoneNumber = "+919121340152";
    user.image =
      "https://media.istockphoto.com/id/1768858548/photo/dark-backlight-shadow-silhouette-of-male-person-incognito-unknown-profile.webp";
  } else {
    user.status = "PENDING";
  }

  await user.save();
  return "tuple created";
};

const approveResidentRequest = async (userId, action) => {
  const user = await User.findOne({ userId });
  if (!user) throw new Error("Resident not found");

  if (user.status !== "PENDING")
    throw new Error("Only pending residents can be approved or rejected.");

  if (action.toLowerCase() === "approve") user.status = "APPROVED";
  else if (action.toLowerCase() === "reject") user.status = "REJECTED";
  else throw new Error("Invalid action");

  await user.save();
  return new Response(`Resident ${action}d successfully`, new UserDto(user.email, user.phoneNumber, user.image, user.status));
};

const updateResident = async (userId, userDto) => {
  const user = await User.findOne({ userId });
  if (!user) throw new Error("Resident not found");

  user.email = userDto.email;
  user.phoneNumber = userDto.phoneNumber;
  user.image = userDto.image;

  await user.save();
  return new Response("Resident updated successfully", new UserDto(user.email, user.phoneNumber, user.image, user.status));
};

const deleteResident = async (userId) => {
  await User.deleteOne({ userId });
  await authClient.deleteUser(userId);
  return new Response("Resident deleted successfully", null);
};

const getResidentById = async (userId) => {
  const user = await User.findOne({ userId });
  if (!user) throw new Error("Resident not found");
  if (user.status !== "APPROVED") throw new Error("Resident is not approved");

  const auth = await authClient.getUser(userId);
  return new FullDetails(userId, auth.userName, auth.role, user.email, user.phoneNumber, user.image, user.status);
};

const getAllResidents = async () => {
  const users = await User.find();
  const fullDetails = await Promise.all(users.map(async (user) => {
    const auth = await authClient.getUser(user.userId);
    return new FullDetails(user.userId, auth.userName, auth.role, user.email, user.phoneNumber, user.image, user.status);
  }));
  return fullDetails;
};

const getAllUsers = async () => {
  return await User.find({ status: "APPROVED" });
};

module.exports = {
  createtuple,
  approveResidentRequest,
  updateResident,
  deleteResident,
  getResidentById,
  getAllResidents,
  getAllUsers,
};
