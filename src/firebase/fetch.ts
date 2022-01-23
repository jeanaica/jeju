import { db } from "adapters/Firebase";
import { collection, getDocs } from "firebase/firestore";

const validateToken = async (token?: string | null) => {
  let validateToken = null;

  if (token) {
    const querySnapshot = await getDocs(collection(db, "guests"));

    querySnapshot.forEach((doc) => {
      if (token === doc.id) {
        validateToken = doc.id;

        return validateToken;
      }
    });
  }

  return validateToken;
};

export default validateToken;
