// import React, { useState } from 'react';
// import axios from 'axios';
// import { useHistory } from 'react-router-dom';

// function SignIn() {
//     const [name, setName] = useState('');
//     const [email, setEmail] = useState('');
//     const [password, setPassword] = useState('');
//     const [message, setMessage] = useState('');
//     const history = useHistory();

//     const handleSignUp = () => {
//         axios.post('http://localhost:5000/api/auth/register', { name, email, password })
//             .then(response => {
//                 setMessage('User registered successfully');
//                 history.push('/courses');
//             })
//             .catch(error => {
//                 if (error.response && error.response.data.email) {
//                     setMessage(error.response.data.email);
//                 } else {
//                     setMessage('Error registering user');
//                 }
//             });
//     };

//     const handleGoogleSignIn = () => {
//         window.location.href = 'http://localhost:5000/api/auth/google';
//     };

//     return (
//         <div>
//             <h2>Sign In</h2>
//             <input
//                 type="text"
//                 placeholder="Name"
//                 value={name}
//                 onChange={(e) => setName(e.target.value)}
//             />
//             <input
//                 type="email"
//                 placeholder="Email"
//                 value={email}
//                 onChange={(e) => setEmail(e.target.value)}
//             />
//             <input
//                 type="password"
//                 placeholder="Password"
//                 value={password}
//                 onChange={(e) => setPassword(e.target.value)}
//             />
//             <button onClick={handleSignUp}>Sign Up</button>
//             <button onClick={handleGoogleSignIn}>Sign In with Google</button>
//             {message && <p>{message}</p>}
//         </div>
//     );
// }

// export default SignIn;

// import React, { useState } from 'react';
// import axios from 'axios';
// import { useNavigate } from 'react-router-dom';

// function SignIn() {
//     const [name, setName] = useState('');
//     const [email, setEmail] = useState('');
//     const [password, setPassword] = useState('');
//     const navigate = useNavigate();

//     const handleSubmit = (event) => {
//         event.preventDefault();

//         const user = {
//             name,
//             email,
//             password,
//         };

//         axios.post('http://localhost:5000/api/signup', user)
//             .then(response => {
//                 if (response.data.success) {
//                     navigate('/courses');
//                 } else {
//                     alert(response.data.message);
//                 }
//             })
//             .catch(error => {
//                 console.error('There was an error signing in!', error);
//             });
//     };
//     const handleGoogleSignIn = () => {
//         window.location.href = 'http://localhost:5000/api/auth/google';
//       };

//     return (
//         // <div>
//         //     <h2>Sign In</h2>
//         //     <form onSubmit={handleSubmit}>
//         //         <input
//         //             type="text"
//         //             placeholder="Name"
//         //             value={name}
//         //             onChange={(e) => setName(e.target.value)}
//         //         />
//         //         <input
//         //             type="email"
//         //             placeholder="Email"
//         //             value={email}
//         //             onChange={(e) => setEmail(e.target.value)}
//         //         />
//         //         <input
//         //             type="password"
//         //             placeholder="Password"
//         //             value={password}
//         //             onChange={(e) => setPassword(e.target.value)}
//         //         />
//         //         <button type="submit">Sign In</button>
//         //     </form>
//         // </div>
//         <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
//       <h2>Sign In</h2>
//       <form onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column', width: '300px' }}>
//         <input
//           type="text"
//           placeholder="Name"
//           value={name}
//           onChange={(e) => setName(e.target.value)}
//           style={{ margin: '10px 0', padding: '10px', fontSize: '16px' }}
//         />
//         <input
//           type="email"
//           placeholder="Email"
//           value={email}
//           onChange={(e) => setEmail(e.target.value)}
//           style={{ margin: '10px 0', padding: '10px', fontSize: '16px' }}
//         />
//         <input
//           type="password"
//           placeholder="Password"
//           value={password}
//           onChange={(e) => setPassword(e.target.value)}
//           style={{ margin: '10px 0', padding: '10px', fontSize: '16px' }}
//         />
//         <button type="submit" style={{ padding: '10px', fontSize: '16px' }}>Sign In</button>
//         {error && <p style={{ color: 'red' }}>{error}</p>}
//       </form>
//       <button onClick={handleGoogleSignIn} style={{ margin: '10px 0', padding: '10px', fontSize: '16px' }}>Sign In with Google</button>
//     </div>
//     );
// }

// export default SignIn;

// import React, { useState } from 'react';
// import axios from 'axios';
// import { useNavigate } from 'react-router-dom';

// function SignIn() {
//     const [name, setName] = useState('');
//     const [email, setEmail] = useState('');
//     const [password, setPassword] = useState('');
//     const [error, setError] = useState('');
//     const navigate = useNavigate();

//     const handleSubmit = (event) => {
//         event.preventDefault();

//         const user = {
//             name,
//             email,
//             password,
//         };

//         axios.post('http://localhost:5000/api/signup', user)
//             .then(response => {
//                 if (response.data.success) {
//                     navigate('/courses');
//                 } else {
//                     setError(response.data.message);
//                 }
//             })
//             .catch(error => {
//                 if (error.response && error.response.data.email) {
//                     setError('Email ID already exists');
//                 } else {
//                     setError('Email ID already exists');
//                 }
//             });
//     };

//     const handleGoogleSignIn = () => {
//         window.location.href = 'http://localhost:5000/api/auth/google';
//     };

//     return (
//         <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
//             <h2>Sign In</h2>
//             <form onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column', width: '300px' }}>
//                 <input
//                     type="text"
//                     placeholder="Name"
//                     value={name}
//                     onChange={(e) => setName(e.target.value)}
//                     style={{ 
//                         margin: '10px 0', 
//                         padding: '10px', 
//                         fontSize: '16px',
//                         border: '1px solid #ccc',
//                         transition: 'border-color 0.3s'
//                     }}
//                     onFocus={(e) => e.target.style.borderColor = '#007bff'}
//                     onBlur={(e) => e.target.style.borderColor = '#ccc'}
//                 />
//                 <input
//                     type="email"
//                     placeholder="Email"
//                     value={email}
//                     onChange={(e) => setEmail(e.target.value)}
//                     style={{ 
//                         margin: '10px 0', 
//                         padding: '10px', 
//                         fontSize: '16px',
//                         border: '1px solid #ccc',
//                         transition: 'border-color 0.3s'
//                     }}
//                     onFocus={(e) => e.target.style.borderColor = '#007bff'}
//                     onBlur={(e) => e.target.style.borderColor = '#ccc'}
//                 />
//                 {error && error.includes('Email') && (
//                     <p style={{ color: 'red', margin: '5px 0' }}>{error}</p>
//                 )}
//                 <input
//                     type="password"
//                     placeholder="Password"
//                     value={password}
//                     onChange={(e) => setPassword(e.target.value)}
//                     style={{ 
//                         margin: '10px 0', 
//                         padding: '10px', 
//                         fontSize: '16px',
//                         border: '1px solid #ccc',
//                         transition: 'border-color 0.3s'
//                     }}
//                     onFocus={(e) => e.target.style.borderColor = '#007bff'}
//                     onBlur={(e) => e.target.style.borderColor = '#ccc'}
//                 />
//                 <button type="submit" style={{ padding: '10px', fontSize: '16px' }}>Sign In</button>
//                 {error && <p style={{ color: 'red' }}>{error}</p>}
//             </form>
//             <button onClick={handleGoogleSignIn} style={{ margin: '10px 0', padding: '10px', fontSize: '16px' }}>Sign In with Google</button>
//         </div>
//     );
// }

// export default SignIn;

/// this is 
// import React, { useState } from 'react';
// import axios from 'axios';
// import { useNavigate } from 'react-router-dom';

// function SignIn() {
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
//                     navigate('/courses');  // Redirect to the courses page after signing in
//                 } else {
//                     setError(response.data.message);
//                 }
//             })
//             .catch(error => {
//                 if (error.response && error.response.data.email) {
//                     alert('Email id already exists');
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
//                     setError('Email is already exits');
                    
//                 }
//             });
//     };

//     const handleGoogleSignIn = () => {
//         window.location.href = 'http://localhost:5000/api/auth/google';
//     };

//     return (
//         <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
//             <h2>Sign In</h2>
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
//                 <button type="submit" style={{ padding: '10px', fontSize: '16px' }}>Sign In</button>
//             </form>
//             <button onClick={handleGoogleSignIn} style={{ margin: '10px 0', padding: '10px', fontSize: '16px' }}>Sign In with Google</button>
//         </div>
//     );
// }

// export default SignIn;


// import React, { useState } from 'react';
// import axios from 'axios';
// import { useNavigate } from 'react-router-dom';
// import GoogleSignInButton from './GoogleSignInButton';

// function SignIn() {
//     const [email, setEmail] = useState('');
//     const [password, setPassword] = useState('');
//     const [error, setError] = useState('');
//     const navigate = useNavigate();

//     const handleSubmit = (event) => {
//         event.preventDefault();

//         axios.post('http://localhost:5000/api/signin', { email, password })
//             .then(response => {
//                 if (response.data.success) {
//                     localStorage.setItem('token', response.data.token);
//                     navigate('/courses');  // Redirect to the courses page after signing in
//                 } else {
//                     setError(response.data.message);
//                 }
//             })
//             .catch(error => {
//                 if (error.response && error.response.data.password) {
//                     setError('Password incorrect');
//                 } else {
//                     console.error('There was an error logging in!', error);
//                 }
//             });
//     };

//     const handleGoogleSignIn = () => {
//         window.location.href = 'http://localhost:5000/api/auth/google';
//     };

//     return (
//         <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
//             <h2>Sign In</h2>
//             <form onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column', width: '300px' }}>
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
//                 <button type="submit" style={{ padding: '10px', fontSize: '16px' }}>Sign In</button>
//             </form>
//             <div><GoogleSignInButton/></div>

//             <div>Don't have an account? <a onClick={() => navigate('/signup')} style={{ cursor: 'pointer', color: 'blue' }}>Sign Up</a></div>
//         </div>
//     );
// }

// export default SignIn;


import React, { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import GoogleSignInButton from './GoogleSignInButton';

function SignIn() {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState('');
    const navigate = useNavigate();

    const handleSubmit = (event) => {
        event.preventDefault();

        axios.post('http://localhost:5000/api/signin', { email, password })
            .then(response => {
                if (response.data.success) {
                    localStorage.setItem('token', response.data.token);
                    navigate('/courses');  // Redirect to the courses page after signing in
                } else {
                    setError(response.data.message);
                }
            })
            .catch(error => {
                if (error.response && error.response.data.password) {
                    setError('Password incorrect');
                } else {
                    console.error('There was an error logging in!', error);
                }
            });
    };

    const handleGoogleSignIn = () => {
        window.location.href = 'http://localhost:5000/api/auth/google';
    };

    return (
        <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', padding: '20px' }}>
            <h2 style={{ marginBottom: '20px' }}>Sign In</h2>
            <form onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column', width: '300px' }}>
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
                <button type="submit" style={{ padding: '10px', fontSize: '16px', backgroundColor: '#007bff', color: 'white', border: 'none', borderRadius: '4px' }}>Sign In</button>
            </form>
            <div style={{ marginTop: '20px' }}>
                <GoogleSignInButton />
            </div>
            <div style={{ marginTop: '10px' }}>
                Don't have an account? <a onClick={() => navigate('/signup')} style={{ cursor: 'pointer', color: 'blue' }}>Sign Up</a>
            </div>
        </div>
    );
}

export default SignIn;


