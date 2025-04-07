
import React from 'react';

const NavBar: React.FC = () => {
  return (
    <nav className="bg-primary text-white flex justify-between items-center p-4">
      <h1 className="text-lg font-semibold">User Management</h1>
      <div className="flex gap-2">
        <button className="bg-white text-primary px-3 py-1 rounded">Create User</button>
        <button className="bg-red-500 text-white px-3 py-1 rounded">Logout</button>
      </div>
    </nav>
  );
};



export default NavBar;