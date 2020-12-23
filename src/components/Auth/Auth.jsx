import React from 'react'
import { useSelector } from 'react-redux'

import { SignInButton } from './SignInButton'
import SignOutButton from './SignOutButton'

export const Auth = () => {
  const auth = useSelector((state) => state.firebase.auth)
  const signButtons = auth.uid ? <SignOutButton /> : <SignInButton />
  return <div className='auth'>{auth.isLoaded && signButtons}</div>
}
