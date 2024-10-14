"use client";
import Link from 'next/link';
import { useState } from 'react';
import { FaFacebookF, FaLinkedinIn, FaGoogle, FaRegEnvelope } from 'react-icons/fa';
import { MdLockOutline } from 'react-icons/md';

export default function Home() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleLogin = async (event) => {
    event.preventDefault(); 

    const response = await fetch(process.env.NEXT_PUBLIC_BACKEND_URL + '/api/login', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ email, password }),
    });

    const data = await response.json();

    if (response.ok) {
      localStorage.setItem('token', data.token);
      window.location.href = '/dashboard'; 
    } else {
      alert(data.message);
    }
  };

  return (
    <div className="bg-gray-100 grid place-items-center min-h-screen p-4">
      <div className="bg-white rounded-2xl shadow-2xl flex flex-col md:flex-row w-full max-w-4xl">
        {/* Left Section - Sign In */}
        <div className="text-center md:w-3/5 p-6 md:p-12">
          <div className="text-left font-bold text-2xl">
            <span className="text-purple-600">Destion</span> Innovations
          </div>
          <div className="py-8">
            <h2 className="text-3xl font-bold text-purple-600 mb-2">Sign in to Your Account</h2>
            <div className="border-2 w-10 border-purple-600 inline-block mb-4 rounded-lg"></div>

            <div className="flex justify-center my-4">
              <a href="#" className='border-2 border-gray-200 rounded-full p-3 mx-1'>
                <FaFacebookF className='text-sm'/>
              </a>
              <a href="#" className='border-2 border-gray-200 rounded-full p-3 mx-1'>
                <FaLinkedinIn className='text-sm'/>
              </a>
              <a href="#" className='border-2 border-gray-200 rounded-full p-3 mx-1'>
                <FaGoogle className='text-sm'/>
              </a>
            </div>

            <p className="text-gray-400 mb-4">or login through your email</p>

            <form className="flex flex-col items-center" onSubmit={handleLogin}>
              <div className="bg-gray-100 p-2 w-full max-w-xs flex items-center mb-3">
                <FaRegEnvelope className="text-gray-400 m-2" />
                <input
                  type="email"
                  name="email"
                  placeholder="Enter your email"
                  className="bg-gray-100 outline-none text-sm flex-1"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)} 
                />
              </div>

              <div className="bg-gray-100 p-2 w-full max-w-xs flex items-center mb-3">
                <MdLockOutline className="text-gray-400 m-2" />
                <input
                  type="password"
                  name="password"
                  placeholder="Enter your password"
                  className="bg-gray-100 outline-none text-sm flex-1"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)} 
                />
              </div>

              <div className="flex justify-between w-full max-w-xs mb-5">
                <label className="flex items-center text-sm text-gray-400">
                  <input type="checkbox" name="Remember" className="mr-1" />
                  Remember me
                </label>
                <a href="#" className="text-sm text-gray-400">Forgot Password?</a>
              </div>

              <button
                type="submit" 
                className="text-purple-600 border-2 border-purple-600 rounded-full px-12 py-2 inline-block font-semibold hover:bg-purple-600 hover:text-white">
                Log in
              </button>
            </form>
          </div>
        </div>

        {/* Right Section - Message */}
        <div className="w-full md:w-2/5 bg-purple-600 text-white text-center rounded-b-2xl md:rounded-tr-2xl md:rounded-br-2xl py-12 md:py-36 px-8">
          <h2 className="text-3xl font-bold mb-2">Hi, there!</h2>
          <div className="border-2 w-10 border-white inline-block mb-4 rounded-lg"></div>
          <p className="mb-8 text-white">Not signed up yet? Sign up now and continue your journey!</p>
          
          <Link href="/signup">
            <button className="border-2 border-white rounded-full px-12 py-2 inline-block font-semibold hover:bg-white hover:text-purple-600">
              Sign Up
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
}
