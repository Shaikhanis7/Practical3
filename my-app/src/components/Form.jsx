import React from 'react';
import {useRef} from 'react'

const Form=()=>
{
   const emailInputRef=useRef(null);
   const passwordInputRef=useRef(null);

   const handleSubmit=(event)=>
   {
        event.preventDefault();
        const formData=
        {
            email:emailInputRef.current.value,
            password:passwordInputRef.current.value
        }

        console.log(formData);
        emailInputRef.current.value=""
        passwordInputRef.current.value=""
        emailInputRef.current.focus();

   }

   return(
    <div>
        <form onSubmit={handleSubmit}>
         <div>
            <label htmlFor="email">Email</label>
            <input type="email" 
            id="email"
             name="email"
              ref={emailInputRef}
              required/>
         </div>
         <div>
            <label htmlFor="password">Password</label>
            <input type="password" 
            id="password"
             name="password"
              ref={passwordInputRef}
              minLength={8}
              required/>
         </div>
         <button type="submit">Login</button>
        </form>
    </div>
   )

}

export default Form;