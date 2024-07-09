import { useState } from "react";

function ParentComponent() {
  const [name, setName] = useState("Tao!");

  return <ChildComponent name={name} setName={setName} />;
}

function UserComponent() {
  return <h1> User Component </h1>;
}

function ProfileComponent() {
  return <h1> Profile Component </h1>;
}

function FeedComponent() {
  return <h1> Feed Component</h1>;
}
function ChildComponent(props) {
  return (
    <>
      <h1>Hello {props.name}</h1>
      <button onClick={() => props.setName("Mark")}>Change Name</button>
    </>
  );
}

export default ParentComponent;
