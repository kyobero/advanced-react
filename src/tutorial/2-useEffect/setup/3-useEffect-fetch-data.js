import React, { useState, useEffect } from 'react';

const url = 'https://api.github.com/users';

const UseEffectFetchData = () => {
  const [users, setUsers] = useState([]);

  const getUsers = async() => {
    const reponse = await fetch(url);
    const users = await reponse.json();
    setUsers(users);
    // console.log(users);
  };

  useEffect(() => {
    getUsers();
  }, []);

  return (
  <>
    <h3>github users</h3>
    <ul className='users'>
        {users.map((user) => {
          const {id, login, avartar_url, html_url} = user;
          return (
            <li key={id}>
              <img src={avartar_url} alt={login}/>
              <div>
                <h4>{login}</h4>
                <a href={html_url}>Profile</a>
              </div>
            </li>
          )
        })}  
    </ul>

  </>
  );
};

export default UseEffectFetchData;
