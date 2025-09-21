import { ID, OAuthProvider, Query } from "appwrite";
import { account, appwriteConfig, dataBase } from "./client";
import { redirect } from "react-router-dom";

// getUserDetails
export const getUser = async () => {
  try {
    const user = await account.get();
    if (!user) return redirect("/sign-in");
    const { documents } = await dataBase.listDocuments(
      appwriteConfig.databaseId,
      appwriteConfig.userCollectionId,
      [
        Query.equal("accountId", user.$id),
        Query.select(["name", "email", "imageUrl", "createdAt", "accountId"]),
      ]
    );
    if (documents.length === 0) return null;
    return documents[0];
  } catch (e) {
    console.log("getUser");
  }
};

// LoginWithGoogle
export const loginWithGoogle = async () => {
  try {
    await account.createOAuth2Session(
      OAuthProvider.Google,
      `${window.location.origin}/`
    );
    // After login, Appwrite will redirect to "/"
  } catch (e) {
    console.log("loginWithGoogle error:");
  }
};

// LogoutUSer
export const logoutUser = async () => {
  try {
    await account.deleteSession("current");
    return true;
  } catch (e) {
    console.log("logout error", e);
    return false;
  }
};

// get profile picture
export const getProfilePicture = async () => {
  try {
    const session = await account.getSession("current");
    const OAuthToken = session.providerAccessToken;

    if (!OAuthToken) {
      console.log("no token avaialiable");
      return null;
    }

    const response = await fetch(
      "https://people.googleapis.com/v1/people/me?personalFields=photos",
      {
        headers: {
          Authorization: `Bearer ${OAuthToken}`,
        },
      }
    );

    if (!response.ok) {
      console.log("failed to fetch profile photo");
    }
    const data = await response.json();
    const photoUrl =
      data.photos && data.photos.length > 0 ? data.photos[0].url : null;
    return photoUrl;
  } catch (e) {
    console.log("google profile fetch error");
  }
};

export const storeUserdata = async () => {
  try {
    const user = await account.get();
    if (!user) return null;

    //check user already exists
    const { documents } = await dataBase.listDocuments(
      appwriteConfig.databaseId,
      appwriteConfig.userCollectionId,
      [Query.equal("accountId", user.$id)]
    );

    if (documents.length > 0) return documents[0];

    const imageUrl = await getProfilePicture();

    // create new user document
    const newUser = await dataBase.createDocument(
      appwriteConfig.databaseId,
      appwriteConfig.userCollectionId,
      ID.unique(),
      {
        accountId: user.$id,
        email: user.email,
        name: user.name,
        imageUrl: imageUrl || "",
      }
    );
    return newUser;
  } catch (e) {
    console.log(e);
  }
};

export const getExistingUser = async () => {
  try {
    const user = await account.get();
    if (!user) return null;

    const { documents } = await dataBase.listDocuments(
      appwriteConfig.databaseId,
      appwriteConfig.userCollectionId,
      [Query.equal("accountId", user.$id)]
    );
    if (documents.length === 0) return null;
    return documents[0];
  } catch (e) {
    console.log("getexitinguser error");
    return null;
  }
};
