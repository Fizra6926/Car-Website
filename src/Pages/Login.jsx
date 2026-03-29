import { useNavigate } from "react-router-dom";

const Login = ({ setIsAuthenticated }) => {
  const navigate = useNavigate();

  const handleLogin = (e) => {
    e.preventDefault();
    // Yahan API aayegi real app mein. Abhi ke liye direct login karwa rahe hain.
    setIsAuthenticated(true);
    localStorage.setItem("isLoggedIn", "true"); // LocalStorage mein save kar diya
    navigate("/"); // Login ke baad Home page pe bhej do
  };

  return (
    <div className="flex items-center justify-center h-screen bg-gray-100">
      <div className="bg-white p-8 rounded-lg shadow-md w-96">
        <h2 className="text-3xl font-bold mb-6 text-center">Login</h2>
        <form onSubmit={handleLogin} className="flex flex-col gap-4">
          <input 
            type="text" 
            placeholder="Username" 
            className="border p-3 rounded outline-none focus:border-black"
            required
          />
          <input 
            type="password" 
            placeholder="Password" 
            className="border p-3 rounded outline-none focus:border-black"
            required
          />
          <button 
            type="submit" 
            className="bg-black text-white p-3 rounded font-bold hover:bg-gray-800 transition"
          >
            Enter Website
          </button>
        </form>
      </div>
    </div>
  );
};

export default Login;