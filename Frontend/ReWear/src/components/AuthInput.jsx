// components/AuthInput.jsx
const AuthInput = ({ label, type, name, value, onChange }) => (
  <div className="mb-4">
    <label className="block mb-1 font-semibold">{label}</label>
    <input
      type={type}
      name={name}
      value={value}
      onChange={onChange}
      className="w-full px-4 py-2 border rounded-xl focus:outline-none focus:ring-2 focus:ring-green-500"
      required
    />
  </div>
);

export default AuthInput;
