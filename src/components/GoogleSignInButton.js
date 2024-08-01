import React from 'react';
import { GoogleOAuthProvider, GoogleLogin } from '@react-oauth/google';
import axios from 'axios';

const GoogleSignInButton = () => {
  const handleSuccess = async (response) => {
    const token = response.credential;

    try {
      const res = await axios.post('http://localhost:5000/auth/google', {
        idToken: token
      });
      localStorage.setItem('authToken', res.data.token);
      console.log('User signed in:', res.data);
      // Redirect or update UI as needed
    } catch (error) {
      console.error('Error signing in:', error);
    }
  };

  const handleError = (error) => {
    console.error('Sign-in error:', error);
  };

  return (
    <GoogleOAuthProvider clientId="481010805555-gv46ushl69kn65apomh5p6f11b3d69il.apps.googleusercontent.com">
     
       
        <GoogleLogin
          onSuccess={handleSuccess}
          onError={handleError}
          buttonText="Sign in with Google"
        />
      
    </GoogleOAuthProvider>
  );
};

export default GoogleSignInButton;
