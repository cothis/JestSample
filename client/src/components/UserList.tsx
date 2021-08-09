import React, { useEffect, useState } from 'react';
interface User {
  id: number;
  name: string;
  nickname: string;
}

const UserList = () => {
  const [users, setUsers] = useState<JSX.Element[]>();
  useEffect(() => {
    fetch('http://localhost:3000/api/users', { credentials: 'include' })
      .then((response) => response.json())
      .then((datas: User[]) => {
        console.log(datas);
        const results = datas.map((data) => (
          <li key={data.id}>
            {data.name}({data.nickname})
          </li>
        ));
        setUsers(results);
      });
  }, []);

  return (
    <div>
      <ul>{users}</ul>
    </div>
  );
};

export default UserList;
