import './App.css';
import React from 'react';
import Blogs from './components/Blogs';
import BlogDetailView from './components/BlogDetailView';
import AboutMe from './components/AboutMe';

import {
  BrowserRouter,
  Switch,
  Route,
  Link
} from "react-router-dom";


function App() {
  return (
    <div className="App">
    <BrowserRouter>
      <nav className="header">
        <div className="menu-bar">
            <span><Link to="/">Home ✍️</Link></span>
            <span><Link to="/aboutme">Meet me 👋</Link></span>
        </div>
      </nav>
    
        <Switch>
          <Route exact path="/"   >
            <Blogs />
          </Route>
          <Route path="/blog/:id/:blogname" >
              <BlogDetailView />  
          </Route>
          <Route path="/aboutme"  >
            <AboutMe />
          </Route>
        </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;
