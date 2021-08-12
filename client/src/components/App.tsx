import React, { useCallback, useEffect, useState } from 'react';
import Join from './Join';
import UserList from './UserList';

export interface User {
  id: number;
  name: string;
  nickname: string;
}

const App = () => {
  const [users, setUsers] = useState<User[]>([]);

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
      <UserList users={users}>
        <Test></Test>
        후아
        <Test></Test>
      </UserList>
      <Join getUsers={getUsers} />
    </div>
  );
};

export default App;

export const Test = () => {
  return <div>hi</div>;
};
