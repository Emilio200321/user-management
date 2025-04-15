import React, { useState } from 'react';
import UserCard from '../components/UserCard';

interface User {
  id: number;
  firstName: string;
  lastName: string;
  email: string;
  status: string;
  dateOfBirth: Date;
}

interface UsersProps {
  users: User[];
}

const Users: React.FC<UsersProps> = ({ users }) => {
  const [searchQuery, setSearchQuery] = useState('');

  const filteredUsers = users.filter((user) => {
    const searchTerm = searchQuery.toLowerCase();
    return (
      user.firstName.toLowerCase().includes(searchTerm) ||
      user.lastName.toLowerCase().includes(searchTerm) ||
      user.email.toLowerCase().includes(searchTerm)
    );
  });

  return (
    <div className="min-h-screen bg-white dark:bg-gray-900">
      <div className="px-6 py-4">
        <input
          type="text"
          placeholder="Search users..."
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
          className="w-full sm:w-1/2 px-4 py-2 border bg-white dark:bg-gray-700 dark:text-white border-gray-300 dark:border-gray-600 rounded-md shadow-sm text-sm"
        />
      </div>

      <div className="px-6 pb-6 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
        {filteredUsers.length > 0 ? (
          filteredUsers.map((user) => (
            <UserCard
              key={user.id}
              user={user}
              onEdit={() => console.log('Edit', user.firstName)}
              onDelete={() => console.log('Delete', user.firstName)}
            />
          ))
        ) : (
          <div className="col-span-3 text-center text-gray-600">No users found</div>
        )}
      </div>
    </div>
  );
};

export default Users;
