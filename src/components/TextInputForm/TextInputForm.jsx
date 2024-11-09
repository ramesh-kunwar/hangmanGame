import TextInput from "../TextInput/TextInput";
import Button from "../Button/Button";

const TextInputForm = ({
  handleFormSubmit,
  handleTextInputChange,
  handleShowHideClick,
  inputType,
}) => {
  console.log(inputType, "============= text input form");
  return (
    <form onSubmit={handleFormSubmit}>
      <div>
        <TextInput
          label="Name"
          placeholder="Enter your name"
          onChangeHandler={handleTextInputChange}
          value=""
          inputType={inputType}
        />
      </div>
      <div>
        <Button
          type="submit"
          onClickHandler={handleShowHideClick}
          text={inputType === "password" ? "Show" : "Hide"}
        />
      </div>
      <div>
        <Button type="submit" text="Submit" onClickHandler={handleFormSubmit} />
        {/* <Button type="submit">Submit</Button> */}
      </div>
    </form>
  );
};

export default TextInputForm;
