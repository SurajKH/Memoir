// // Navbar.jsx
// import React from 'react';
// import { Link, useNavigate } from 'react-router-dom';
// import { useAuth } from '../auth/Auth';

// const Navbar = () => {
//   const { currentUser, signOut } = useAuth();
//   const navigate = useNavigate();

//   return (
//     <nav className="bg-gray-800 p-4 text-white">
//       <div className="container mx-auto flex justify-between items-center">
//         <Link to="/" className="text-2xl font-bold text-white">
//          Memoir
//         </Link>
//         <div className="flex items-center">
//           {currentUser ? (
//             <>
//               <span className="hidden lg:inline-block mr-4">{currentUser.email}</span>
//               <button
//                 onClick={() => signOut() && navigate('/')}
//                 className="lg:ml-4 bg-red-500 text-white px-2 py-1 rounded"
//               >
//                 Sign Out
//               </button>
//             </>
//           ) : (
//             <button
//               onClick={() => navigate('/signin')}
//               className="lg:ml-4 bg-blue-500 text-white px-2 py-1 rounded"
//             >
//               Sign In
//             </button>
//           )}
//         </div>
//       </div>
//     </nav>
//   );
// };

// export default Navbar;
// Navbar.jsx
import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { useAuth } from '../auth/Auth';

const Navbar = () => {
  const { currentUser, signOut } = useAuth();
  const navigate = useNavigate();

  return (
    <nav className="bg-gray-800 p-4 text-white">
      <div className="container mx-auto flex justify-between items-center">
        <Link to="/" className="text-2xl font-bold text-white">
          Memoir
        </Link>
        <div className="flex items-center">
          {/* Navigation links for authenticated user */}
          {currentUser && (
            <>
              <Link to="/blogs" className="hidden lg:inline-block mr-4  text-2xl">
                Blogs
              </Link>
              {/* <Link to="/services" className="hidden lg:inline-block mr-4  text-2xl">
                Services
              </Link> */}
              <Link to="/contact" className="hidden lg:inline-block mr-4 text-2xl">
                Contact Us
              </Link>
              {/* <Link to="/games" className="hidden lg:inline-block mr-4  text-2xl">
                Games
              </Link> */}
            </>
          )}

          {/* Authentication buttons */}
          {currentUser ? (
            <>
              <span className="hidden lg:inline-block mr-4 text-xl">Hi {currentUser.email}</span>
              <button
                onClick={() => signOut() && navigate('/')}
                className="lg:ml-4 bg-red-500 text-white px-2 py-1 rounded"
              >
                Sign Out
              </button>
            </>
          ) : (
            <button
              onClick={() => navigate('/signin')}
              className="lg:ml-4 bg-blue-500 text-white px-2 py-1 rounded"
            >
              Sign In
            </button>
          )}
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
