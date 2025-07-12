// pages/Signup.jsx
import { useState } from 'react';
import AuthInput from '../components/AuthInput';
import AuthButton from '../components/AuthButton';
import { Link } from 'react-router-dom';

const Signup = () => {
  const [form, setForm] = useState({ name: '', email: '', password: '' });

  const handleChange = e =>
    setForm({ ...form, [e.target.name]: e.target.value });

const handleSubmit = async (e) => {
  e.preventDefault();

  try {
    const response = await fetch('http://localhost:5000/api/auth/register', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(form),
    });

    const data = await response.json();

    if (response.ok) {
      alert('Signup successful!');
      console.log(data);
      // Optionally redirect to login page
    } else {
      alert(data.message || 'Signup failed');
    }
  } catch (err) {
    console.error(err);
    alert('Something went wrong. Try again.');
  }
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
