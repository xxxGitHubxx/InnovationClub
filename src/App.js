
import { useState } from "react";

import { Routes, Route } from "react-router-dom";

import './App.css';
import { Colors } from './assets/Colors';
import { Auth } from './components/auth';
import { Navbar } from './components/navbar';
import { Home } from './components/pages/Home';
import { About } from './components/pages/About';
import { Login } from './components/pages/Login';


function App() {
    return (
        <body>
        <div className="App">
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/about" element={<About />} />
                <Route path="/login" element={<Login />} />
            </Routes>
                <Auth />
                <Navbar />
        </div>
        </body>
  );
}

export default App;
