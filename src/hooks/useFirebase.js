import { useEffect, useState } from 'react';
import { getAuth, signInWithPopup, GoogleAuthProvider, onAuthStateChanged, GithubAuthProvider, signOut } from "firebase/auth";
import initializeAuthentication from '../Firebase/firebase.init';

initializeAuthentication();
const useFirebase = () => {
    const [user, setUser] = useState({});
    const auth = getAuth();
    const googleProvider = new GoogleAuthProvider();
    const gitProvider = new GithubAuthProvider();


    const signInUsingGoogle = () => {
        signInWithPopup(auth, googleProvider)
            .then(result => {
                const user = result.user;
            })
    }

    const handleGit = () => {
        signInWithPopup(auth, gitProvider)
        .then(res => {
            const user = res.user;
            setUser(user)
        })
    }
    const logOut = () => {
        signOut(auth)
            .then(() => {
                setUser({})
            })
    }

    useEffect(() => {
        onAuthStateChanged(auth, (user) => {
            if (user) {
                setUser(user)
            }
        })
    }, [])

    return {
        user,
        signInUsingGoogle,
        logOut,
        handleGit
    }
}

export default useFirebase;