import User from "../models/user-modal.js";
import { ResponseError } from "../error/response-error.js";

const getUser = async (req, res) => {
  const users = await User.find();

  if (!users) {
    throw new ResponseError(500, "Services Error");
  }

  return users;
};

const getUserId = async (id) => {
  const users = await User.findById(id);

  if (!users) {
    throw new ResponseError(404, "User is not found");
  }

  return users;
};

const post = async (request) => {
  const existingUser = await User.findOne({ name: request.name });

  if (existingUser) {
    throw new ResponseError(400, "Name already exist");
  }
  const newUser = new User(request);
  return newUser.save();
};

const update = async (id, request) => {
  const existingUser = await User.findById(id);

  if (!existingUser) {
    throw new ResponseError(400, "User is not found");
  }

  return User.updateOne({ _id: id }, { $set: request });
};

const remove = async (id) => {
  const existingUser = await User.countDocuments(id);

  if (!existingUser) {
    throw new ResponseError(400, "User is not found");
  }

  return User.deleteOne({ _id: id });
};

export default { getUser, getUserId, post, update, remove };
