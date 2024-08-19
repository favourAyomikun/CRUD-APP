import React from 'react'

const RegisterPage = () => {
  return (
<div className="flex justify-center items-center min-h-screen bg-gray-100">
      <form
        className="bg-white p-8 rounded-lg shadow-md w-full max-w-sm"
      >
        <h2 className="text-2xl font-bold mb-6 ">Register</h2>
        <div className="mb-4">
          <input
            type="email"
            id="email"
            name="email"
            className="w-full px-3 py-2 border border-gray-300 rounded-md"
            placeholder="Enter your email"
          />
        </div>
        <div className="mb-4">
          <input
            type="text"
            id="username"
            name="username"
            className="w-full px-3 py-2 border border-gray-300 rounded-md"
            placeholder="Enter your username"
          />
        </div>
        <div className="mb-4">
          <input
            type="password"
            id="password"
            name="password"
            className="w-full px-3 py-2 border border-gray-300 rounded-md"
            placeholder="Enter your password"
          />
        </div>
        <div className="mb-6">
          <input
            type="password"
            id="confirmPassword"
            name="confirmPassword"
            className="w-full px-3 py-2 border border-gray-300 rounded-md"
            placeholder="Confirm your password"
          />
        </div>
        <button
          type="submit"
          className="w-full bg-green-600 text-white py-2 px-4 rounded-md hover:bg-green-700 transition-colors"
        >
          Register
        </button>
      </form>
    </div>
    )
}

export default RegisterPage