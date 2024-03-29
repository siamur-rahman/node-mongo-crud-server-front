import React from 'react';
import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';



const Users = () => {

   const [users, setUsers] = useState([]);



   useEffect(() => {
      fetch('http://localhost:5000/users')
         .then(res => res.json())
         .then(data => setUsers(data));
   }, [])

   //Delete an userr

   const handleDeleteUser = id => {

      const proced = window.confirm('are you sure , you want to delete');
      if (proced) {
         const url = `http://localhost:5000/users/${id}`;
         fetch(url, {
            method: 'DELETE'


         })
            .then(res => res.json())
            .then(data => {
               if (data.deletedCount > 0) {
                  alert('deleted successfully')
                  const remainingUsers = users.filter(user => user._id !== id)
                  setUsers(remainingUsers);
               }
               // setUsers(data) 
            });
      }
      // const url = `http://localhost:5000/users/${id}`;
      // fetch(url, {
      //    method: 'DELETE'


      // })
      //    .then(res => res.json())
      //    .then(data => {
      //       if (data.deletedCount > 0) {
      //          alert('deleted successfully')
      //          const remainingUsers = users.filter(user => user._id !== id)
      //          setUsers(remainingUsers);
      //       }
      //       // setUsers(data) 
      //    });
   }

   return (
      <div>
         <h2>This is Users {users.length}</h2>
         <ul>
            {
               users.map(user => <li key={user.id}>
                  {user.id}  name:{''} {user.name}{''} <br /> email:{''}{user.email}
                  <br />
                  <Link to={`/users/update/${user._id}`}> <button>Update</button></Link>
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