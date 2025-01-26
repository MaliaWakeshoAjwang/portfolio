import React from "react";
import { HashRouter as Router } from "react-router-dom";
import AppRouter from "./Router";
import Header from "./components/Header";
import Footer from "./components/Footer";
import ScrollToTop from "./components/ScrollToTop";
import "./styles/global.css";

function App() {
    return (
        <Router>
            <ScrollToTop />
            <div className="router">
                <Header />
                <AppRouter />
                <Footer />
            </div>
        </Router>
    );
}

export default App;