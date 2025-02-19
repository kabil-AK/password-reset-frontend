import React, { useState } from "react";
import axios from "axios";

import "bootstrap/dist/css/bootstrap.min.css";

const ForgotPassword = () => {
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post(
        "http://localhost:5000/api/auth/forgot-password",
        { email }
      );
      setMessage(response.data.message);
    } catch (error) {
      setMessage("Error sending email. Try again!");
    }
  };

  return (
    <div className="container mt-5 body">
      <h2 className="header">Forgot Password</h2>
      <form onSubmit={handleSubmit}>
        <div className="mb-3 box">
          <label className="form-label">Enter your email:</label>
          <input
            type="email"
            className="form-control"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
        </div >
        <button type="submit" className="btn btn-primary color">
          Send Reset Link
        </button>
      </form>
      {message && <p className="mt-3">{message}</p>}
    </div>
  );
};

export default ForgotPassword;
