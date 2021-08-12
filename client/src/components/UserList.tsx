import React from 'react';
import { User, Test } from './App';

interface Props {
  users: User[];
  children?: React.ReactNode;
}

const UserList = ({ users, children }: Props) => {
  const lis = users.map((user) => (
    <li key={user.id}>
      {user.name}({user.nickname})
    </li>
  ));

  return (
    <div>
      {children}
      <ul>{lis}</ul>
    </div>
  );
};

export default UserList;
