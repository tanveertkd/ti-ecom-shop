import { useNavigate } from 'react-router-dom';

const SignInSignUp = () => {

    const navigate = useNavigate();

    const getUserAuthState = () => localStorage.getItem('AUTH_TOKEN') ? true : false;
    
    return(
        
        <div>
            { (!getUserAuthState)
            ? navigate('signin')
            : navigate('/') }
        </div>

        
    );
}

export { SignInSignUp };