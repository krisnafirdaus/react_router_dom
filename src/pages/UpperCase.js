import React, { useState } from "react";

export default function UpperCase() {
  const [inputText, setInputText] = useState({
    textinput: "",
  });

  const itemChange = (e) => {
    setInputText({
      ...inputText,
      [e.target.name]: e.target.value.toUpperCase(),
    });
  };

  const itemClick = (e) => {
    e.preventDefault();
    alert(inputText.textinput);
  };

  return (
    <div>
      <h1>Text UpperCase</h1>
      <input type="text" name="textinput" onChange={itemChange} />
      <button onClick={itemClick}>submit</button>
    </div>
  );
}
