import React from 'react';
import { Fragment } from 'react';
import {useFormStatus} from 'react-dom';

function Submit(){
  const {pending} = useFormStatus();
  return <button disabled={pending}>Submit</button>
}

export default function FormActionExample() {
  async function formAction(formData) {
    console.log(formData.get('name'))
    console.log(formData.get('name'))
  }
  return (
    <Fragment>
      <form action={formAction}>
        <input type="text" name="name"  />
        <Submit/>
      </form>
    </Fragment>
  )
}
