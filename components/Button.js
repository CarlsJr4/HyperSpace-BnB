const Button = ({ children }) => {
  return (
    <button className="bg-gradient-to-r from-violet-500 to-fuchsia-500 text-white py-3 px-12 rounded-full my-10 hover:scale-110 transition-all">
      {children}
    </button>
  );
};

export default Button;
