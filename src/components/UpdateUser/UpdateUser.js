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

   }, [])




   //handle name change
   const handleNameChange = e => {
      const updatedName = e.target.value;
      const UpdatedUser = { name: updatedName, email: user.email }
      setUser(UpdatedUser)
   }

   const handleEmailChange = e => {
      const updatedEmail = e.target.value;
      // const UpdatedUser = { ...user };
      // UpdatedUser.email = updatedEmail;
      const UpdatedUser = { name: user.name, email: updatedEmail }
      setUser(UpdatedUser)
   }

   const handleAddUsers = e => {


   }

   return (
      <div>
         <h2>User : {user.name}</h2>
         <h2>user email : {user.email}</h2>
         <p>{id}</p>

         <form onSubmit={handleAddUsers}>

            <input type="text" onChange={handleNameChange} value={user.name || ""} />
            <input type="email" onChange={handleEmailChange} value={user.email || ""} />
            <input type="submit" value="Add" />
         </form>
      </div>
   );
};

export default UpdateUser;