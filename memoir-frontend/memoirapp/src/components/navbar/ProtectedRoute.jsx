// // ProtectedRoute.jsx
// import React from 'react';
// import { Route, Navigate } from 'react-router-dom';
// import { useAuth } from '../auth/Auth';

// const ProtectedRoute = ({ component: Component, ...rest }) => {
//   const { currentUser } = useAuth();

//   return (
//     <Route
//       {...rest}
//       element={currentUser ? <Component /> : <Navigate to="/signin" />}
//     />
//   );
// };

// export default ProtectedRoute;

// ProtectedRoute.jsx
// ProtectedRoute.jsx
import React from 'react';
import { Route, useNavigate } from 'react-router-dom';
import { useAuth } from '../auth/Auth';

const ProtectedRoute = ({ component: Component, ...rest }) => {
  const { currentUser } = useAuth();
  const navigate = useNavigate();

  return (
    <Route
      {...rest}
      render={(props) =>
        currentUser ? (
          <Component {...props} />
        ) : (
          (() => {
            navigate('/signin');
            return null;
          })()
        )
      }
    />
  );
};

export default ProtectedRoute;

