import React from 'react';
import { User } from './App';

interface Props {
  users: User[];
}

const UserList = ({ users }: Props) => {
  const lis = users.map((user) => (
    <li key={user.id}>
      {user.name}({user.nickname})
    </li>
  ));

  return (
    <div>
      <ul>{lis}</ul>
    </div>
  );
};

export default UserList;
