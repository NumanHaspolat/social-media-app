import { ID } from "appwrite";
import { INewUser } from "@/types";
import { account } from "./config";

export async function createUserAcc(user: INewUser) {
  try {
    const newAcc = await account.create(
      ID.unique(),
      user.email,
      user.password,
      user.name
    );

    return newAcc;
  } catch (error) {
    console.log(error);
    return error;
  }
}

//* 1:07:43
