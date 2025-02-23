import { auth, googleProvider, db } from "../config/firebase";
import { createUserWithEmailAndPassword, signInWithPopup, signOut } from 'firebase/auth';
import { getDocs, collection, addDoc } from "firebase/firestore";
import { useEffect, useState } from "react";

export const Auth = () => {

    const memberInfoCollection = collection(db, "memberInfo");

    const [memberName, setMemberName] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
     
    const signIn = async () => {
        await createUserWithEmailAndPassword(auth, email, password)
        await addDoc(memberInfoCollection, {Account: email, Name: memberName} );
    };
    const signInWithGoogle = async () => {
        await signInWithPopup(auth, googleProvider)
        await addDoc(memberInfoCollection, { Account: googleProvider, Name: memberName });
    };
    const signOut = async () => {
        await signOut(auth)
    };

    return (  
        <div>
            <input placeholder="Enter Email" onChange={(e) => setEmail(e.target.value)} />
            <input placeholder="Enter Password" onChange={(e) => setPassword(e.target.value)} type="password" />
            <input placeholder="Enter Name" onChange={(e) => setMemberName(e.target.value)} />
            <button onClick={signIn}>Sign In</button>

            <button onClick={signInWithGoogle}>Sign In with Google</button>
        </div>
    );
}