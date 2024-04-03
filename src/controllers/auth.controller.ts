import { Request, Response } from "express";
import { registerNewUser, loginUser } from "../services/auth.service";

const register = async (req: Request, res: Response) => {
  const body = req.body;
  const response = await registerNewUser(body);
  res.send(response);
};

const login = async (req: Request, res: Response) => {
  const { email, password } = req.body;
  const userLogin = await loginUser({ email, password });
  if (!userLogin) {
    res.status(403);
    res.send(userLogin);
  } else {
    res.send(userLogin);
  }
};

export { register, login };
