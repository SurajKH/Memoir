import React from 'react';
import SignInCard from './SignInCard';
import SignInForm from './SignInForm';
import Footer from '../common/Footer';

const SignIn = () => {
  return (
    <>
    <div className="flex flex-col lg:flex-row shadow-2xl border border-cyan-900 p-12 ">
     <div className="lg:w-1/2 p-4">
        <SignInForm />
      </div>
      <div className="lg:w-1/2 p-4">
        <SignInCard />
      </div>  
    </div>
    <Footer/>   
   </>
  );
};

export default SignIn;
