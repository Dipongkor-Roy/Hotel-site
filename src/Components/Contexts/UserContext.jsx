import { createContext, useState} from "react";
import {createUserWithEmailAndPassword, getAuth} from 'firebase/auth'
import app from "../../Firebase/firebase.config";

export const AuthContext=createContext();

const auth=getAuth(app);

const UserContext = ({children}) => {
   const [user,setUser]=useState(null)
    const creatUser=(email,password)=>{
        return createUserWithEmailAndPassword(auth,email,password)
    }
    const authInfo={user,creatUser};
    return (
       <AuthContext.Provider value={authInfo}>{children}</AuthContext.Provider>
    );
};

export default UserContext;