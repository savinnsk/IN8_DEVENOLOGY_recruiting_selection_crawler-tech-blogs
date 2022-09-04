import "dotenv"
import { Request, Response, NextFunction } from "express";
import { verify } from "jsonwebtoken";
import { UsersRepository } from "../../modules/users/infra/typeorm/repositories/UsersRepository.js";

interface IPayload {
  sub: string;
}

export async function ensureUserAuthenticated(
  request: Request,
  response: Response,
  next: NextFunction
) {
  const authHeader = request.headers.authorization;
  // from header request endpoint
  if (!authHeader) {
    throw new Error("Token missing");
  }

  // [0] = bearer
  // [1] = jwt
  const [, token] = authHeader.split(" ");

  // verify token is valid

  try {
    const { sub: user_id } = verify(
      token,
      process.env.USER_SECRET_TOKEN
    ) as IPayload;


    const usersRepository = new UsersRepository();
    const user = await usersRepository.findById(user_id);

    if (!user) {
      throw new Error("User doesn't exist");
    }

    request.user = {
      id: user_id,
    };

    next();
  } catch (err) {
    throw new Error("Token invalid");
  }
}