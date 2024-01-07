const Button = ({ style, icon, text }) => {
  return (
    <button
      className={` px-7 py-2 max-sm:px-2 max-md:px-5 rounded-md font-extrabold ${style}`}
    >
      {icon}
      {text}
    </button>
  );
};

export default Button;
