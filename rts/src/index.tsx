// import ReactDOM from "react-dom";
import ReactDOM from "react-dom/client";
import GuestList from "./state/GuestList";
import UserSearch from "./state/UserSearch";
import EventComponent from "./events/EventComponent";
import UserSearchFocus from "./refs/UserSearch";

const App = () => {
  return (
    <div>
      <GuestList />
      <UserSearch />
      <UserSearchFocus />
      <EventComponent />
    </div>
  );
};

const root = ReactDOM.createRoot(document.querySelector("#root") as Element);
root.render(<App />);

// This is the old way of doing it
// const App = () => {
//   return (
//     <div>
//       <GuestList />
//       <UserSearch />
//       <EventComponent />
//     </div>
//   );
// };
//
// ReactDOM.render(<App />, document.querySelector("#root"));
