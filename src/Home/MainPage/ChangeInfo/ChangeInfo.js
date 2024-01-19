import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { getUserById, updateUserById } from '../../../service/getUserById';
import './ChangeInfo.css'

function ChangeInfo({ user }) {
  const [userData, setUserData] = useState(null);
  const [newUsername, setNewUsername] = useState('');
  const [newEmail, setNewEmail] = useState('');
  const [selectedGenre, setSelectedGenre] = useState('');
  const genres = ['Action', 'Sport', 'RPG', 'FPS', 'Puzzle']; // Add your genres

  useEffect(() => {
    const getUser = async () => {
      const data = await getUserById('http://127.0.0.1:8000/api/user/show', user.id);
      setUserData(data.data[0]);
    };
    getUser();
  }, [user]);

  const handleUsernameChange = (e) => {
    setNewUsername(e.target.value);
  };

  const handleEmailChange = (e) => {
    setNewEmail(e.target.value);
  };

  const handleGenreChange = (e) => {
    setSelectedGenre(e.target.value);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const updatedUserData = {
      username: newUsername || userData.Username,
      email: newEmail || userData.Email,
    };

    try {
      console.log(updatedUserData);
      await updateUserById('http://127.0.0.1:8000/api/user/update', user.id, updatedUserData);
      setNewUsername('');
      setNewEmail('');
      toast.success('User information updated successfully.');
    } catch (error) {
      console.error('Error updating user data:', error);
      toast.error('Error updating user information.');
    }
  };

  const handleGameUpload = async (e) => {
    e.preventDefault();

    const formData = new FormData(e.target);
    formData.append('user_id', user.id);
    formData.append('genre', selectedGenre);

    try {
      const response = await axios.post(`http://127.0.0.1:8000/api/game/add/${user.id}`, formData, {
        headers: {
          'Content-Type': 'multipart/form-data',
        },
      });

      console.log('Game uploaded successfully:', response.data);
      toast.success('Game uploaded successfully.');
    } catch (error) {
      console.error('Error uploading game:', error);
      toast.error('Error uploading game.');
    }
  };

  return (
    <div className="ChangeInfo">
      {userData && (
        <>
          <form onSubmit={handleSubmit}>
            {/* Existing user info update form */}
            <h1>Change your information</h1>
            <h3>Username</h3>
            <input
              type="text"
              placeholder={userData.Username}
              value={newUsername}
              onChange={handleUsernameChange}
            />
            <h3>Email</h3>
            <input
              type="text"
              placeholder={userData.Email}
              value={newEmail}
              onChange={handleEmailChange}
            />
            <br />
            <input type="submit" value="Submit" />
          </form>

          {user.role === 'game_publisher' && (
            <form onSubmit={handleGameUpload}>
              {/* Game upload form */}
              <h1>Upload a new game</h1>
              <label htmlFor="name">Name:</label>
              <input type="text" name="name" required />

              <label htmlFor="genre">Genre:</label>
              <select name="genre" onChange={handleGenreChange} value={selectedGenre} required>
                <option value="" disabled>Select a genre</option>
                {genres.map((genre) => (
                  <option key={genre} value={genre}>
                    {genre}
                  </option>
                ))}
              </select>

              <label htmlFor="price">Price:</label>
              <input type="number" name="price" required />

              <label htmlFor="game_folder">Game Folder (Drive Link):</label>
              <input type="text" name="game_folder" required />

              <label htmlFor="image">Image:</label>
              <input type="file" name="image" accept="image/*" required />

              <br />
              <input type="submit" value="Upload Game" />
            </form>
          )}
        </>
      )}
      <ToastContainer />
    </div>
  );
}

export default ChangeInfo;
