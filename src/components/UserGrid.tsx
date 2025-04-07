
import React from 'react';
import UserCard from '../components/UserCard';

const users = [
  {
    name: "John Doe",
    email: "john.doe@example.com",
    status: "active",
    dob: "1990-05-15",
  },
  {
    name: "Jane Smith",
    email: "jane.smith@example.com",
    status: "active",
    dob: "1988-12-03",
  },
  {
    name: "Alice Johnson",
    email: "alice.johnson@example.com",
    status: "active",
    dob: "1992-06-23",
  },
  {
    name: "Bob",
    email: "bob.marlin@example.com",
    status: "locked",
    dob: "1980-04-03",
  },
  {
    name: "Charlie Brown",
    email: "charlie.brown@example.com",
    status: "active",
    dob: "1995-11-05",
  },
  {
    name: "David Lee",
    email: "david.lee@example.com",
    status: "active",
    dob: "1987-04-14",
  },
  {
    name: "Eve",
    email: "eve.green@example.com",
    status: "active",
    dob: "1993-09-21",
  },
  {
    name: "Frank White",
    email: "frank.white@example.com",
    status: "active",
    dob: "1986-03-25",
  },
  {
    name: "Grace Black",
    email: "grace.black@example.com",
    status: "active",
    dob: "1995-03-17",
  },
  {
    name: "Hannah",
    email: "hannah.purple@example.com",
    status: "active",
    dob: "1996-12-03",
  },
];
const Users: React.FC = () => {
  return (
    <div className="min-h-screen bg-gray-100">

      <div className="px-6 py-4">
        <input
          type="text"
          placeholder="Search users..."
          className="w-full sm:w-1/2 px-4 py-2 border bg-white border-gray-300 rounded-md shadow-sm text-sm"
        />
      </div>

      <div className="px-6 pb-6 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
        {users.map((user, index) => (
          <UserCard
            key={index}
            user={user}
            onEdit={() => console.log('Edit', user.name)}
            onDelete={() => console.log('Delete', user.name)}
          />
        ))}
      </div>
    </div>
  );
};

export default Users;

