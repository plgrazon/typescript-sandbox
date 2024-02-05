interface ChildProps {
  color: string;
  onClick: () => void;
  //   children: React.ReactNode;
}

export const Child = ({ color, onClick }: ChildProps): React.JSX.Element => {
  return (
    <div>
      <h1>{color}</h1>
      <button onClick={onClick}>click me</button>
    </div>
  );
};

// old way of doing and more of stylistic choice
export const ChildAsFc: React.FC<ChildProps> = ({ color, onClick }) => {
  return (
    <div>
      <h1>{color}</h1>
      <button onClick={onClick}>click me</button>
    </div>
  );
};

Child.displayName = "test";

ChildAsFc.displayName = "test";
