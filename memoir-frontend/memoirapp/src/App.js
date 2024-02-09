import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { AuthProvider } from '../src/components/auth/Auth';
import Navbar from '../src/components/navbar/Navbar';
// import ProtectedRoute from '../src/components/navbar/ProtectedRoute';
import SignIn from './components/auth/SignIn';
import Home from './components/home/Home';
import Dashboard from './components/home/Dashboard';
import Blogs from './components/navbar/Blogs';
import Contact from './components/contact/Contact';

const App = () => {

  return (
    <AuthProvider>
      <Router>
        <Navbar/>
        <Routes>
          <Route path="/" element={<Home/>} />
          <Route path="/signin" element={<SignIn/>} />
          <Route path="/dashboard" element={<Dashboard/>} />
          <Route path="/blogs" element={<Blogs/>} />
          <Route path="/contact" element={<Contact/>} />
        </Routes>
      </Router>
      {/* <SignIn/> */}
    </AuthProvider>
  );
};

export default App;
