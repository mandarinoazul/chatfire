import React from 'react';
import {Button} from '@material-ui/core';
import firebase from '../firebase.js';
import {auth} from '../firebase.js';

function SignIn() {
    function singInWithGoogle(){
    const provider = new firebase.auth.GoogleAuthProvider()
    auth.signInWithPopup(provider)
    }
  return (
    <div>
     <Button onClick={singInWithGoogle}>Sign In With Google</Button>
    </div>
  )

}

export default SignIn