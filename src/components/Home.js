// Home.js
import React from 'react';

function Home() {
    return (
        <div>
            <div style={{ background: '#333', color: '#fff', padding: '50px 20px', textAlign: 'center' }}>
                <h1>Learn to Code for Free</h1>
                <p>Build Projects. Earn Certifications.</p>
            </div>
            <div style={{ padding: '20px', textAlign: 'center' }}>
                <div style={{ margin: '20px 0' }}>
                    <h2>Learn to Code for Free</h2>
                    <p>Access thousands of hours of content.</p>
                </div>
                <div style={{ margin: '20px 0' }}>
                    <h2>Build Projects</h2>
                    <p>Practice with real-world projects.</p>
                </div>
                <div style={{ margin: '20px 0' }}>
                    <h2>Earn Certifications</h2>
                    <p>Showcase your skills with certifications.</p>
                </div>
            </div>
        </div>
    );
}

export default Home;
