import './App.css';
import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import About from './pages/About';
import Amigurumate from './pages/Amigurumate';
import JCrew from './pages/JCrew';
import "yet-another-react-lightbox/styles.css";
import Cisco from './pages/Cisco';

export default function App() {
    return (
        <BrowserRouter basename={process.env.PUBLIC_URL}>
            <Routes>
                <Route path='' element={<Home />} />
                <Route path='about' element={<About />} />
                <Route path='amigurumate' element={<Amigurumate />} />
                <Route path='jcrew' element={<JCrew />} />
                <Route path='cisco' element={<Cisco />} />
            </Routes>
        </BrowserRouter>
    );
}
