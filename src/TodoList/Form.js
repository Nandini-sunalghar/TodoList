import React, { useState } from "react";

function Form(props) {
  const [input, setInput] = useState("");

  const handleChange = (e) =>{
    setInput(e.target.value);
  }

  const handleSubmit = (e) => {
    console.log(e);

    props.onSubmit({
      id: Math.floor(Math.random()* 10000),
      text: input,
    });
    e.preventDefault();
    setInput('');
  };
  
  return (
    <div>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Enter Task Todo..."
          value={input}
          onChange={handleChange}
        ></input>
        <button onClick={props.AddTodo}>Add</button>
      </form>
      <div>
        <ul>
        </ul>
      </div>
    </div>
  );
}

export default Form;
