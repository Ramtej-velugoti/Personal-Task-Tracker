import React, { useState } from 'react';
import { saveUsername } from '../utils/localStorage';

function Login({ setUsername }) {
  const [input, setInput] = useState('');
  

  const handleLogin = () => {
  if (input.trim()) {
    saveUsername(input.trim());         // ✅ Save to localStorage
    setUsername(input.trim());          // ✅ Update App state
  }
};


  return (
    <div className="login">
      <h2>Login</h2>
      <input
        type="text"
        placeholder="Enter your name"
        value={input}
        onChange={(e) => setInput(e.target.value)}
      />
      <button onClick={handleLogin}>Login</button>
    </div>
  );
}

export default Login; // ✅ This is what App.js expects
