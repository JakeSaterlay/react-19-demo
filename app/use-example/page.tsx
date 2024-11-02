import { Suspense } from "react";
import UserComponent from "./UserComponent";

const fetchUsers = async () => {
  const res = await fetch("http://localhost:3000/api/users");
  return res.json();
};

export default function UseExample() {
  const userPromise = fetchUsers();
  return (
    <Suspense>
      <UserComponent userPromise={userPromise} />
    </Suspense>
  );
}
