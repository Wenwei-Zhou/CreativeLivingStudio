import React, { createContext, useContext, useEffect, useState } from "react";
// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// import { getAnalytics } from "firebase/analytics";
import { 
    getAuth, 
    createUserWithEmailAndPassword, 
    signInWithEmailAndPassword, 
    onAuthStateChanged, 
    signOut,
    GoogleAuthProvider,
    signInWithPopup,
} from "firebase/auth";


const firebaseConfig = {
  apiKey: "AIzaSyCpdyNFZTAcGZjCVxTqxDiiLx3XW2E8OD0",
  authDomain: "creativelivingstudio-4dde4.firebaseapp.com",
  projectId: "creativelivingstudio-4dde4",
  storageBucket: "creativelivingstudio-4dde4.firebasestorage.app",
  messagingSenderId: "982129293782",
  appId: "1:982129293782:web:5f80082d2e5f9993668c77",
  measurementId: "G-GKTH553LG9"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const googleProvider = new GoogleAuthProvider();

const AuthContext = createContext(
    {
        Register: () => Promise.resolve(),
        Signin: () => Promise.resolve(),
        SigninWithGoogle: () => Promise.resolve(),
        Logout: () => Promise.resolve(),
        Authenticated: () => Promise.resolve(),
        user: null,
        userID: null,
        userEmail: null,
    }
);



const AuthProvider = ({children}) => {
    
    const [user, setUser] = useState(null);

    const [userID, setUserID] = useState(null);

    const [userEmail, setUserEmail] = useState(null);

    useEffect(() => {
        const unsubscribe = onAuthStateChanged(auth, (user) => {
            setUser(user);
        });
        return () => unsubscribe();
    })

    const Register = (email = '', password = '') => {
        const auth = getAuth();

        createUserWithEmailAndPassword(auth, email, password) //firebase keyword createUserWithEmailAndPassword()
        .then((userCredential) => {
            // Signed up
            const user = userCredential.user;
            console.log(user);
            // ...
        })
        .catch((error) => {
            const errorCode = error.code;
            const errorMessage = error.message;
            console.log(`error code: ${errorCode}, error message: ${errorMessage}`);
            throw error;
            // ..
        });
    }

    const Signin = async (email = '', password = '') => {
        console.log(email)
        return await signInWithEmailAndPassword(auth, email, password) //firebase keyword signInWithEmailAndPassword()
        .then((userCredential) => {
            // Signed in 
            setUser(userCredential.user);
            setUserID(userCredential.user.uid)
            console.log("Check in the signin function, use: ", userCredential.user);
            console.log("Check in the signin function, use id: ", userCredential.user.uid);
            // ...
        })
        .catch((error) => {
            console.log(`Login error: ${error.code}, ${error.message}`);
            // throw error;
        });
    }

    const SigninWithGoogle = async () => {
        return await signInWithPopup(auth, googleProvider) //firebase keyword signInWithPopup()
        .then((result) => {
            // This gives you a Google Access Token. You can use it to access the Google API.
            const credential = GoogleAuthProvider.credentialFromResult(result);
            const token = credential.accessToken;
            // The signed-in user info.
            setUser(result.user);
            // IdP data available using getAdditionalUserInfo(result)
            // ...
            console.log(token);
        }).catch((error) => {
            // Handle Errors here.
            const errorCode = error.code;
            const errorMessage = error.message;
            // The email of the user's account used.
            const email = error.customData.email;
            // The AuthCredential type that was used.
            const credential = GoogleAuthProvider.credentialFromError(error);

            console.log(`errorCode: ${errorCode}, error message: ${errorMessage}, email used: ${email}, AuthCredential type: ${credential}`);
            // throw error;
            // ...
        });
    }

    const Authenticated = () => {
        
        useEffect(() => {
            const unsubscribe = onAuthStateChanged(auth, (user) => { //firebase keyword onAuthStateChanged()
                if (user) {
                    // User is signed in, see docs for a list of available properties
                    setUserEmail(user.email);
                    setUserID(user.uid);
                    setUser(user);
        
                    console.log("Authenticated user email: ", userEmail);
                    console.log("Authenticated user id: ", userID);
                    console.log("user: ", user);
                    // !!!!! check the user statue, check wether signin or logout.
                    
        
                } else {
                    // User is log out
                    console.log("Check in the Authenticated function, User is log out, cannnot find user", user);
                }
                });

                return () => unsubscribe()
        }, []);
        return userEmail;
    }
    
    const Logout = () => {
        return signOut(auth) //firebase keyword signOut()
        .then(() => {
            setUser(null);
            setUserID(null);
        })
        .catch((error) => {
            console.log("Logout error: ", error);
            throw error;
        });
    };

    return (
        <AuthContext.Provider value={{
            Register,
            Signin,
            SigninWithGoogle,
            Logout,
            Authenticated,
            user,
            userID,
            userEmail,
        }}
        >
            {children}
        </AuthContext.Provider>
    )
}

const useAuthContext = () => {
    return useContext(AuthContext);
}

export {AuthProvider, useAuthContext};