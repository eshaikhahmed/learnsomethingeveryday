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
      <nav className="header">
        <div className="menu-bar">
            <span><a href="/">Home ✍️</a></span>
            <span><a href="/aboutme">Meet me 👋</a></span>
        </div>
      </nav>
      <BrowserRouter>
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
