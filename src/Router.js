import React from 'react';
import { Routes, Route } from "react-router-dom";

import About from './pages/About';
import Blog from './pages/Blog';
import Contact from './pages/Contact';
import Home from './pages/Home';
import Projects from './pages/Projects';
import Resume from './pages/Resume';
import TemperatureConverter from "./pages/projectcode/TemperatureConverter";
import DogYears from './pages/projectcode/DogYears';

const AppRouter = () => {
    return (
        <main>
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/about" element={<About />} />
                <Route path="/blog" element={<Blog />} />
                <Route path="/contact" element={<Contact />} />
                <Route path="/projects" element={<Projects />} />
                <Route path="/resume" element={<Resume />} />
                <Route path="/project/temperature-converter" element={<TemperatureConverter />} />
                <Route path="/project/dog-years" element={<DogYears />} />
            </Routes>
        </main>
    );
};

export default AppRouter;