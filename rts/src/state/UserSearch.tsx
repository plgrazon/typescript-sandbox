import { useState } from "react";

const users = [
  { name: "Al", age: 20 },
  { name: "Bert", age: 20 },
  { name: "Cal", age: 2 },
];

const UserSearch = (): React.JSX.Element => {
  const [name, setName] = useState("");
  const [user, setUser] = useState<{ name: string; age: number } | undefined>();

  const onClick = () => {
    const foundUser = users.find((user) => {
      return user.name === name;
    });
    setUser(foundUser);
  };

  return (
    <div>
      <h1>UserSearch</h1>
      <input value={name} onChange={(event) => setName(event.target.value)} />
      <button onClick={onClick}>Find User</button>
      <div>
        <p>{user && user.name}</p>
        <p>{user && user.age}</p>
      </div>
    </div>
  );
};

export default UserSearch;
