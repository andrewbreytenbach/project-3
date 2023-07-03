import React, { useState } from 'react';

const ListForm = () => {
  // State variables to store the list title and description
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');

  // Function to handle creating a list
  const handleCreateList = () => {
    // Perform logic to create a list (e.g., API request or state management)
    // Here, we are simply logging the values for demonstration purposes
    console.log('List Title:', title);
    console.log('List Description:', description);
  };

  return (
    <div>
      <h2>List Form</h2>
      <div>
        <label htmlFor="title">Title:</label>
        <input
          type="text"
          id="title"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
        />
      </div>
      <div>
        <label htmlFor="description">Description:</label>
        <textarea
          id="description"
          value={description}
          onChange={(e) => setDescription(e.target.value)}
        ></textarea>
      </div>
      <div>
        <button onClick={handleCreateList}>Create List</button>
      </div>
    </div>
  );
};

export default ListForm;
