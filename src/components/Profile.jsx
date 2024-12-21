import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

const Profile = () => {
  const [userName, setUserName] = useState('');
  const [profileImage, setProfileImage] = useState(null);
  const navigate = useNavigate();

  useEffect(() => {
    const storedUsername = localStorage.getItem('username');
    if (!storedUsername) {
      navigate('/login');
    } else {
      setUserName(storedUsername);
    }
  }, [navigate]);

  const handleImageUpload = (e) => {
    const file = e.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        setProfileImage(reader.result);
      };
      reader.readAsDataURL(file);
    }
  };

  const handleLogout = () => {
    localStorage.removeItem('userLoggedIn');
    localStorage.removeItem('username');
    navigate('/login');
  };

  return (
    <div className="profile-container">
      <h1>Welcome, {userName}!</h1>

      <div className="profile-image-container">
        {profileImage ? (
          <img src={profileImage} alt="Profile" className="profile-image" />
        ) : (
          <p>No profile image uploaded</p>
        )}
      </div>

      <input 
        type="file" 
        onChange={handleImageUpload} 
        accept="image/*" 
      />
      
      <button onClick={handleLogout}>Logout</button>
    </div>
  );
};

export default Profile;

//