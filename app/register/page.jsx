import React from 'react'
import Link from 'next/link'

const RegisterPage = () => {
  return (
<div className="flex justify-center items-center min-h-screen bg-background">
      <form
        className="p-8 rounded-lg w-full max-w-sm"
      >
        <h2 className="text-2xl font-bold mb-6 text-white">Register</h2>
        <div className="mb-4">
          <input
            type="email"
            id="email"
            name="email"
            className="w-full px-3 h-[51px] bg-[#FFFFFF0F] rounded-[9px] text-white outline-none"
            placeholder="Enter Email"
          />
        </div>
        <div className="mb-4">
          <input
            type="text"
            id="username"
            name="username"
            className="w-full px-3 h-[51px] bg-[#FFFFFF0F] rounded-[9px] text-white outline-none"
            placeholder="Create Username"
          />
        </div>
        <div className="mb-4">
          <input
            type="password"
            id="password"
            name="password"
            className="w-full px-3 h-[51px] bg-[#FFFFFF0F] rounded-[9px] text-white outline-none"
            placeholder="Create Password"
          />
        </div>
        <div className="mb-6">
          <input
            type="password"
            id="confirmPassword"
            name="confirmPassword"
            className="w-full px-3 h-[51px] bg-[#FFFFFF0F] rounded-[9px] text-white outline-none"
            placeholder="Confirm Password"
          />
        </div>
        <button
          type="submit"
          className="w-full bg-button-background text-white py-2 px-4 rounded-md"
          >
          Register
        </button>
        <p className='text-center mt-10 text-white'>Have an account? <Link href='/' className='underline underline-offset-4 font-bold text-blue-400 ml-[2px] text-[#Golden]'>Login here</Link></p>
      </form>
    </div>
    )
}

export default RegisterPage