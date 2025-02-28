
import { useState } from "react";

import { Routes, Route } from "react-router-dom";

import './App.css';
import { Auth } from './components/auth';
import { Navbar } from './components/navbar';
import { Home } from './components/pages/Home';
import { About } from './components/pages/About';
import { Login } from './components/pages/Login';


function App() {
    return (
        <div className="App">
            <Navbar/>
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/about" element={<About />} />
                <Route path="/login" element={<Login />} />
            </Routes>
          <Auth/>
     </div>
  );
}

export default App;
