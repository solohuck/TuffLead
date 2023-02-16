import React from 'react';
import { Link } from 'react-router-dom';

const ProfilePage = () => {
  return (
    <div>
      <h1>Profile Page</h1>
      <p>Welcome to your profile page!</p>
      <Link to="/">Go to Home Page</Link>
    </div>
  );
};

export default ProfilePage;