import React, { useState } from 'react';
import SigInForm from './SignInForm'

const SignInButton = () => {
    const [signInToggle, setSignInToggle] = useState(false)

    return (
        <div>
            <button onClick={() => setSignInToggle(!signInToggle)}>
                Sign In
            </button>
            { signInToggle ? <SigInForm /> : ''}
        </div>
    )
}

export default SignInButton;