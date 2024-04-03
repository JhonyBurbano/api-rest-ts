import { IAuth } from "../interfaces/auth.interface";
import { IUser } from "../interfaces/user.interface";
import UserModel from "../models/auth.models";
import { encrypt, verified } from "../utils/bcrypt.handle";
import { generateToken } from "../utils/jwt.handle";

const registerNewUser = async ({ email, password, name }: IUser) => {
  const checkIs = await UserModel.findOne({ email });
  if (checkIs) return "ALREADY_USER";
  const passHash = await encrypt(password);
  const result = await UserModel.create({ email, password: passHash, name });
  return result;
};

const loginUser = async ({ email, password }: IAuth) => {
  const checkUser = await UserModel.findOne({ email });
  if (!checkUser) return "NOT_FOUND_USER";
  const isCorrect = await verified(password, checkUser.password);
  if (!isCorrect) return "PASSWORD_INCORRECT";
  const token = generateToken(checkUser._id.toString(), email);
  const data = {
    token,
    user: checkUser,
  };
  return data;
};

export { registerNewUser, loginUser };
