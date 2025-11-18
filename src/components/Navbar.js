import React from 'react';
import { Link } from 'react-router-dom';

function Navbar() {
  return (
    <nav style={{ padding: '1rem', backgroundColor: '#0F172A', color: '#E5E7EB', display: 'flex', justifyContent: 'space-between' }}>
      <div style={{ fontWeight: 'bold', fontSize: '24px' }}>
        SG Analytics
      </div>

      <div style={{ display: 'flex', gap: '1rem' }}>
        <Link to="/">Home</Link>
        <Link to="/about">About</Link>
        <Link to="/case-study">Case Studies</Link>
      </div>
    </nav>
  );
}

export default Navbar;
