import React from 'react'
import { connect } from 'react-redux'
import { signOut } from '../../store/actions/authActions'

const SignOutButton = (props) => {
  return (
    <button onClick={props.signOut} className='auth__btn-sign'>
      Вихід
    </button>
  )
}

const mapDispatchToProps = (dispatch) => {
  return {
    signOut: () => dispatch(signOut())
  }
}

export default connect(null, mapDispatchToProps)(SignOutButton)
