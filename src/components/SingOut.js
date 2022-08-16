import { Button } from '@material-ui/core';
import React from 'react';
import { auth } from '../firebase.js';

function Signout() {
  return (
    <div>
        <Button onClick={() => auth.signOut()}>Sign Out</Button>
    </div>
  )
}

export default Signout