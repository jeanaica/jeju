import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

import { initializeAppCheck, ReCaptchaV3Provider } from "firebase/app-check";

import firebaseConfig from "../../config/Firebase";

const firebase = initializeApp(firebaseConfig);

initializeAppCheck(firebase, {
  provider: new ReCaptchaV3Provider("5959571B-CF8F-4F23-BC73-01EB06A311B5"),

  // Optional argument. If true, the SDK automatically refreshes App Check
  // tokens as needed.
  isTokenAutoRefreshEnabled: true,
});

export const db = getFirestore();

export default firebase;
