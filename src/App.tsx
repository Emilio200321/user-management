
import Navbar from "./components/Navbar";
import UserGrid  from "./components/UserGrid";
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Login from "./login/Login";
import ProtectedRoute from "./routes/ProtectedRoute";
import Dashboard from "./dashboard/Dashboard";

function App() {
  return (
    // <div className="min-h-screen bg-gray-100">
    //   <Navbar />
    //   <main className="p-4">
    //      <UserGrid /> 
        
    //   </main>
    // </div> 
    <Router>
    <Routes>
      <Route path="/login" element={<Login />} />
      <Route
        path="/dashboard"
        element={
          <ProtectedRoute>
            <Dashboard />
          </ProtectedRoute>
        }
      />
    </Routes>
  </Router>
  );
}

export default App;