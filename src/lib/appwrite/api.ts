import { ID } from "appwrite";
import { INewUser } from "@/types";
import { account, appwriteConfig, avatars, databases } from "./config";

export async function createUserAcc(user: INewUser) {
  try {
    const newAcc = await account.create(
      ID.unique(),
      user.email,
      user.password,
      user.name
    );

    if (!newAcc) {
      throw Error();
    }

    const avatarUrL = avatars.getInitials(user.name);

    const newUser = await saveUserToDB({
      accountId: newAcc.$id,
      name: newAcc.name,
      email: newAcc.email,
      username: user.username,
      imageUrl: avatarUrL,
    });

    return newUser;
  } catch (error) {
    console.log(error);
    return error;
  }
}

export async function saveUserToDB(user: {
  accountId: string;
  email: string;
  name: string;
  imageUrl: URL;
  username?: string;
}) {
  try {
    const newUser = await databases.createDocument(
      appwriteConfig.databaseId,
      appwriteConfig.userId,
      ID.unique(),
      user
    );

    return newUser;
  } catch (error) {
    console.log(error);
  }
}
