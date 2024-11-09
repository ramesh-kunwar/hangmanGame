import React, { useState } from "react";
import TextInputForm from "./TextInputForm";

const TextInputFormContainer = () => {
  // let inputType = "text";
  const [inputType, setInputType] = useState("password");
  function handleFormSubmit(event) {
    event.preventDefault();
    console.log("Form submitted");
  }

  function handleTextInputChange(event) {
    console.log(event.target.value);
  }

  function handleShowHideClick() {
    console.log("Show/Hide button clicked");
    if (inputType === "password") {
      // inputType = "text";
      setInputType("text");
    } else {
      // inputType = "password";
      setInputType("password");
    }
  }
  return (
    <TextInputForm
      inputType={inputType}
      handleFormSubmit={handleFormSubmit}
      handleTextInputChange={handleTextInputChange}
      handleShowHideClick={handleShowHideClick}
    />
  );
};

export default TextInputFormContainer;
