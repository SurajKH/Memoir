import React from 'react';

const SignInCard = () => {
  return (
    <div className="bg-white p-6 rounded-lg shadow-lg flex items-center justify-center h-screen border">
      
      <ul className="list-disc pl-6 border border-cyan-900 p-12 shadow-2xl">
      <h2 className="text-2xl font-bold mb-4 p-3">Sign-in Instructions</h2>
        <li className='text-2xl p-3'>Enter your email and password to sign in.</li>
        <li className='text-2xl p-3'>Make sure your password is strong and secure.</li>
        <li className='text-2xl p-3'>Click on "Sign In" to access your account.</li>
        <li className='text-2xl p-3'>Alternatively, use the Google Sign-in button.</li>
      </ul>
    </div>
  );
};

export default SignInCard;
