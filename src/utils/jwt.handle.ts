import { sign, verify } from "jsonwebtoken";
const JWT_SECRET = process.env.JWT_SECRET || "wdss";

const generateToken = (id: string, email: string) => {
  const createToken = sign({ id, email }, JWT_SECRET, {
    expiresIn: "2h",
  });
  return createToken;
};

const verifyJwt = (token: string) => {
  const verifyToken = verify(token, JWT_SECRET);
  return verifyToken;
};

export { generateToken, verifyJwt };
