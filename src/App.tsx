import React from 'react';
import logo from './logo.svg';
import './App.css';
import Header from './components/Header';
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Link
} from "react-router-dom";

import Home from './pages/Home';
import About from './pages/About';
import Contact from './pages/Contact';
import CreatePost from './pages/Edit';

function App() {
  return (
    <div className='App'>
    
      <Router>
        <Routes>
          <Route path="/" element={<Header/>}>
            <Route index element={<Home />} />
            <Route path="about" element={<About />} />
            <Route path="contact" element={<Contact/>} />
            <Route path="topsecret" element={<CreatePost/>} />
            <Route path="*" element={<h1>Sorry, no page found!</h1>}/>
          </Route>
        </Routes>

      </Router>
    </div>
  );
}

export default App;
