import { hash, compare } from "bcryptjs";
const encrypt = async (pass: string) => {
  const passwordHash = await hash(pass, 8);
  return passwordHash;
};

const verified = async (password: string, passHash: string) => {
  const isCorrect = await compare(password, passHash);
  return isCorrect;
};

export { encrypt, verified };
