// import React, { useState } from 'react';
// import { ToastContainer, toast } from 'react-toastify';
// import 'react-toastify/dist/ReactToastify.css';
// import Footer from '../common/Footer';

// const ContactUsPage = () => {
//   const [formData, setFormData] = useState({
//     name: '',
//     email: '',
//     phone: '',
//   });

//   const handleChange = (e) => {
//     const { name, value } = e.target;
//     setFormData((prevData) => ({
//       ...prevData,
//       [name]: value,
//     }));
//   };

//   const handleSubmit = async(e) => {
//     e.preventDefault();

//     // Perform any necessary validation or API call here
//     try
//     {
//      const response=await fetch('http://localhost:3001/send-sms',{
//       method:'POST',
//       headers:{
//         'Content-Type': 'application/json',
//       },
//       body: JSON.stringify(formData),
//      });
//      if (response.ok) {
//       console.log('SMS sent successfully');
//       toast.success('SMS sent successfully');
//     } else {
//       console.error('Error sending SMS:', response.statusText);
//       toast.error('Error sending SMS');
//     }
//     }
//     catch(e)
//     {
//       console.log("Caught Error: ",e);
//     }
//     // For demonstration purposes, show a toast message
    
//   };

//   return (
//     <>
//     <div className="w-3/4 border p-8 rounded-md bg-gray-700 mx-auto mt-5">
//       <p className='text-3xl text-white'>Feel Free to Reach Out to Us.</p>
//     </div>
    // <div className="flex justify-center items-center h-screen text-white">
    //   <div className="w-3/4 border p-8 rounded-md bg-gray-700">
    //     <h2 className="text-4xl font-bold mb-8">Contact Us</h2>
    //     <form onSubmit={handleSubmit}>
    //       <div className="mb-4">
    //         <label htmlFor="name" className="text-2xl block">Name:</label>
    //         <input
    //           type="text"
    //           id="name"
    //           name="name"
    //           value={formData.name}
    //           onChange={handleChange}
    //           className="w-full px-4 py-2 border rounded-md focus:outline-none focus:border-blue-500"
    //           required
    //         />
    //       </div>
    //       <div className="mb-4">
    //         <label htmlFor="email" className="text-2xl block">Email:</label>
    //         <input
    //           type="email"
    //           id="email"
    //           name="email"
    //           value={formData.email}
    //           onChange={handleChange}
    //           className="w-full px-4 py-2 border rounded-md focus:outline-none focus:border-blue-500"
    //           required
    //         />
    //       </div>
    //       <div className="mb-4">
    //         <label htmlFor="phone" className="text-2xl block">Message:</label>
    //         <textarea
    //           id="phone"
    //           name="phone"
    //           value={formData.phone}
    //           onChange={handleChange}
    //           className="w-full px-4 py-2 border rounded-md focus:outline-none focus:border-blue-500 text-black"
    //           required
    //         ></textarea>
    //       </div>
    //       <button
    //         type="submit"
    //         className="bg-blue-500 text-white py-2 px-4 rounded-md hover:bg-blue-700 text-2xl"
    //       >
    //         Submit
    //       </button>
    //     </form>
    //   </div>
//       <ToastContainer position="top-right" autoClose={3000} />
//     </div>
//     <Footer/>
//     </>
//   );
// };

// export default ContactUsPage;

import React, { useState } from 'react';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Footer from '../common/Footer';

const ContactUsPage = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    message: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    // Perform any necessary validation or API call here
    try {
      const response = await fetch('http://localhost:3001/send-sms', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });
      if (response.ok) {
        console.log('SMS sent successfully');
        toast.success('Your message has been sent successfully!');
      } else {
        console.error('Error sending SMS:', response.statusText);
        toast.error('Error sending your message. Please try again later.');
      }
    } catch (e) {
      console.log('Caught Error: ', e);
      toast.error('Error sending your message. Please try again later.');
    }
  };

  return (
    <>
      <div className="bg-gray-800 text-white py-8 text-center mt-12 w-3/4 mx-auto p-12">
        <h1 className="text-4xl font-bold p-5">Contact Us</h1>
        <p className="mt-4">Have questions? We're here to help!</p>
      </div>
      <div className="flex justify-center items-center h-screen text-white">
      <div className="w-3/4 border p-8 rounded-md bg-gray-700">
        <h2 className="text-4xl font-bold mb-8 p-5">Contact Us</h2>
        <form onSubmit={handleSubmit}>
          <div className="mb-4">
            <label htmlFor="name" className="text-2xl block p-6">Name:</label>
            <input
              type="text"
              id="name"
              name="name"
              value={formData.name}
              onChange={handleChange}
              className="w-full px-4 py-4 border rounded-md focus:outline-none focus:border-blue-500"
              required
            />
          </div>
          <div className="mb-4">
            <label htmlFor="email" className="text-2xl block p-6">Email:</label>
            <input
              type="email"
              id="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              className="w-full px-4 py-4 border rounded-md focus:outline-none focus:border-blue-500"
              required
            />
          </div>
          <div className="mb-4">
            <label htmlFor="phone" className="text-2xl block p-6">Phone :</label>
            <textarea
              id="phone"
              name="phone"
              value={formData.phone}
              onChange={handleChange}
              className="w-full px-4 py-2 border rounded-md focus:outline-none focus:border-blue-500 text-black"
              required
            ></textarea>
          </div>
          <button
            type="submit"
            className="bg-blue-500 text-white py-2 px-4 rounded-md hover:bg-blue-700 text-2xl"
          >
            Submit
          </button>
        </form>
      </div>
    <ToastContainer position="top-right" autoClose={3000} />
      </div>
      {/* <div className="flex justify-center items-center h-screen">
        <div className="w-3/4 border p-8 rounded-md bg-gray-700">
        <form onSubmit={handleSubmit}>
           <div className="mb-4">
             <label htmlFor="name" className="text-2xl block">Name:</label>
            <input
              type="text"
              id="name"
              name="name"
              value={formData.name}
              onChange={handleChange}
              className="w-full px-4 py-2 border rounded-md focus:outline-none focus:border-blue-500"
              required
            />
          </div>
          <div className="mb-4">
            <label htmlFor="email" className="text-2xl block">Email:</label>
            <input
              type="email"
              id="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              className="w-full px-4 py-2 border rounded-md focus:outline-none focus:border-blue-500"
              required
            />
          </div>
          <div className="mb-4">
            <label htmlFor="phone" className="text-2xl block">Message:</label>
            <textarea
              id="phone"
              name="phone"
              value={formData.phone}
              onChange={handleChange}
              className="w-full px-4 py-2 border rounded-md focus:outline-none focus:border-blue-500 text-black"
              required
            ></textarea>
          </div>
          <button
            type="submit"
            className="bg-blue-500 text-white py-2 px-4 rounded-md hover:bg-blue-700 text-2xl"
          >
            Submit
          </button>
        </form>
        </div>
        <ToastContainer position="top-right" autoClose={3000} />
      </div> */}
      {/* Additional Content */}
      <div className="mt-8 w-3/4 mx-auto">
        <h2 className="text-3xl font-bold text-center mb-4 ">Contact Details</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {/* Contact Information */}
          <div className=" p-6 rounded-md shadow-md bg-gray-800">
            <h5 className="font-bold mb-4 text-white text-2xl p-6">Contact Information</h5>
            <p className=" mb-4  text-white">
              Address: Bangalore , India
              <br />
              <br />
              Email: testemail@gmail.com
            </p>
          </div>
          <div className="p-6 rounded-md shadow-md bg-gray-800">
            <h5 className="font-bold mb-4 text-white text-2xl p-6">Our Location</h5>
            {/* Add your map component or embed Google Maps */}
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3888.877431676467!2d77.59456221485658!3d12.971598590878884!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bae1670d6dbd11d%3A0x70bc5511ecb56649!2sBangalore%2C%20Karnataka!5e0!3m2!1sen!2sin!4v1647147625572!5m2!1sen!2sin"
              width="100%"
              height="200"
              frameBorder="0"
              style={{ border: 0 }}
              allowFullScreen=""
              aria-hidden="false"
              tabIndex="0" />
          </div>  
          <div className=" p-6 rounded-md shadow-md bg-gray-800">
            <h5 className="text-xl font-bold mb-4 text-white">Contact On Web</h5>
            <a className="mb-4  text-white text-2xl p-6" href="https://github.com/SurajKH" alt="remote">Github</a>
              <br />
              <a className="mb-4  text-white text-2xl p-6" href="https://linkedin.com" alt="remote">LinkedIn</a>
              <br />
          </div>       
        </div>
      </div>
      <Footer />
    </>
  );
};

export default ContactUsPage;
