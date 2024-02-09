import React from 'react';

const Footer = () => {
  return (
    <footer className="mt-20 bg-black text-white border-t border-gray-200 shadow md:flex md:justify-between md:p-6 dark:bg-gray-800 dark:border-gray-600 w-full" style={{marginTop:"25px"}}>
      <div className="container mx-auto flex flex-col items-center md:flex-row md:justify-between py-4">
        <span className="block text-sm mb-3 md:mb-0 md:mr-8">© 2023 <a href="https://flowbite.com/" className="hover:underline text-lg md:text-xl p-3">Memoir™</a>. All Rights Reserved.</span>
        <ul className="flex justify-center md:justify-start mt-3 text-base font-medium">
          <li>
            <a href="https://github.com/SurajKH" className="hover:underline text-lg md:text-xl p-3">Github</a>
          </li>
        </ul>
      </div>
    </footer>
  );
};

export default Footer;
