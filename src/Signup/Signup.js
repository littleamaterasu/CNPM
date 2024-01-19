import axios from "axios";
import React, { useState } from "react";
import './Signup.css'
import { Link } from "react-router-dom";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

function Signup() {
  const [userr, setUser] = useState({
    username: "",
    password: "",
    role_id: 3,
    email: ""
    
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setUser((prevUser) => ({
      ...prevUser,
      [name]: value,
    }));
  };


  const showNotification = (message, type) => {
    if (type === 'success') {
      toast.success(message);
    } else {
      toast.error(message);
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      console.log(userr)
      const response = await axios.post("http://127.0.0.1:8000/api/user/register", userr);
      console.log("Response:", response.data);
      showNotification("Registration successful!", "success");
    } catch (error) {
      console.error("Error:", error);
      showNotification("Registration failed. Please try again.", "error");
    }
  };

  return (
    <div className="signup">
      <h1>Sign up</h1>
      <p><Link to="/login">Back to Login</Link></p>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="username"
          name="username"
          value={userr.username}
          onChange={handleInputChange}
        />
        <input
          type="text"
          placeholder="email"
          name="email"
          value={userr.email}
          onChange={handleInputChange}
        />
        <input
          type="radio"
          id="User"
          name="role_id"
          value={3}
          checked={userr.role_id === "3"}
          onChange={handleInputChange}
        />
        <label htmlFor="User">User</label>
        <input
          type="radio"
          id="Game_publisher"
          name="role_id"
          value={2}
          checked={userr.role_id === "2"}
          onChange={handleInputChange}
        />
        <label htmlFor="Game_publisher">Game_publisher</label>
        <input
          type="password"
          placeholder="password"
          name="password"
          value={userr.password}
          onChange={handleInputChange}
        />
        <input type="submit" value={"Submit"} />
      </form>
      <ToastContainer />
    </div>
  );
}

export default Signup;
