import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useAuthStore } from '../store/authStore';
import { Eye, EyeOff } from 'lucide-react';
import { useThemeStore } from '../store/themeStore';
import ThemeToggle from '../components/ThemeToggle';

const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [showPassword, setShowPassword] = useState(false);
  const [error, setError] = useState('');
  const navigate = useNavigate();
  const setAuth = useAuthStore((state) => state.setAuth);
  const isDarkMode = useThemeStore((state) => state.isDarkMode);

  const handleLogin = async () => {
    if (!email || !password) {
      setError('Please enter both email and password');
      return;
    }

    const res = await fetch('/api/login', {
      method: 'post',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ email, password }),
    });
    const data = await res.json();
    if (res.ok) {
      setAuth(data.result.data.accessToken, data.result.data.expiresIn);
      setTimeout(() => {
        navigate('/dashboard');
      }, 0);
    } else {
      setError(data.message || 'Login failed');
    }
  };

  useEffect(() => {
    document.documentElement.classList.toggle('dark', isDarkMode);
  }, [isDarkMode]);

  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100 dark:bg-gray-900">
      <div className="w-full max-w-md bg-white dark:bg-gray-800 rounded-lg shadow-md p-6">
        <h2 className="text-2xl font-semibold text-center text-gray-800 dark:text-white mb-6">
          Login
        </h2>
        {error && (
          <div className="text-red-500 text-sm mb-4 text-center">{error}</div>
        )}

        {/* Email */}
        <div className="mb-4">
          <label className="block text-sm font-medium text-gray-700 dark:text-gray-300">
            Email
          </label>
          <input
            type="email"
            className="mt-1 w-full px-4 py-2 border rounded-md 
              bg-white text-gray-900 placeholder-gray-400 
              border-gray-300 focus:ring-2 focus:ring-blue-500
              dark:bg-gray-700 dark:text-white dark:placeholder-gray-400 dark:border-gray-600"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="academy@gmail.com"
          />
        </div>

        {/* Password */}
        <div className="mb-4">
          <label className="block text-sm font-medium text-gray-700 dark:text-gray-300">
            Password
          </label>
          <div className="relative">
            <input
              type={showPassword ? 'text' : 'password'}
              className="mt-1 w-full px-4 py-2 border rounded-md 
                bg-white text-gray-900 placeholder-gray-400 
                border-gray-300 focus:ring-2 focus:ring-blue-500
                dark:bg-gray-700 dark:text-white dark:placeholder-gray-400 dark:border-gray-600"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              placeholder="academy123"
            />
            <button
              type="button"
              className="absolute inset-y-0 right-2 text-sm text-primary hover:underline bg-transparent"
              onClick={() => setShowPassword((prev) => !prev)}
            >
              {showPassword ? <EyeOff /> : <Eye />}
            </button>
          </div>
        </div>

        <button
          onClick={handleLogin}
          className="w-full bg-blue-600 hover:bg-blue-700 text-white font-semibold py-2 rounded-md transition"
        >
          Sign In
        </button>
      </div>
    </div>
  );
};

export default Login;
