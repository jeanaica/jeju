import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

import { initializeAppCheck, ReCaptchaV3Provider } from "firebase/app-check";

import firebaseConfig from "../../config/Firebase";

const firebase = initializeApp(firebaseConfig);

initializeAppCheck(firebase, {
  provider: new ReCaptchaV3Provider(`${process.env.REACT_APP_SITE_KEY}`),

  // Optional argument. If true, the SDK automatically refreshes App Check
  // tokens as needed.
  isTokenAutoRefreshEnabled: true,
});

export const db = getFirestore();

export default firebase;
