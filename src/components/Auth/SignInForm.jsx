import React from 'react';
import { useForm } from 'react-hook-form';
import { connect } from 'react-redux';
import { signIn } from '../../store/actions/authActions';


const SigInForm = (props) => {

    const { register, handleSubmit } = useForm()
    const onSubmit = ({ login, password }) => {
        props.signIn({ login, password })
    }
    const authError = props.authError;
    return (
        <form onSubmit={handleSubmit(onSubmit)}>
            <label htmlFor="login">Login</label>
            <input type="text" ref={register} name="login" id="login" />
            <label htmlFor="password">Password</label>
            <input type="password" ref={register} name="password" id="password" />
            <button type="submit">Sign In</button>
            <div>
                {authError ? <p>{authError}</p> : null}
            </div>
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