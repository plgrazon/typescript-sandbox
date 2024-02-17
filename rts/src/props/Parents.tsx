import { Child } from "./Child";

const Parent = () => {
  return <Child color="red" onClick={() => console.log("clicked")} />;
  // With this syntax: we will need to have a children typed out
  // with ChildAsFc we do not since it is inferred
  // <Child color="red" onClick={() => console.log("clicked")}>
  //   <div>a</div>
  // </Child>;
};

export default Parent;
