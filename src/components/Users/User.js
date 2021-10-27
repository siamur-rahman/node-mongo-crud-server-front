import React from 'react';
import { useEffect, useState } from 'react';



const Users = () => {

   const [users, setUsers] = useState([]);



   useEffect(() => {
      fetch('http://localhost:5000/users')
         .then(res => res.json())
         .then(data => setUsers(data));
   }, [])

   //Delete an userr

   const handleDeleteUser = id => {
      const url = `http://localhost:5000/users/${id}`;
      fetch(url, {
         method: 'DELETE'


      })
         .then()

   }

   return (
      <div>
         <h2>This is Users {users.length}</h2>
         <ul>
            {
               users.map(user => <li key={user.id}>
                  {user.id}  name:{''} {user.name}{''} <br /> email:{''}{user.email}
                  <br />
                  <button>Update</button>
                  <button onClick={() => handleDeleteUser(user._id)}>X</button>
                  {/* <button>X</button> */}
                  <br />
                  <br />
               </li>)
            }
         </ul>
      </div>
   );
};

export default Users;