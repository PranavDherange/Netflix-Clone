import React from 'react';
import './SignUp.css';

function SignUp() {
    return (
        <div className="signUpScreen">
            <form>
                <h1>Sign In</h1>
                <input placeholder="Email" type="email" />
                <input placeholder="Password" type="password" />
                <button type="submit">Sign In</button>
                <h4>
                    <span className="signUpScreen__gray">New to Netflix? </span>
                    <span className="signUpScreen__link">Sign Up now</span>
                </h4>
            </form>
        </div>
    )
}

export default SignUp;