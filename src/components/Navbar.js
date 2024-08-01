// Navbar.js
import React from 'react';
import { Link } from 'react-router-dom';

function Navbar() {
    return (
        <nav style={{ display: 'flex', justifyContent: 'space-between', padding: '10px', background: '#f8f9fa' }}>
            <div style={{ fontWeight: 'bold', fontSize: '24px' }}>freeBootCamp</div>
            <ul style={{ display: 'flex', listStyle: 'none', margin: 0, padding: 0 }}>
                <li style={{ margin: '0 10px' }}>
                    <Link to="/" style={{ textDecoration: 'none', color: 'black' }}>Home</Link>
                </li>
               
                <li style={{ margin: '0 10px' }}>
                    <Link to="/signin" style={{ textDecoration: 'none', color: 'black' }}>Sign In</Link>
                </li>
            </ul>
        </nav>
    );
}

export default Navbar;
