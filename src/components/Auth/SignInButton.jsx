import React, { useState } from 'react'
import SigInForm from './SignInForm'

export const SignInButton = () => {
  const [signInToggle, setSignInToggle] = useState(false)

  return (
    <>
      <div onClick={() => setSignInToggle(!signInToggle)} className='auth__btn'>
        для адміністрації
      </div>
      {signInToggle ? <SigInForm /> : ''}
    </>
  )
}
