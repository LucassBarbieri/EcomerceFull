import React from 'react'

import { app } from "../../firebase/";
import { getAuth, signOut } from 'firebase/auth';

const auth = getAuth(app);

const DashUsers = () => {

  return (
    <>
        <h2>Dashboard Client</h2>
        <button onClick={() => signOut(auth)}>Cerrar</button>
    </>
  )
}

export default DashUsers;
