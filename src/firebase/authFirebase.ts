import { getAuth, signInWithEmailAndPassword, signOut } from "firebase/auth";

const auth = getAuth();

export const loginFirebase = () => {
  const email = process.env.LOGIN_EMAIL || "";
  const password = process.env.LOGIN_PASSWORD || "";

  signInWithEmailAndPassword(auth, email, password)
    .then(async (userCredential) => {
      const userId = userCredential.user.uid;

      return userId;
    })
    .catch((error) => {
      throw error;
    });
};

export const logoutFirebase = () => {
  signOut(auth)
    .then(() => {
      return console.log("User logged out");
    })
    .catch((error) => {
      throw error;
    });
};
