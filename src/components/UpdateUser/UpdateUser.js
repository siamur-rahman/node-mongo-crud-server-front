import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router';
// import { useRef } from 'react';

const UpdateUser = () => {
   const { id } = useParams();
   const [user, setUser] = useState({});

   useEffect(() => {
      const url = `http://localhost:5000/users/${id}`;
      fetch(url)
         .then(res => res.json())
         .then(data => setUser(data));

   })



   // const nameRef = useRef();
   // const emailRef = useRef();

   const handleAddUsers = e => {


      // const name = nameRef.current.value;
      // const email = emailRef.current.value;

      // const newUser = { name: name, email: email }

      // fetch('http://localhost:5000/users', {
      //    method: 'POST',
      //    headers: {
      //       'content-type': 'application/json'
      //    },
      //    body: JSON.stringify(newUser)
      // })//feth ses holo
      //    .then()


      // e.preventDefault();
   }

   return (
      <div>
         <h2>User : {user.name}</h2>
         <h2>user email : {user.email}</h2>
         <p>{id}</p>

         <form onSubmit={handleAddUsers}>
            {/* <input type="text" ref={nameRef} value={user.name} />
            <input type="email" ref={emailRef} value={user.email} /> */}
            <input type="text" value={user.name} />
            <input type="email" value={user.email} />
            <input type="submit" value="Add" />
         </form>
      </div>
   );
};

export default UpdateUser;