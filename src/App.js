

import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import HomePage from './HomePage'; // Import your home page component
import Register from './Register'; // Import your register page component

function App() {
    return (
        <Router>
            <Routes>
                <Route path="/" element={<HomePage />} /> {/* Render HomePage component when URL matches / */}
                <Route path="/register" element={<Register />} /> {/* Render RegisterPage component when URL matches /register */}
            </Routes>
        </Router>
    );
}

export default App;
