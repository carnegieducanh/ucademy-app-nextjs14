"use server";

import User from "@/database/user.model";
import { connectToDatabase } from "../mongoose";
import { TcreateUserParams } from "@/types";

export default async function createUser(params: TcreateUserParams) {
  try {
    connectToDatabase();
    const newUser = await User.create(params);
    return newUser;
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
  } catch (error) {}
}
