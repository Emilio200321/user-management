import { useEffect, useState } from 'react';
import { useAuthStore } from '../store/authStore';
import Users from '../components/UserGrid';
import NavBar from '../components/Navbar';

interface User {
  id: number;
  firstName: string;
  lastName: string;
  email: string;
  status: string;
  dateOfBirth: Date;
}

const Dashboard = () => {
  const [users, setUsers] = useState<User[]>([]);
  const accessToken = useAuthStore((state) => state.Token);

  const fetchUsers = async () => {
    if (!accessToken) {
      console.error('No access token available');
      return;
    }
    
    try {
      const response = await fetch('/api/users', {
        headers: { Authorization: `Bearer ${accessToken}` },
      });
      if (response.ok) {
        const data = await response.json();
        // Assuming the API returns the users as data.result.data.users
        setUsers(data.result.data.users);
      } else {
        console.error('Failed to fetch users');
      }
    } catch (error) {
      console.error('Error fetching users:', error);
    }
  };

  useEffect(() => {
    fetchUsers();
  }, [accessToken]);

  return (
    <div>
      <NavBar />
      <Users users={users} />
    </div>
  );
};

export default Dashboard;
