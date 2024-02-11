import React from 'react'
import Footer from '../common/Footer';
import Services from './Services';
const Home = () => {
  return (
    <>
    <div className="container mx-auto mt-8 mb-12 w-3/4 border border-x-black p-12 bg-black text-white">
      {/* Benefits of Reading and Writing Blogs Section */}
      <div className="flex justify-between items-center mb-8">
        {/* Left Part - Benefits of Reading and Writing Blogs */}
        <div className="w-1/2 pr-4">
          <h2 className="text-3xl font-bold mb-4">Benefits of Reading and Writing Blogs</h2>
          <ul className="list-disc list-inside">
            <li className='text-3xl'>Gain knowledge and insights</li>
            <li className='text-3xl'>Improve writing skills</li>
            <li className='text-3xl'>Build a personal brand</li>
            <li className='text-3xl'>Connect with a community</li>
            {/* Add more benefits as needed */}
          </ul>
        </div>
        
        {/* Right Part - Blog Image */}
        <div className="w-1/2">
          <img src="https://www.ryrob.com/wp-content/uploads/2021/11/iStock-496848472.jpg" width={"500px"} height={"500px"} alt="Blog" className="rounded-lg shadow-lg" />
        </div>
      </div>
     
      {/* <div className="text-center">
        <h2 className="text-3xl font-bold mb-4">Ready to Share Your Ideas?</h2>
        <p className="text-lg mb-6">Start writing your own blog and inspire others!</p>
        <button className="bg-blue-500 text-white px-4 py-2 rounded">Write a Blog</button>
      </div> */}
    </div>
    <Services/>
    <Footer/>
</>
    );
}

export default Home
