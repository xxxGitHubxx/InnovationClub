import { auth, googleProvider } from "../config/firebase";
import { createUserWithEmailAndPassword, signInWithPopup, signOut } from 'firebase/auth';
import { useState } from "react";

export const Auth = () => {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const signIn = async () => {
        await createUserWithEmailAndPassword(auth, email, password)
    };
    const signInWithGoogle = async () => {
        await signInWithPopup(auth, googleProvider)
    };
    const signOut = async () => {
        await signOut(auth)
    };
    return (  
        <div>
            <input placeholder="Enter Email" onChange={(e) => setEmail(e.target.value)} />
            <input placeholder="Enter Password" onChange={(e) => setPassword(e.target.value)} type="password" />
            <button onClick={signIn}>Sign In</button>

            <button onClick={signInWithGoogle}>Sign In with Google</button>
        </div>
    );
}