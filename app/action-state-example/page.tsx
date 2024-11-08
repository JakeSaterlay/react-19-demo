"use client";

import { useActionState } from "react";

async function myAction(_previousState: string | null, formData: FormData) {
  const person = formData.get("person");
  if (person === "jake") {
    return "On the nice list!";
  } else {
    // Add a fake delay to make waiting noticeable.
    await new Promise((resolve) => {
      setTimeout(resolve, 2000);
    });
    return "Uh oh, naughty list!";
  }
}

export default function ActionStateExample() {
  return (
    <div className="w-1/2">
      <CartItem title="Jake" value={"jake"} />
      <CartItem title="Holly" value={"holly"} />
    </div>
  );
}

const CartItem = ({ title, value }: { title: string; value: string }) => {
  const [message, formAction, isPending] = useActionState(myAction, null);
  return (
    <form action={formAction}>
      <div className="m-4 p-4 flex flex-col border border-sky-500">
        <h2>{title}</h2>
        <input type="hidden" name="person" value={value} />
        <button className="bg-black w-32 text-white" type="submit">
          Check List Status
        </button>
        {isPending ? "Loading..." : message}
      </div>
    </form>
  );
};
