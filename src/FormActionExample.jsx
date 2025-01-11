import React from 'react';
import { Fragment } from 'react';
import { useFormStatus } from 'react-dom';
import useUserStore from './useUserStore'
function Submit() {
  const { user, login, logout } = useUserStore();
  const { pending } = useFormStatus();
  return (
    <>
      {user ? (<p>{user.name}</p>) : (<p>Logout already</p>)}

      <button onClick={login}>Login</button>
      <button onClick={logout}>Logout</button>
      <button disabled={pending}>Submit</button>
    </>
  )
}

export default function FormActionExample() {
  async function formAction(formData) {
    console.log(formData.get('name'))
    console.log(formData.get('name'))
  }
  return (
    <Fragment>
      <form action={formAction}>
        <input type="text" name="name" />
        <Submit />
      </form>
    </Fragment>
  )
}
