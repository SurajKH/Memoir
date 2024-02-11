import React from 'react';

const Services = () => {
  const services = [
    {
      id: 1,
      title: 'Blog Writing',
      description: 'Create visually appealing and user-friendly websites tailored to your brand.',
    },
    {
      id: 2,
      title: 'Text Preview for the Blogs',
      description: 'Create visually appealing and user-friendly websites tailored to your brand.',
    },
    {
      id: 3,
      title: 'Code Arena',
      description: 'Design eye-catching graphics for your marketing materials and online presence.',
    },
    {
      id: 4,
      title: 'Gaming Section.',
      description: 'Optimize your online presence with effective digital marketing strategies.',
    }
  ];

  return (
    <div className="container mx-auto mt-8">
      <h1 className="text-4xl font-bold mb-8">Services Offered</h1>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 ">
        {services.map((service) => (
          <div key={service.id} className="p-6 rounded-md shadow-md bg-gray-100">
            <h2 className="text-3xl font-bold mb-4">{service.title}</h2>
            <p className="text-2xl text-gray-700 mb-4">{service.description}</p>
            {/* <button className="bg-blue-500 text-white py-2 px-4 rounded-md hover:bg-blue-700">
              Learn More
            </button> */}
          </div>
        ))}
      </div>
    </div>
  );
};

export default Services;
