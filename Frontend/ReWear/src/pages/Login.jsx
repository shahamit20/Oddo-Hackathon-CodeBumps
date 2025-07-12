// pages/Login.jsx
import { useState } from 'react';
import AuthInput from '../components/AuthInput';
import AuthButton from '../components/AuthButton';
import { Link } from 'react-router-dom';

const Login = () => {
  const [form, setForm] = useState({ email: '', password: '' });

  const handleChange = e =>
    setForm({ ...form, [e.target.name]: e.target.value });

  const handleSubmit = e => {
    e.preventDefault();
    alert(`Logging in as ${form.email}`);
    // TODO: Send login request to backend
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-white">
      <form onSubmit={handleSubmit} className="bg-white shadow-xl p-8 rounded-2xl w-full max-w-md">
        <h2 className="text-2xl font-bold mb-6 text-center text-green-700">Login to ReWear</h2>
        <AuthInput label="Email" type="email" name="email" value={form.email} onChange={handleChange} />
        <AuthInput label="Password" type="password" name="password" value={form.password} onChange={handleChange} />
        <AuthButton text="Login" />
        <p className="mt-4 text-center">
          Don't have an account? <Link to="/signup" className="text-green-600 font-semibold">Sign up</Link>
        </p>
      </form>
    </div>
  );
};

export default Login;
