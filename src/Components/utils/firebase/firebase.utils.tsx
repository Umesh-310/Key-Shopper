import { initializeApp } from "firebase/app";
import {
  getAuth,
  // signInWithRedirect,
  signInWithPopup,
  GoogleAuthProvider,
  User,
  signOut,
  signInWithEmailAndPassword,
  createUserWithEmailAndPassword,
  onAuthStateChanged,
  NextOrObserver,
} from "firebase/auth";
import { getFirestore, doc, getDoc, setDoc } from "firebase/firestore";
import { emit } from "process";

const firebaseConfig = {
  apiKey: "AIzaSyCnapoCPe9rCY1pWqQpne_CHTTK98a_nxI",
  authDomain: "aku-310.firebaseapp.com",
  databaseURL: "https://aku-310-default-rtdb.firebaseio.com",
  projectId: "aku-310",
  storageBucket: "aku-310.appspot.com",
  messagingSenderId: "1039106524523",
  appId: "1:1039106524523:web:6b100b7cd1b7260568782e",
};

// Initialize Firebase
const firebaseApp = initializeApp(firebaseConfig);

const provider = new GoogleAuthProvider();

provider.setCustomParameters({
  prompt: "select_account",
});

export const auth = getAuth();

// Taking responce from google

export const signInWithGooglePopup = () => signInWithPopup(auth, provider);
// export const signInWithGoogleRedirect = () => signInWithRedirect(auth, provider);

// saving Userdata in firebase Coming from Google

export const db = getFirestore();

export const createUserDocumentAuth = async (
  userAuth: User,
  additionalInformation = {}
) => {
  const userDocRef = doc(db, "users", userAuth.uid);

  const userSnapshot = await getDoc(userDocRef);

  if (!userSnapshot.exists()) {
    const { displayName, email } = userAuth;
    const createdAt = new Date();
    try {
      await setDoc(userDocRef, {
        displayName,
        email,
        createdAt,
        ...additionalInformation,
      });
    } catch (err) {
      console.log("error message" + err);
    }
  }

  return userDocRef;
};

// saveing UserData in firebase on sign up form

export const createAuthUserWithEmailAndPassword = async (
  email: string,
  password: string
) => {
  if (!email || !password) {
    return;
  }
  return await createUserWithEmailAndPassword(auth, email, password);
};

export const signAuthUserWithEmailAndPassword = async (
  email: string,
  password: string
) => {
  if (!email || !password) {
    return;
  }
  return await signInWithEmailAndPassword(auth, email, password);
};

export const signOutUser = async () => signOut(auth);

export const onAuthStateChangedListener = (callback: any) =>
  onAuthStateChanged(auth, callback);
