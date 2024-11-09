const Button = ({ type, onClickHandler, text }) => {
  return (
    <button
      type={type}
      className="px-4 py-2 bg-blue-500 text-white rounded-md"
      onClick={onClickHandler}
    >
      {text}
    </button>
  );
};
export default Button;
