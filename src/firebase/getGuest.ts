import { db } from "adapters/Firebase";
import { getAuth, signInWithEmailAndPassword } from "firebase/auth";
import { doc, getDoc, updateDoc } from "firebase/firestore";
import validateToken from "./fetch";

const getGuest = async (token: string) => {
  const data = (await getDoc(doc(db, "guests", token))).data();

  return data;
};

export const updateGuestAttendance = async (
  token: string,
  attendees: Array<Record<string, string | boolean | number>>
) => {
  const auth = getAuth();
  const data = await getGuest(token);
  return await validateToken(token).then(() => {
    const email = process.env.REACT_APP_LOGIN_EMAIL || "";
    const password = process.env.REACT_APP_LOGIN_PASSWORD || "";

    signInWithEmailAndPassword(auth, email, password)
      .then(() => {
        return updateDoc(doc(db, "guests", token), {
          ...data,
          group: attendees,
        });
      })
      .catch((error) => {
        throw error;
      });
  });
};

export default getGuest;
