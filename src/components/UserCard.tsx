import React from "react";

interface User {
  id: number;
  firstName: string;
  lastName: string;
  email: string;
  status: string;
  dateOfBirth: Date;
}

interface Props {
  user: User;
  onEdit: () => void;
  onDelete: () => void;
}

const UserCard: React.FC<Props> = ({ user, onEdit, onDelete }) => {
  const initials = `${user.firstName?.[0] ?? ""}${user.lastName?.[0] ?? ""}`.toUpperCase();

  return (
    <div className="bg-white rounded shadow p-4 flex gap-4 items-start ">
      <div className="flex-1">
        <div className="w-full flex items-center justify-center">
          <div className="bg-primary text-white rounded-full h-12 w-12 font-bold text-lg flex items-center justify-center">
            {initials}
          </div>
        </div>
        <h2 className="font-semibold text-lg">
          {user.firstName} {user.lastName}
        </h2>
        <p className="text-sm text-gray-600">Email: {user.email}</p>
        <p className="text-sm text-gray-600">Status: {user.status}</p>
        <p className="text-sm text-gray-600">
          Date of Birth: {new Date(user.dateOfBirth).toLocaleDateString()}
        </p>
        <div className="mt-2 flex gap-2 items-center justify-end">
          <button
            onClick={onEdit}
            className="bg-primary text-white px-3 py-1 rounded "
          >
            Edit
          </button>
          <button
            onClick={onDelete}
            className="bg-red-500 text-white px-3 py-1 rounded hover:bg-red-600"
          >
            Delete
          </button>
        </div>
      </div>
    </div>
  );
};

export default UserCard;
