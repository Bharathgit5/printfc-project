
import { Account,AppwriteException, Client,Databases,ID} from "appwrite"

const client = new Client()
client.setEndpoint('https://api.printfc.in/v1') // Your API Endpoint
.setProject('649ee9b9cac1d0b0cae3');


const storage = Client.storage;
const database = new Databases(client);


const login = async (Email, password) => {
  try {
    const account = new Account(client)
    return account.createEmailSession(Email, password)
  } catch (error) {
    const appwriteError = AppwriteException;
    throw new Error(appwriteError.message)
  }
}


const register = async (Email, password) => {
  try {
    const account = new Account(client)
    return account.create(ID.unique(), Email, password)
  } catch (error) {
    const appwriteError = AppwriteException;
    throw new Error(appwriteError.message)
  }
}

const creatUserDocument = async ({ $id, username, email }) => {
  console.log("creatUserDocument: " + $id);
  console.log("creatUserDocument: " + username);
  try {
    return database.createDocument(
      // "64397a645b2d0000f2e0", // I commented out because this is my own database
      // "64397a6ec7fce839a55c",
      "649f1605114fea3fd306",
      "649f1621912f33b580b0",
      $id,
      {
        username,
        email,
      }
    );
  } catch (e) {
    console.error(e.message);
  }
};

const updateUserDocument = async ({docname,color, side}) => {
  const account = new Account(client)
  const user = await account.get();

  try {
    console.log("updateUserDocs: " + user.$id);
    return database.updateDocument(
      // "64397a645b2d0000f2e0", // I commented out because this is my own database
      // "64397a6ec7fce839a55c",
      "649f1605114fea3fd306",
      "649f1621912f33b580b0",
      user.$id,
      {color, side}
    );
  } catch (e) {
    console.error(e.message);
  }
};
const updateUserDocument1 = async ({docname}) => {
  const account = new Account(client)
  const user = await account.get();

  try {
    console.log("updateUserDocs: " + user.$id);
    return database.updateDocument(
      // "64397a645b2d0000f2e0", // I commented out because this is my own database
      // "64397a6ec7fce839a55c",
      "649f1605114fea3fd306",
      "649f1621912f33b580b0",
      user.$id,
      {docname}
    );
  } catch (e) {
    console.error(e.message);
  }
};
const updateUserDocument2 = async ({numpages,numcopies,price,totalprice}) => {
  const account = new Account(client)
  const user = await account.get();

  try {
    console.log("updateUserDocs: " + user.$id);
    return database.updateDocument(
      // "64397a645b2d0000f2e0", // I commented out because this is my own database
      // "64397a6ec7fce839a55c",
      "649f1605114fea3fd306",
      "649f1621912f33b580b0",
      user.$id,
      {numpages,numcopies,price,totalprice}
    );
  } catch (e) {
    console.error(e.message);
  }
};

export {
 

  Client,
  storage,
  register,
  login,
  creatUserDocument,
  updateUserDocument,
  updateUserDocument1,
  updateUserDocument2,
 
};