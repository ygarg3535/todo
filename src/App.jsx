
import { useDispatch, useSelector } from 'react-redux';
import { login, logout } from './redux/authActions';
import Navbar from './components/Navbar';
import Sidebar from './components/Sidebar';
import TaskInput_List from './components/TaskInput_List';
import { useState } from 'react';

function App() {

  const dispatch = useDispatch();
  const { isAuthenticated} = useSelector(state => state.auth);

  const handleLogin = () => {
    // For simplicity, we're just using a static username
    dispatch(login());
  };

  const [sidebarToggle,setSidebarToggle] = useState(false)

  return (
    <div>
      {!isAuthenticated ? (
        <div>
      <div className="flex items-center justify-center min-h-screen bg-gradient-to-r from-blue-500 via-green-400 to-blue-500">
      <div className="bg-white p-8 rounded-lg shadow-lg w-full max-w-md">
        <h2 className="text-3xl font-bold text-center text-gray-700 mb-6">
          Welcome Back!
        </h2>
        <p className="text-center text-gray-500 mb-8 font-semibold">
          Please click below to log in.
        </p>
        
        <button
          onClick={handleLogin}
          className="w-full py-3 bg-blue-600 text-white font-semibold rounded-md hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-400"
        >
          Log in
        </button>
      </div>
    </div>
        </div>
      ) : (
        <div>
          <Navbar sidebarToggle={sidebarToggle}
          setSidebarToggle={setSidebarToggle}/>
          <Sidebar sidebarToggle={sidebarToggle}/> 
          <TaskInput_List 
          sidebarToggle={sidebarToggle}/>
        </div>
      )}
    </div>
  )
}

export default App
