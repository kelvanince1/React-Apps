import React, { useState, useRef, useEffect } from "react";
import { useForm } from "./useForm";
import { useFetch } from "./useFetch";

import { Hello } from "./Hello";

const App = () => {
  const [values, handleChange] = useForm({
    email: '',
    password: '',
    firstName: ''
  });

  const inputRef = useRef();

  const [showHello, setShowHello] = useState(true);

  return (
    <div>
      <div>
        <button
          onClick={() => setShowHello(!showHello)}
        >
          Toggle
        </button>
        {showHello && <Hello />}
        <input
            ref={inputRef}
            name="email"
            value={values.email}
            onChange={handleChange}
          />
          <input
            name="firstName"
            placeholder="first name"
            value={values.firstName}
            onChange={handleChange}
          />
          <input
            type="password"
            name="password"
            value={values.password}
            onChange={handleChange}
          />
          <button onClick={() => {
            inputRef.current.focus();
          }}>Focus</button>
        </div>
    </div>
  );
}

export default App;