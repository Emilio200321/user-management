import React from 'react';
import { useNavigate } from 'react-router-dom';
import ThemeToggle from './ThemeToggle';
import { useAuthStore } from '../store/authStore';

const NavBar: React.FC = () => {
  const navigate = useNavigate();
  const logout = useAuthStore((state) => state.logout);

  const handleLogout = () => {
    logout();
    navigate('/login'); // Redirect to login page after logout
  };

  return (
    <nav className="bg-primary text-white flex justify-between items-center p-4">
      <h1 className="text-lg font-semibold">User Management</h1>
      <div className="flex gap-2">
        <button className="bg-white text-primary px-3 py-1 rounded">Create User</button>
        <button 
          onClick={handleLogout} 
          className="bg-red-500 text-white px-3 py-1 rounded"
        >
          Logout
        </button>
        <ThemeToggle />
      </div>
    </nav>
  );
};

export default NavBar;
