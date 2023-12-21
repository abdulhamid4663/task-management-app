import { GoogleAuthProvider, createUserWithEmailAndPassword, getAuth, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut, updateProfile } from "firebase/auth";
import app from "../config/firebase.config";
import { createContext, useEffect, useState } from "react";
import PropTypes from 'prop-types';
// import useAxios from "../hooks/useAxios";

const auth = getAuth(app);

export const AuthContext = createContext(null);
const googleProvider = new GoogleAuthProvider();

const AuthProvider = ({ children }) => {
    const [user, setUser] = useState(null)
    const [loading, setLoading] = useState(true);
    // const axios = useAxios();
    
    const createUser = (email, password) => {
        setLoading(true);
        return createUserWithEmailAndPassword(auth, email, password);
    }

    const userUpdateProfile = async (name, image) => {
        setLoading(true);
        try {
            await updateProfile(auth.currentUser, {
                displayName: name, photoURL: image
            });
        } catch (error) {
            console.error("Failed to update profile: ", error);
        } finally {
            setLoading(false);
        }
    }

    const loginUser = (email, password) => {
        setLoading(true);
        return signInWithEmailAndPassword(auth, email, password)
    }

    const googleLogin = () => {
        setLoading(true);
        return signInWithPopup(auth, googleProvider);
    }

    useEffect(() => {
        const unSubscribe = onAuthStateChanged(auth, currentUser => {
            setUser(currentUser);
            // const userEmail = currentUser?.email || user?.email;
            // const email = { email: userEmail }
            console.log(currentUser);
            setLoading(false);
            // if (currentUser) {
            //     axios.post("/jwt", email)
            //         .then(res => {
            //             console.log(res.data);
            //         })
            //         .catch(error => {
            //             console.error(error)
            //         })
            // }
        })

        return () => {
            return unSubscribe();
        }
    }, [])

    const logoutUser = () => {
        setLoading(true);
        return signOut(auth);
    }

    const authInfo = {
        user,
        loading,
        createUser,
        loginUser,
        logoutUser,
        userUpdateProfile,
        googleLogin,
    }

    return (
        <AuthContext.Provider value={authInfo}>
            {children}
        </AuthContext.Provider>
    );
};

AuthProvider.propTypes = {
    children: PropTypes.node,
}

export default AuthProvider;