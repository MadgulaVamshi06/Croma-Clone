import React, { useState, useContext } from 'react';
import { useNavigate } from 'react-router-dom';
import { AuthContext } from '../context/AuthContext';
import Footer from '../components/Footer';
import { Link } from 'react-router-dom';

const Login = () => {
  const [userData, setUserData] = useState({
    username: '',
    password: '',
  });
  const { toggle } = useContext(AuthContext);
  const navigate = useNavigate();

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setUserData({
      ...userData,
      [name]: value,
    });
  };

  const handleLogin = () => {
    console.log('Attempting to log in with:', userData);
   
    if (userData.username.length > 0 && userData.password.length > 0) {
      alert('Login successful , Continue Shopping');
      toggle(); 
      navigate('/products'); 
    } else {
      alert('Invalid username or password');
    }
  };

  return (
    <div className='bg-loginbg'>
    <div className="max-w-md mx-auto bg-gray-100 p-4  mb-5">
      <h2 className="text-2xl text-center  mb-5">Login</h2>
      <form>
        <div className="mb-4">
          <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="username">
            Username
          </label>
          <input
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            id="username"
            type="text"
            placeholder="Username"
            name="username"
            value={userData.username}
            onChange={handleInputChange}
          />
        </div>
        <div className="mb-6">
          <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="password">
            Password
          </label>
          <input
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            id="password"
            type="password"
            placeholder="Password"
            name="password"
            value={userData.password}
            onChange={handleInputChange}
          />
        </div>
        <div className="flex flex-col sm:flex-row items-center justify-between">
          <button
            className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline mb-4 sm:mb-0"
            type="button"
            onClick={handleLogin}
          >
            Login
          </button>
          <Link to='/signup'><p className="text-sm text-gray-600 hover:text-black sm:ml-2">Don't have an account? Signup</p></Link> 
        </div>
      </form>
    </div>
    <Footer/>
    </div>
  );
};

export default Login;
