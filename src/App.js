import './App.css';
import React from 'react';
import Blogs from './components/Blogs';

function App() {
  return (
    <div className="App">
      <nav className="header">
        <div className="menu-bar">
            <span><a href="index.php">Home</a></span>
            <span><a href="me.php">Me</a></span>
        </div>
      </nav>
      <Blogs />
    </div>
  );
}

export default App;
