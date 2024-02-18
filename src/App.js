// App.js
import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import UserData from './components/UserData';
import UserDetails from './components/UserDetails';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<UserData />} />
        <Route path="/user/:username" element={<UserDetails/>} />
      </Routes>
    </Router>
  );
}

export default App;
