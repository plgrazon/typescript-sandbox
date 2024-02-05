import { useState } from "react";

const GuestList = (): React.JSX.Element => {
  const [name, setName] = useState("");
  const [guests, setGuests] = useState<string[]>([]);

  const onClick = () => {
    setGuests((prev) => [...prev, name]);
    setName("");
  };

  return (
    <div>
      <h1>Guest List</h1>
      <div>
        {guests.map((guest) => (
          <p>{guest}</p>
        ))}
      </div>
      <input value={name} onChange={(event) => setName(event.target.value)} />
      <button onClick={onClick}>Add Guest</button>
    </div>
  );
};

export default GuestList;
