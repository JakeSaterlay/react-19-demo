"use client";

import { use, useEffect, useState } from "react";

export default function UserComponent({ userPromise }: any) {
  const [shouldRender, setShouldRender] = useState(false);
  const users: any = shouldRender ? use(userPromise) : null;

  //   if (shouldRender) {
  //     useEffect(() => console.log("HELLO"));
  //   }

  return (
    <div>
      Hello from the client{" "}
      <div>{users ? users.map((user: any) => user.name) : "No users"}</div>
      <button onClick={() => setShouldRender((prevState) => !prevState)}>
        Toggle Render
      </button>
    </div>
  );
}
