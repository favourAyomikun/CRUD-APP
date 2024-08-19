import Link from 'next/link'
import React from 'react'

const LoginPage = () => {
  return (
    <div className="flex justify-center items-center min-h-screen bg-background">
    <form
      className="p-8 rounded-lg w-full max-w-sm"
    >
      <h2 className="text-2xl font-bold mb-6 text-white">Login</h2>
      <div className="mb-4">
        <input
          type="text"
          id="emailOrUsername"
          name="emailOrUsername"
          className="w-full px-3 h-[51px] bg-[#FFFFFF0F] rounded-[9px] text-white outline-none"
          placeholder="Enter your Username/Email"
        />
      </div>
      <div className="mb-6">
        <input
          type="password"
          id="password"
          name="password"
          className="w-full px-3 h-[51px] bg-[#FFFFFF0F] rounded-[9px] text-white outline-none"
          placeholder="Enter Password"
        />
      </div>
      <button
        type="submit"
        className="w-full bg-button-background text-white py-2 px-4 rounded-md"
      >
        Login
      </button>
      <p className='text-center mt-10 text-white'>No account? <Link href='/register' className='underline underline-offset-4 font-bold text-blue-400 ml-[2px] text-[#Golden]'>Register here</Link></p>
    </form>
  </div>
  )
}

export default LoginPage