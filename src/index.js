import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import App from './App';
import About from './pages/About';
import CaseStudyTemplate from './pages/CaseStudyTemplate';
import './styles.css';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <Router>
    <Routes>
      <Route path="/" element={<App />} />
      <Route path="/about" element={<About />} />
      <Route path="/case-study" element={<CaseStudyTemplate />} />
    </Routes>
  </Router>
);
