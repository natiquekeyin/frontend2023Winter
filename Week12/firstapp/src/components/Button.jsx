const Button = ({ color, text, someFun }) => {
  return (
    <button
      className="btn"
      style={{ backgroundColor: color }}
      onClick={someFun}
    >
      {text}
    </button>
  );
};

export default Button;
