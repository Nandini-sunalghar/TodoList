import React, { useState } from "react";

function Form() {
  const [input, setInput] = useState("");

  const handleSubmit = (e) => {
    console.log(e);
    e.preventDefault();
  };
  return (
    <div>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Enter Task Todo..."
          value={input}
        ></input>
        <button>Add</button>
      </form>
    </div>
  );
}

export default Form;
