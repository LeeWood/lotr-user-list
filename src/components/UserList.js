import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';

const UserList = () => {

  const [users, setUsers] = useState([]);

  useEffect(() => {
    const getUsers = () => {
      axios.get('https://lw-lotr-user-list.herokuapp.com/api/users/')
        .then(res => {
          console.log("users", res.data);
          setUsers(res.data);
        })
        .catch(err => {
          console.log(err);
        });
    };
    getUsers();
  }, []);

  return(
    <>
      <h1>Who Gon Crush That Rang??</h1>
      <div className='listWrapper'>
        {users.map(user => (
          <div className='userCard' key={user.id}>
            <h3>{user.name}</h3>
            <Link to={`${user.name}/posts`}><button>View Posts</button></Link>
          </div>
        ))}
      </div>
    </>
  )
};

export default UserList;