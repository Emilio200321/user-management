
import Navbar from "./components/Navbar";
import UserGrid  from "./components/UserGrid";

function App() {
  return (
    <div className="min-h-screen bg-gray-100">
      <Navbar />
      <main className="p-4">
        <UserGrid />
      </main>
    </div> 
  );
}

export default App;