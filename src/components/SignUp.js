// import React, { useState } from 'react';
// import axios from 'axios';
// import { useNavigate } from 'react-router-dom';
// import GoogleSignInButton from './GoogleSignInButton';

// function SignUp() {
//     const [name, setName] = useState('');
//     const [email, setEmail] = useState('');
//     const [password, setPassword] = useState('');
//     const [error, setError] = useState('');
//     const navigate = useNavigate();

//     const handleSubmit = (event) => {
//         event.preventDefault();

//         const user = { name, email, password };

//         axios.post('http://localhost:5000/api/signup', user)
//             .then(response => {
//                 if (response.data.success) {
//                     localStorage.setItem('token', response.data.token);
//                     navigate('/courses');  // Redirect to the courses page after signing up
//                 } else {
//                     setError(response.data.message);
//                 }
//             })
//             .catch(error => {
//                 if (error.response && error.response.data.email) {
//                     setError('Email id already exists');
//                     // Attempt login if email already exists
//                     axios.post('http://localhost:5000/api/login', { email, password })
//                         .then(loginResponse => {
//                             if (loginResponse.data.success) {
//                                 localStorage.setItem('token', loginResponse.data.token);
//                                 navigate('/courses');
//                             } else {
//                                 setError(loginResponse.data.message);
//                             }
//                         })
//                         .catch(loginError => {
//                             if (loginError.response && loginError.response.data.password) {
//                                 setError('Password incorrect');
//                             } else {
//                                 console.error('There was an error logging in!', loginError);
//                             }
//                         });
//                 } else {
//                     setError('Email is already Exits ');
//                 }
//             });
//     };

//     const handleGoogleSignIn = () => {
//         window.location.href = 'http://localhost:5000/api/auth/google';
//     };

//     return (
//         <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
//             <h2>Sign Up</h2>
//             <form onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column', width: '300px' }}>
//                 <input
//                     type="text"
//                     placeholder="Name"
//                     value={name}
//                     onChange={(e) => setName(e.target.value)}
//                     style={{ margin: '10px 0', padding: '10px', fontSize: '16px' }}
//                 />
//                 <input
//                     type="email"
//                     placeholder="Email"
//                     value={email}
//                     onChange={(e) => setEmail(e.target.value)}
//                     style={{ margin: '10px 0', padding: '10px', fontSize: '16px' }}
//                 />
//                 {error && error.includes('Email') && (
//                     <p style={{ color: 'red', margin: '5px 0' }}>{error}</p>
//                 )}
//                 <input
//                     type="password"
//                     placeholder="Password"
//                     value={password}
//                     onChange={(e) => setPassword(e.target.value)}
//                     style={{ margin: '10px 0', padding: '10px', fontSize: '16px' }}
//                 />
//                 {error && error.includes('Password') && (
//                     <p style={{ color: 'red', margin: '5px 0' }}>{error}</p>
//                 )}
//                 <button type="submit" style={{ padding: '10px', fontSize: '16px' }}>Sign Up</button>
//             </form>
//             {/* <button onClick={handleGoogleSignIn} style={{ margin: '10px 0', padding: '10px', fontSize: '16px' }}>Sign Up with Google</button> */}
//             <div ><GoogleSignInButton/></div>
//             <div>Already have an account? <a onClick={() => navigate('/signin')} style={{ cursor: 'pointer', color: 'blue' }}>Sign In</a></div>
//         </div>
//     );
// }

// export default SignUp;


import React, { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import GoogleSignInButton from './GoogleSignInButton';

function SignUp() {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState('');
    const navigate = useNavigate();

    const handleSubmit = (event) => {
        event.preventDefault();

        const user = { name, email, password };

        axios.post('http://localhost:5000/api/signup', user)
            .then(response => {
                if (response.data.success) {
                    localStorage.setItem('token', response.data.token);
                    navigate('/courses');  // Redirect to the courses page after signing up
                } else {
                    setError(response.data.message);
                }
            })
            .catch(error => {
                if (error.response && error.response.data.email) {
                    setError('Email id already exists');
                    // Attempt login if email already exists
                    axios.post('http://localhost:5000/api/login', { email, password })
                        .then(loginResponse => {
                            if (loginResponse.data.success) {
                                localStorage.setItem('token', loginResponse.data.token);
                                navigate('/courses');
                            } else {
                                setError(loginResponse.data.message);
                            }
                        })
                        .catch(loginError => {
                            if (loginError.response && loginError.response.data.password) {
                                setError('Password incorrect');
                            } else {
                                console.error('There was an error logging in!', loginError);
                            }
                        });
                } else {
                    setError('Email is already Exists');
                }
            });
    };

    const handleGoogleSignIn = () => {
        window.location.href = 'http://localhost:5000/api/auth/google';
    };

    return (
        <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', padding: '20px' }}>
            <h2 style={{ marginBottom: '20px' }}>Sign Up</h2>
            <form onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column', width: '300px' }}>
                <input
                    type="text"
                    placeholder="Name"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    style={{ margin: '10px 0', padding: '10px', fontSize: '16px', borderRadius: '4px', border: '1px solid #ccc' }}
                />
                <input
                    type="email"
                    placeholder="Email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    style={{ margin: '10px 0', padding: '10px', fontSize: '16px', borderRadius: '4px', border: '1px solid #ccc' }}
                />
                {error && error.includes('Email') && (
                    <p style={{ color: 'red', margin: '5px 0' }}>{error}</p>
                )}
                <input
                    type="password"
                    placeholder="Password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    style={{ margin: '10px 0', padding: '10px', fontSize: '16px', borderRadius: '4px', border: '1px solid #ccc' }}
                />
                {error && error.includes('Password') && (
                    <p style={{ color: 'red', margin: '5px 0' }}>{error}</p>
                )}
                <button type="submit" style={{ padding: '10px', fontSize: '16px', backgroundColor: '#007bff', color: 'white', border: 'none', borderRadius: '4px' }}>Sign Up</button>
            </form>
            <div style={{ marginTop: '20px' }}>
                <GoogleSignInButton />
            </div>
            <div style={{ marginTop: '10px' }}>
                Already have an account? <a onClick={() => navigate('/signin')} style={{ cursor: 'pointer', color: 'blue' }}>Sign In</a>
            </div>
        </div>
    );
}

export default SignUp;

