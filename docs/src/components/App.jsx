import React, { useState } from "react";
import { useForm, ValidationError } from '@formspree/react';

function App() {
  const [isMousedOver, setMouseOver] = useState(false);
  const [state, handleSubmit] = useForm("xlezkwzd");
  if (state.succeeded) {
    return <p className="Close-tap">Welcome! We'll be adding you to this repo soon. You can close this tap now.</p>;
  }
  
  function handleMouseOver() {
    setMouseOver(!isMousedOver);
  }

  return (
    <div className="container">
      <h1>Please submit your GitHub user! </h1>
      <form onSubmit={handleSubmit}>
      <label htmlFor="GHAccount" />
        <input
          type="text"
          placeholder="@username"
          id="GHAccount"
          name="GHAccount"
        />
        <ValidationError 
        prefix="Message" 
        field="message"
        errors={state.errors}
      />
        <button
          style={{ backgroundColor: isMousedOver ? "#6cc644" : "white" }}
          type="submit"
          onMouseOver={handleMouseOver}
          onMouseOut={handleMouseOver}
          disabled={state.submitting}
        >
          Submit
        </button>
      </form>
    </div>
  );
}

export default App;
