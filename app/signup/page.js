"use client";
import Link from 'next/link';
import { useState } from 'react';

export default function SignUp() {
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [mobile, setMobile] = useState('');
  const [message, setMessage] = useState('');  
 
  const handleSubmit = async (e) => {
    e.preventDefault();  

    if (password !== confirmPassword) {
      setMessage("Passwords do not match!");
      return;
    }

    const response = await fetch(`${process.env.NEXT_PUBLIC_BACKEND_URL}/api/register`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ firstName, lastName, email, password, mobile }),
    });

    const data = await response.json();

    if (response.ok) {
      setMessage("Registration successful!");  

      
      localStorage.setItem('token', data.token); 
      window.location.href = '/dashboard'; 
    } else {
      setMessage(data.error || "Registration failed!");  
    }
  };

  return (
    <div className="bg-gray-100 grid place-items-center min-h-screen p-4">
      <div className="bg-white rounded-2xl shadow-2xl w-full max-w-md p-8">
        <h2 className="text-3xl font-bold text-purple-600 mb-4 text-center">Create an Account</h2>
        <form className="flex flex-col" onSubmit={handleSubmit}>  
          <input
            type="text"
            placeholder="First Name"
            className="bg-gray-100 p-2 mb-3 outline-none"
            value={firstName}
            onChange={(e) => setFirstName(e.target.value)}  
          />
          <input
            type="text"
            placeholder="Last Name"
            className="bg-gray-100 p-2 mb-3 outline-none"
            value={lastName}
            onChange={(e) => setLastName(e.target.value)}  
          />
          <input
            type="email"
            placeholder="Email ID"
            className="bg-gray-100 p-2 mb-3 outline-none"
            value={email}
            onChange={(e) => setEmail(e.target.value)}  
          />
          <input
            type="password"
            placeholder="Password"
            className="bg-gray-100 p-2 mb-3 outline-none"
            value={password}
            onChange={(e) => setPassword(e.target.value)}  
          />
          <input
            type="password"
            placeholder="Re-enter Password"
            className="bg-gray-100 p-2 mb-3 outline-none"
            value={confirmPassword}
            onChange={(e) => setConfirmPassword(e.target.value)}  
          />
          <input
            type="tel"
            placeholder="Mobile Number"
            className="bg-gray-100 p-2 mb-3 outline-none"
            value={mobile}
            onChange={(e) => setMobile(e.target.value)}  
          />

          <button type="submit" className="bg-purple-600 text-white rounded-full py-2 mt-4 hover:bg-purple-700">
            Sign Up
          </button>
        </form>

        {message && (  
          <p className="mt-4 text-center text-gray-400">{message}</p>
        )}

        <p className="mt-4 text-center text-gray-400">
          Already have an account?{' '}
          <Link href="/">
            <button className="text-purple-600">Sign In</button>
          </Link>
        </p>
      </div>
    </div>
  );
}
