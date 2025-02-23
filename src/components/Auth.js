import { auth } from "../config/firebase";
import { createUserWithEmailAndPassword } from 'firebase/auth';

export const Auth = () => {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const signIn = async () => {
        await createUserWithEmailAndPassword(auth, email, password)
    };
    return (
        <div>
            <input placeholder="Enter Email" onChange={(e) => setEmail(e.target.value)} />
            <input placeholder="Enter Password" onChange={(e) => setPassword(e.target.value)} />
            <button>Sign In</button>
        </div>
    );
}