import { Link } from "react-router-dom";

import "./signin-signup.css"

const SignIn = () => {
    return(
        // <!-- Login body -->

        <div className="login-container">
            <div className="login">
                <p className="login-header">
                    Sign In
                </p>

                <form className="login-input-form">
                    <div className="form-input">
                        <label for="login-email" className="input-label"> Email: </label>
                        <input type="text" placeholder="Enter your email address" name="login-email"
                            className="login-email input-form" />
                    </div>

                    <div className="form-input">
                        <label for="login-password" className="input-label"> Passsword: </label>
                        <input type="password" placeholder="Enter your password" name="login-password"
                            className="login-password input-form" />
                    </div>

                    <div className="form-input checkbox-reset">
                        <div>
                            <input type="checkbox" name="form-checkbox" className="form-checkbox" />
                            <label for="form-checkbox" className="checkbox-label"> Remember me </label>
                        </div>
                        <div className="password-reset">
                            Forgot Passsword?
                        </div>
                        
                    </div>
                    <div className="form-submit-btn">
                        <button type="submit" className="btn form-btn">Sign In</button>
                    </div>
                    
                </form>

                <div className="sign-up">
                    <Link to="/signup" className="btn signup-cta">
                        Sign Up &#8594;
                    </Link>
                </div>

            </div>
        </div>

        // <!-- Login body ends -->
    );
}

export { SignIn };