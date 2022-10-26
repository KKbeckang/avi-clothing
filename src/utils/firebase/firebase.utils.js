import {initializeApp} from "firebase/app";
import {
    getAuth, 
    signInWithRedirect,
    signInWithPopup,
    GoogleAuthProvider
} from "firebase/auth"
import{
    getFirestore,
    doc,
    getDoc,
    setDoc} from "firebase/firestore";
// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyChZYNCyIe3_Tx6ajTILzgiDo82VSIiuUQ",
    authDomain: "avi-clothing-db-71b7e.firebaseapp.com",
    projectId: "avi-clothing-db-71b7e",
    storageBucket: "avi-clothing-db-71b7e.appspot.com",
    messagingSenderId: "579136068427",
    appId: "1:579136068427:web:6614f07254b0cc1ac926ce"
  };
  
  // Initialize Firebase
  const firebaseApp = initializeApp(firebaseConfig);

  const provider = new GoogleAuthProvider();
  
  provider.setCustomParameters({
    prompt:"select_account"
  });

  export const auth = getAuth();
  export const signInWithGooglePopup = () => signInWithPopup(auth,provider);

  export const db = getFirestore();
  export const createUserDocumentFromAuth = async(userAuth) => {
    const userDocRef= doc(db,'users',userAuth.uid);
    console.log(userDocRef);

    const userSnapshot = await getDoc(userDocRef)
    console.log(userSnapshot)
    console.log(userSnapshot.exists());

    //if user data exists
    if(!userSnapshot.exists()){
        const {displayName,email} = userAuth;
        const createdAt = new Date();

        try{
            await setDoc(userDocRef,{
                displayName,
                email,
                createdAt
                });
        }catch(error){
            console.log('error creating the user', error.message);
        }
        

    }
    return userDocRef;
    //if user data does not exist
    // create data from snapshot
    // return userDocRef
  }