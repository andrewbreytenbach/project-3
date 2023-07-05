import React, { useState, useEffect } from 'react';

const ListForm = () => {
  const [title, setTitle] = useState('');
  const [about, setAbout] = useState('');
  const [lists, setLists] = useState([]);

  useEffect(() => {
    const fetchLists = async () => {
      try {
        const response = await fetch('/api/lists'); // Replace with your API endpoint URL
        const data = await response.json();
        setLists(data);
      } catch (error) {
        console.error('Error fetching lists:', error);
      }
    };

    fetchLists();
  }, []); // Empty dependency array to fetch data only once when the component mounts

  const handleCreateList = () => {
    // Perform logic to create a list (e.g., API request or state management)
    // Here, we are simply logging the values for demonstration purposes
    console.log('Title:', title);
    console.log('About:', about);
  };

  return (
    <div>
      <h2>List Form</h2>
      <form>
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
          <label htmlFor="about">About:</label>
          <textarea
            id="about"
            value={about}
            onChange={(e) => setAbout(e.target.value)}
          ></textarea>
        </div>
        <div>
          <label htmlFor="list">Select List:</label>
          <select id="list">
            {lists.map((list) => (
              <option key={list.id} value={list.id}>
                {list.title}
              </option>
            ))}
          </select>
        </div>
        <button type="button" onClick={handleCreateList}>
          Create List
        </button>
      </form>
    </div>
  );
};

export default ListForm;
