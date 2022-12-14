import { signInWithGooglePopup,createUserDocumentFromAuth,signInWithGoogleRedirect } from "../../utils/firebase/firebase.utils";
// import { useEffect } from "react";
// import { getRedirectResult } from "firebase/auth";
import SignUpForm from "../../components/sign-up-form/sign-up-form.component";

const SignIn = () => {

    // useEffect( () => {

    //     const loadData = async() => {
    //         const response = await getRedirectResult(auth);
    //         if(response) {
    //             const userDocRef = await createUserDocumentFromAuth(response.user);
    //         }
    //     }
    //     loadData()
    // },[]);
    
    const logGoogleUser = async() => {
        const {user}= await signInWithGooglePopup();
        const userDocRef = await createUserDocumentFromAuth(user);
        // const userDocRef = await 
    };

    return(
        <div>
            <h1>Sign In Page</h1>
            <button onClick={logGoogleUser}> Sign in with Google Popup</button>
            <SignUpForm/>
            {/* <button onClick={signInWithGoogleRedirect}> 
            Sign in with Google GOogleredirect</button> */}
        </div>
    );
};

export default SignIn;