import React from 'react';
import { Link } from 'react-router-dom';
import useFirebase from '../hook/useFirebase';
import useAuth from '../hook/useAuth'

const Login = () => {
    const {signInWithGoogle} = useAuth();

    const googleSignIn = () => {
        signInWithGoogle();
    }
    return (
        <div>
            <button onClick={googleSignIn}>Sign in with google</button>
        </div>
    );
};

export default Login;