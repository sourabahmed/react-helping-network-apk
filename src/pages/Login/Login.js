import React from 'react';
import useAuth from '../hook/useAuth'

const Login = () => {
    const {signInWithGoogle} = useAuth();

    const googleSignIn = () => {
        signInWithGoogle();
    }
    return (
        <div>
            <button className="btn btn-danger m-5" onClick={googleSignIn}>Sign in with google</button>
        </div>
    );
};

export default Login;