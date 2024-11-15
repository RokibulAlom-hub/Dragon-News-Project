import { createContext, useEffect, useState } from "react";
import app from "../Firebase.init/Firebase.init";
import { createUserWithEmailAndPassword, getAuth, onAuthStateChanged, signInWithEmailAndPassword, signOut } from "firebase/auth";


export const Authcontext = createContext(null)
const auth = getAuth(app);

// eslint-disable-next-line react/prop-types
const AuthProvider = ({ children }) => {
    const [user, setUser] = useState(null)
    const [loading,setLoading] = useState(true)
    console.log(user,loading);
    
    // createUser
    const createUser =(email,password) =>{
        setLoading(true)
        return createUserWithEmailAndPassword(auth,email,password)
    }
    // updateprofile
    const updateProfile =(updatedData)=>{
        return updateProfile(auth.currentUser,updatedData)
    }
    // signin method
    const signIn = (email,password) =>{
        setLoading(true)
        return signInWithEmailAndPassword(auth,email,password)
    }
    // logout
    const logout = ()=>{
        setLoading(true)
        return signOut(auth)
    }
    // authobserver 
    useEffect(() => {
       const unsubcribe = onAuthStateChanged(auth,(currentuser) =>{
          setUser(currentuser)
          setLoading(false)
        });
        return ()=>{
            unsubcribe ()
        }
    },[])
    const authInfo = {
        setUser,
        createUser,
        logout,
        signIn,
        updateProfile,
        user,
        loading
    }
    return (
        <Authcontext.Provider value={authInfo}>
            {children}
        </Authcontext.Provider>
    );
};

export default AuthProvider;