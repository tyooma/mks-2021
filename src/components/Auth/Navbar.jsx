import React from 'react';
import SignInButton from './SignInButton';
import SignOutButton from './SignOutButton';
import { connect } from 'react-redux';


const Navbar = (props) => {
    const { auth } = props;
    const signButtons = auth.uid ? <SignOutButton /> : <SignInButton />
    return (
        <div>
            {auth.isLoaded && signButtons}
        </div>

    )
}


const mapStateToProps = (state) => {
    return {
        auth: state.firebase.auth
    }
}

export default connect(mapStateToProps)(Navbar);