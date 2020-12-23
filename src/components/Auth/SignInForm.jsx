import React from 'react'
import { useForm } from 'react-hook-form'
import { connect } from 'react-redux'
import { signIn } from '../../store/actions/authActions'

const SigInForm = (props) => {
  const { register, handleSubmit } = useForm()
  const onSubmit = ({ login, password }) => {
    props.signIn({ login, password })
  }
  const authError = props.authError
  return (
    <form onSubmit={handleSubmit(onSubmit)} className='auth__form'>
      <label htmlFor='login' className='auth__label'>Email</label>
      <input
        type='text'
        ref={register}
        name='login'
        id='login'
        placeholder='Введіть email'
        className='auth__input'
      />
      <label htmlFor='password' className='auth__label'>Пароль</label>
      <input
        type='password'
        ref={register}
        name='password'
        id='password'
        placeholder='Введіть пароль'
        className='auth__input'
      />
      <button type='submit' className='auth__btn-sign'>
        Вхід
      </button>
      <div>{authError ? <p>{authError}</p> : null}</div>
    </form>
  )
}

const mapStateToProps = (state) => {
  return {
    authError: state.auth.authError
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    signIn: (creds) => dispatch(signIn(creds))
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(SigInForm)
