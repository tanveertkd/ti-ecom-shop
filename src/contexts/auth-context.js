import { createContext, useContext, useState } from 'react';
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
        } catch (error) {
            console.log("Couldn't get token: ", error);
        }
    };

    // Hanlder for signing up.
    const signUpHandler = async (event, userInput) => {
        event.preventDefault();

        const {firstName, lastName, email, password} = userInput; 
        console.log("created acc with: ", firstName, email, password)
        try{
            const responseToken = await signupService(firstName, lastName, email, password);
            localStorage.setItem('AUTH_TOKEN', responseToken);
            console.log("created acc with: ", firstName, email, password)
            setAuth(true);
            navigate('/')
        } catch(error) {
            console.log("Couldn't get token: ", error);
        } 
    }

    // Handler for signout
    const signOutHandler = () => {
        localStorage.removeItem('AUTH_TOKEN');
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
