import React from 'react';
import { useAuth } from './Auth'; // Assuming you have an auth context hook

const SignInForm = () => {
  const { signInWithGoogle, signInWithEmailAndPassword } = useAuth();

  const handleEmailSignIn = (e) => {
    e.preventDefault();
    const email = e.target.email.value;
    const password = e.target.password.value;
    signInWithEmailAndPassword(email, password);
  };

  return (
    <>
    <div className="flex items-center justify-center h-screen">
  <div className="bg-black p-6 rounded-lg shadow-lg border border-white" style={{"width":"650px",height:"500px"}}>
    <h2 className="text-2xl font-bold mb-4 text-white p-5">Sign In</h2>
    {/* Email and Password Sign-in Form */}
    <form onSubmit={handleEmailSignIn}>
      <div className="mb-4">
        <label htmlFor="email" className="block text-2xl font-medium text-white p-3">
          Email
        </label>
        <input
          type="email"
          name="email"
          id="email"
          className="mt-1 p-2 w-full bg-black text-white border border-white rounded"
          placeholder="Enter your email"
          required
        />
      </div>
      <div className="mb-4">
        <label htmlFor="password" className="block text-2xl font-medium text-white p-3">
          Password
        </label>
        <input
          type="password"
          name="password"
          id="password"
          className="mt-1 p-2 w-full bg-black text-white border border-white rounded"
          placeholder="Enter your password"
          required
        />
      </div>
      <button
        type="submit"
        className="bg-blue-500 text-white px-4 py-2 rounded"
      >
        Sign In
      </button>
    </form>

    {/* Google Sign-in Button */}
    <button
      onClick={signInWithGoogle}
      className="mt-4 bg-red-500 text-white px-4 py-2 rounded"
    >
      Sign In with Google
    </button>
  </div>
</div>
</>
  );
};

export default SignInForm;
