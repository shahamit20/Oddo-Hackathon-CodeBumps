// components/AuthButton.jsx
const AuthButton = ({ text }) => (
  <button
    type="submit"
    className="w-full bg-green-600 hover:bg-green-700 text-white font-bold py-2 rounded-xl transition duration-200"
  >
    {text}
  </button>
);

export default AuthButton;
