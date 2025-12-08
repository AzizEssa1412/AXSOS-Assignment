import React, { useState } from "react";

function Form() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const [Nerror, setnError] = useState(false);
  const [Eerror, seteError] = useState(false);
  const [Perror, setpError] = useState(false);

  function handelName(e) {
    setName(e.target.value);

    if (name.length < 5) {
      setnError(true);
    } else {
      setnError(false);
    }
  }

  function handelEmail(e) {
    setEmail(e.target.value);

    if (name.length < 5) {
      seteError(true);
    } else {
      seteError(false);
    }
  }

  function handelPassword(e) {
    setPassword(e.target.value);

    if (name.length < 5) {
      setpError(true);
    } else {
      setpError(false);
    }
  }

  return (
    <form className="flex flex-col">
      <label>
        Name:
        <input
          className="border-2 border-b-blue-950 ml-10 mb-2"
          type="text"
          value={name}
          onChange={(e) => handelName(e)}
        />
        {Nerror && <h2> less than 5</h2>}
      </label>
      <label>
        Email:
        <input
          className="border-2 border-b-blue-950 ml-10 mb-2"
          type="email"
          value={email}
          onChange={(e) => handelEmail(e)}
        />
        {Eerror && <h2> less than 5</h2>}
      </label>
      <label>
        Password:
        <input
          className="border-2 border-b-blue-950 ml-10 mb-2"
          type="password"
          value={password}
          onChange={(e) => handelPassword(e)}
        />
        {Perror && <h2> less than 5</h2>}
      </label>
      <button className="bg-amber-700" type="submit">
        Submit
      </button>
    </form>
  );
}

export default Form;
