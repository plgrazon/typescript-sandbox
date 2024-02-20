import { useState, useRef, useEffect } from "react";

const users = [
  { name: "Al", age: 20 },
  { name: "Bert", age: 20 },
  { name: "Cal", age: 2 },
];

const UserSearchFocus = (): React.JSX.Element => {
  const inputRef = useRef<HTMLInputElement | null>(null);
  const [name, setName] = useState("");
  const [user, setUser] = useState<{ name: string; age: number } | undefined>();

  useEffect(() => {
    if (!inputRef.current) return;
    inputRef.current.focus();
  }, []);

  const onClick = () => {
    const foundUser = users.find((user) => {
      return user.name === name;
    });
    setUser(foundUser);
  };

  return (
    <div>
      <h1>UserSearchFocusOnMount</h1>
      <input
        ref={inputRef}
        value={name}
        onChange={(event) => setName(event.target.value)}
      />
      <button onClick={onClick}>Find User</button>
      <div>
        <p>{user && user.name}</p>
        <p>{user && user.age}</p>
      </div>
    </div>
  );
};

export default UserSearchFocus;
