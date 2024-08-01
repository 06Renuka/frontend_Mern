
//  import './App.css';



// import React from 'react';
// import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
// import Navbar from './components/Navbar';
// import Home from './components/Home';
// import SignIn from './components/SignIn';
// import Courses from './components/Courses';

// function App() {
//     return (
//         <Router>
//             <div className="App">
//                 <Navbar />
//                 <SignIn/>
//                 <Routes>
//                     <Route exact path="/" component={Home} />
//                     <Route path="/signin" component={SignIn} />
//                     <Route path="/courses" component={Courses} />
//                 </Routes>
//             </div>
//         </Router>
//     );
// }

// export default App;


// App.js
import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Navbar from './components/Navbar';
import Home from './components/Home';
import SignIn from './components/SignIn';

import SignUp from './components/SignUp';
import Courses from './components/Courses'
// import GoogleSignInButton from './components/GoogleSignInButton';

function App() {
    return (
        <Router>
            <div>
                <Navbar />
                
                
                <Routes>
                    <Route path="/" element={<Home />} />
                    <Route path="/signup" element={<SignUp />} />
                    <Route path="/signin" element={<SignIn />} />
                    <Route path="/courses" element={<Courses/>} />
                </Routes>
            </div>
        </Router>
    );
}

export default App;


