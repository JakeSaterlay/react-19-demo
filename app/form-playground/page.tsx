const myAction = async (data: FormData) => {
  "use server";
  const selectedOptions = data.getAll("options");
  console.log("Selected options:", selectedOptions);
};

export default function DynamicCheckboxForm() {
  // Example list of options
  const options = [
    { id: 1, label: "Option 1" },
    { id: 2, label: "Option 2" },
    { id: 3, label: "Option 3" },
  ];

  return (
    <form action={myAction}>
      <h3>Select Options:</h3>
      {options.map((option) => (
        <div key={option.id}>
          <label>
            <input
              type="checkbox"
              name="options" // Ensure all checkboxes have the same name
              value={option.label}
            />
            {option.label}
          </label>
        </div>
      ))}
      <button type="submit">Submit</button>
    </form>
  );
}
