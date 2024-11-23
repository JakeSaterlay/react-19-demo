import { Suspense } from "react";
import UserComponent from "./UserComponent";

const fetchUsers = async () => {
  const res = await fetch("http://localhost:3000/api/users");
  return res.json();
};

export default function UseExample() {
  console.log("HELLO");
  const userPromise = fetchUsers();

  return (
    <Suspense fallback="Loading...">
      <button onClick={() => console.log()}>Hello</button>
      <UserComponent userPromise={userPromise} />
    </Suspense>
  );
}
