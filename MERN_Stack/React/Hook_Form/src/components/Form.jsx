import React, { useState } from "react";

function Form() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [flag, setFlag] = useState(false);

  const handleSubmit = (event) => {
    event.preventDefault();
    setFlag(true);
    console.log("Form submitted:", { name, email });
  };

  return (
    <form className="flex flex-col" onSubmit={handleSubmit}>
      <label>
        Name:
        <input
          className="border-2 border-b-blue-950 ml-10 mb-2"
          type="text"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
      </label>
      <label>
        Email:
        <input
          className="border-2 border-b-blue-950 ml-10 mb-2"
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
      </label>
      <label>
        Password:
        <input
          className="border-2 border-b-blue-950 ml-10 mb-2"
          type="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
      </label>
      <button className="bg-amber-700" type="submit">
        Submit
      </button>

      {flag && (
        <div>
          {" "}
          {name}, {email} , {password}{" "}
        </div>
      )}
    </form>
  );
}

export default Form;
