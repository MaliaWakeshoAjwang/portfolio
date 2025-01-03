import React from 'react';
import { Routes, Route } from "react-router-dom";
import About from './pages/About';
import Blog from './pages/Blog';
import Contact from './pages/Contact';
import Home from './pages/Home';
import Projects from './pages/Projects';

const AppRouter = () => {
    return (
        <main>
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/about" element={<About />} />
                <Route path="/blog" element={<Blog />} />
                <Route path="/contact" element={<Contact />} />
                <Route path="/projects" element={<Projects />} />
            </Routes>
        </main>
    );
};

export default AppRouter;