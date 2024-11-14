import { createContext, useEffect, useState } from "react";
import app from "../Firebase.init/Firebase.init";
import { createUserWithEmailAndPassword, getAuth, onAuthStateChanged, signInWithEmailAndPassword, signOut } from "firebase/auth";


export const Authcontext = createContext(null)
const auth = getAuth(app);

const AuthProvider = ({ children }) => {
    const [user, setUser] = useState(null)
    console.log(user);
    
    // createUser
    const createUser =(email,password) =>{
        return createUserWithEmailAndPassword(auth,email,password)
    }
    // authobserver 
    useEffect(() => {
       const unsubcribe = onAuthStateChanged(auth,(currentuser) =>{
          setUser(currentuser)
        });
        return ()=>{
            unsubcribe ()
        }
    },[])
    // signin method
    const signIn = (email,password) =>{
        return signInWithEmailAndPassword(auth,email,password)
    }
    // logout
    const logout = ()=>{
        return signOut(auth)
    }
    const authInfo = {
        setUser,
        createUser,
        logout,
        signIn,
        user
    }
    return (
        <Authcontext.Provider value={authInfo}>
            {children}
        </Authcontext.Provider>
    );
};

export default AuthProvider;