import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

import { initializeAppCheck, ReCaptchaV3Provider } from "firebase/app-check";

import firebaseConfig from "../../config/Firebase";

const firebase = initializeApp(firebaseConfig);

let appCheckToken = process?.env?.REACT_DEBUG_TOKEN;

if (window.location.hostname === "localhost") {
  // @ts-ignore
  window.self.FIREBASE_APPCHECK_DEBUG_TOKEN = true;
}

if (process?.env?.NODE_ENV && process?.env?.NODE_ENV !== "development") {
  appCheckToken = process?.env?.REACT_APP_SITE_KEY;
}

initializeAppCheck(firebase, {
  provider: new ReCaptchaV3Provider(`${appCheckToken}`),

  // Optional argument. If true, the SDK automatically refreshes App Check
  // tokens as needed.
  isTokenAutoRefreshEnabled: true,
});

export const db = getFirestore();

export default firebase;
