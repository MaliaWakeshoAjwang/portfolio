import React from "react";
import { BrowserRouter as Router } from "react-router-dom";
import AppRouter from "./Router";
import Header from "./components/Header";
import Footer from "./components/Footer";

function App() {
    return (
        <Router basename="/portfolio">
            <Header />
            <AppRouter />
            <Footer />
        </Router>
    );
}

export default App;