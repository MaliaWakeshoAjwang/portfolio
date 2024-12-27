import React from "react";
import { BrowserRouter as Router } from "react-router-dom";
import AppRouter from "./Router";
import Header from "./components/Header";
import Footer from "./components/Footer";
import "./styles/global.css";

function App() {
    return (
        <Router basename="/portfolio">
            <div className="router">
                <Header />
                <AppRouter />
                <Footer />
            </div>
        </Router>
    );
}

export default App;