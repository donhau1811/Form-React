import React, { useState } from "react";

const App = () => {
  const [inputs, setInputs] = useState({
    username: "",
    email: "",
    isChecked: false,
  });
  const [error, setError] = useState("missing");

  const validateForm = () => {
    setError("missing");
    Object.keys(inputs).forEach((name) => {
      if (!inputs[name]) {
        setError((error) => error + " " + name);
      }
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // console.log("submitted form", inputs);
    validateForm();
  };
  const handleChange = (event) => {
    const name = event.target.name;
    const value =
      event.target.type === "checkbox"
        ? event.target.checked
        : event.target.value;
    setInputs((inputs) => ({ ...inputs, [name]: value }));
  };

  return (
    <div className="App">
      <form onSubmit={handleSubmit}>
        <div>
          <label htmlFor="username">Username</label>
          <input
            type="text"
            name="username"
            autoComplete="off"
            id="username"
            value={inputs.username} //state
            onChange={handleChange}
          />
        </div>
        <div></div>
        <div>
          <label htmlFor="email">Email address</label>
          <input
            type="email"
            name="email"
            id="email"
            autoComplete="off"
            value={inputs.email}
            onChange={handleChange}
          />
        </div>
        <div>
          <label>Are you a bot? </label>

          <input
            type="checkbox"
            name="isChecked"
            id="isChecked"
            checked={inputs.isChecked}
            onChange={handleChange}
          />
        </div>
        <button type="submit">submit</button>
        <p>{error}</p>
      </form>
    </div>
  );
};

export default App;


