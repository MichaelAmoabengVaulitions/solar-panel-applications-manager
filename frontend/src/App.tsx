// src/App.tsx
import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import Home from './pages/Home';
import ApplicationDetailsPage from './pages/ApplicationDetailsPage';

const App = () => {
    return (
        <Router>
            <Header />
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/applications/:id" element={<ApplicationDetailsPage />} />
            </Routes>
        </Router>
    );
};

export default App;
