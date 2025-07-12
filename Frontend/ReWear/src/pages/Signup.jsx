// pages/Signup.jsx
import { useState } from 'react';
import AuthInput from '../components/AuthInput';
import AuthButton from '../components/AuthButton';
import { Link } from 'react-router-dom';

const Signup = () => {
  const [form, setForm] = useState({ name: '', email: '', password: '' });

  const handleChange = e =>
    setForm({ ...form, [e.target.name]: e.target.value });

  const handleSubmit = e => {
    e.preventDefault();
    alert(`Signed up as ${form.name}`);
    // TODO: Send signup request to backend
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-white">
      <form onSubmit={handleSubmit} className="bg-white shadow-xl p-8 rounded-2xl w-full max-w-md">
        <h2 className="text-2xl font-bold mb-6 text-center text-green-700">Create your ReWear account</h2>
        <AuthInput label="Name" type="text" name="name" value={form.name} onChange={handleChange} />
        <AuthInput label="Email" type="email" name="email" value={form.email} onChange={handleChange} />
        <AuthInput label="Password" type="password" name="password" value={form.password} onChange={handleChange} />
        <AuthButton text="Sign Up" />
        <p className="mt-4 text-center">
          Already have an account? <Link to="/login" className="text-green-600 font-semibold">Login</Link>
        </p>
      </form>
    </div>
  );
};

export default Signup;
