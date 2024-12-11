// src/components/Navbar.js
import React from 'react';
import { Link } from 'react-router-dom';
import { useAuth } from '../context/AuthContext';

function Navbar() {
  const { currentUser, logout } = useAuth();

  return (
    <nav className="bg-blue-500 p-4">
      <div className="flex justify-between">
        <div className="text-white font-bold text-lg">Social Feed</div>
        <div>
          <Link to="/" className="text-white mx-4">Home</Link>
          <Link to="/profile" className="text-white mx-4">Profile</Link>
          {currentUser ? (
            <button onClick={logout} className="text-white mx-4">Logout</button>
          ) : (
            <Link to="/login" className="text-white mx-4">Login</Link>
          )}
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
