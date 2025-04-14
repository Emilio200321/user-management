import { useEffect, useState } from 'react';
import { useAuthStore } from '../store/authStore';
import Users from '../components/UserGrid';

const Dashboard = () => {
  const [users, setUsers] = useState([]);
  const accessToken = useAuthStore((state) => state.Token);

  useEffect(() => {
    const fetchUsers = async () => {
      const response = await fetch('/api/users', {
        headers: { Authorization: 'Bearer ${accessToken}' },
      });
      if (response.ok) {
        const data = await response.json();
        setUsers(data);
      } else {
        console.error('Failed to fetch users');
      }
    };

    fetchUsers();
  }, [accessToken]);

  return (
    <div>
     <Users />
    </div>
  );
};

export default Dashboard;