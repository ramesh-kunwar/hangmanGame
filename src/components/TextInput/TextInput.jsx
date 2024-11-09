const TextInput = ({
  inputType,
  label,
  placeholder = "Enter Your Input Here",
  value,
  onChangeHandler,
}) => {
  console.log("input type-------------------- " + inputType);
  return (
    <label>
      <span className="text-gray-700">{label}</span>
      <input
        type={inputType}
        placeholder={placeholder}
        className="px-4 py-2 border-gray-500 rounded-md w-full"
        onChange={onChangeHandler}
      />
    </label>
  );
};

export default TextInput;
