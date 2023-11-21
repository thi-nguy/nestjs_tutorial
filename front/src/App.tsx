import React, { useEffect, useState } from "react";
function App() {
  const [userList, setUserList] = useState<{ name: string; role: string }[]>(
    []
  );
  useEffect(() => {
    fetch(`http://localhost:3333/users?role=ADMIN`, {
      method: "GET",
    })
      .then((res) => res.json())
      .then((data) => setUserList(data));
  }, []);

  return (
    <>
      <h1 className="text-3xl font-bold text-blue-500">Hello world!</h1>
      {userList.map((oneUser: { name: string; role: string }) => (
        <>
          <h1>{oneUser.name}</h1>
          <h2>{oneUser.role}</h2>
        </>
      ))}
    </>
  );
}

export default App;
