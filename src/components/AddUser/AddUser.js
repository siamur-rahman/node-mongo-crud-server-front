import React from 'react';

import { useRef } from 'react';


const AddUser = () => {


   const nameRef = useRef();
   const emailRef = useRef();

   const handleAddUsers = e => {


      const name = nameRef.current.value;
      const email = emailRef.current.value;

      const newUser = { name: name, email: email }

      fetch('http://localhost:5000/users', {
         method: 'POST',
         headers: {
            'content-type': 'application/json'
         },
         body: JSON.stringify(newUser)
      })//feth ses holo
         .then()


      e.preventDefault();
   }
   return (
      <div>
         <h2>This is Add User</h2>

         <form onSubmit={handleAddUsers}>
            <input type="text" ref={nameRef} placeholder="name" />
            <input type="email" ref={emailRef} placeholder="email" />
            <input type="submit" value="Add" />
         </form>

      </div>
   );
};

export default AddUser;