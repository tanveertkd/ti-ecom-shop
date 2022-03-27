import { createContext, useContext, useState } from 'react';
import toast from 'react-hot-toast';
import { useNavigate } from 'react-router-dom';
import { signInService, signupService } from '../services';

const AuthContext = createContext();

const AuthProvider = ({ children }) => {
    const navigate = useNavigate();

    const getInitalAuthState = () => (localStorage.getItem('AUTH_TOKEN') ? true : false);

    // Hanlder for signing in.
    const signInHandler = async (event, userInput) => {
        event.preventDefault();

        const { email, password } = userInput;

        try {
            const responseToken = await signInService(email, password);
            localStorage.setItem('AUTH_TOKEN', responseToken);
            setAuth(true);
            navigate('/');
            (()=>toast.success("Logged In!"))();
        } catch (error) {
            (()=>toast.error("Couldn't log in!"))();
            console.log("Couldn't get token: ", error);
        }
    };

    // Hanlder for signing up.
    const signUpHandler = async (event, userInput) => {
        event.preventDefault();

        const {firstName, lastName, email, password} = userInput; 
        try{
            const responseToken = await signupService(firstName, lastName, email, password);
            localStorage.setItem('AUTH_TOKEN', responseToken);
            setAuth(true);
            signInHandler(event, userInput);
            navigate('/');
            (()=>toast.success("Account created successfully!"))();
        } catch(error) {
            (()=>toast.error("Couldn't create account."))();
            console.log("Couldn't get token: ", error);
        } 
    }

    // Handler for signout
    const signOutHandler = () => {
        localStorage.removeItem('AUTH_TOKEN');
        (() => toast.success('Logged out successfully.'))();
        setAuth(() => false);
    }

    const [auth, setAuth] = useState(getInitalAuthState);
    
    return (
        <AuthContext.Provider value={{ auth, setAuth, signInHandler, signUpHandler, signOutHandler }}>
            {children}
        </AuthContext.Provider>
    );
};

const useAuth = () => {
    const context = useContext(AuthContext);
    if(context === undefined)
        throw new Error("Context not defined");
    return context;
};

export { AuthProvider, useAuth };
