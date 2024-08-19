import Link from 'next/link'
import React from 'react'

const LoginPage = () => {
  return (
    <div className="flex justify-center items-center min-h-screen bg-gray-100">
    <form
      className="bg-white p-8 rounded-lg shadow-md w-full max-w-sm"
    >
      <h2 className="text-2xl font-bold mb-6 ">Login</h2>
      <div className="mb-4">
        <input
          type="text"
          id="emailOrUsername"
          name="emailOrUsername"
          className="w-full px-3 py-2 border border-gray-300 rounded-md"
          placeholder="Enter your username or email"
        />
      </div>
      <div className="mb-6">
        <input
          type="password"
          id="password"
          name="password"
          className="w-full px-3 py-2 border border-gray-300 rounded-md"
          placeholder="Enter your password"
        />
      </div>
      <button
        type="submit"
        className="w-full bg-blue-600 text-white py-2 px-4 rounded-md hover:bg-blue-700"
      >
        Login
      </button>
      <p className='text-center mt-10'>No account? <Link href='/register' className='underline underline-offset-4 font-bold text-blue-600'>Register here</Link></p>
    </form>
  </div>
  )
}

export default LoginPage