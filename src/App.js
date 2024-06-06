import React from "react";
import Navbar from "./components/JS/Navbar";
import { Routes, Route } from "react-router-dom";
import Home from "./components/JS/Home";
import About from "./components/JS/About";
import Contact from "./components/JS/Contact";
import Portfolio from "./components/JS/Projects";
import ScrollToTop from "./components/JS/ScrollToTop";

const App = () => {
    return (
        <div className="">
            <div>
                <Navbar />
            </div>
            <ScrollToTop />
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/about" element={<About />} />
                <Route path="/contact" element={<Contact />} />
                <Route path="/portfolio" element={<Portfolio />} />
            </Routes>

        </div>
    );
};

export default App;
