import React, { useCallback, useEffect, useState } from 'react';
import { dateToString } from '../util';
import Join from './Join';
import UserList from './UserList';
import Counter from './Counter';

export interface User {
  id: number;
  name: string;
  nickname: string;
}

const App = () => {
  const [users, setUsers] = useState<User[]>([]);
  const date = dateToString(new Date());

  const getUsers = useCallback(() => {
    fetch('http://localhost:3000/api/users', { credentials: 'include' })
      .then((response) => response.json())
      .then(setUsers);
  }, []);

  useEffect(() => {
    getUsers();
  }, []);

  return (
    <div>
      <UserList users={users} />
      <Join getUsers={getUsers} />
      <div>{date}</div>
      <Counter />
    </div>
  );
};

export default App;
