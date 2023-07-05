import React, { useState, useEffect } from 'react';

const EntryForm = () => {
  const [title, setTitle] = useState('');
  const [body, setBody] = useState('');
  const [rating, setRating] = useState(0);
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

  const handleAddToFavorites = () => {
    // Perform logic to add the entry to favorites (e.g., API request or state management)
    // Here, we are simply logging the values for demonstration purposes
    console.log('Title:', title);
    console.log('Body:', body);
    console.log('Rating:', rating);
  };

  return (
    <div>
      <h2>New Entry</h2>
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
          <label htmlFor="body">Body:</label>
          <textarea
            id="body"
            value={body}
            onChange={(e) => setBody(e.target.value)}
          ></textarea>
        </div>
        <div>
          <label htmlFor="rating">Rating:</label>
          <input
            type="number"
            id="rating"
            value={rating}
            onChange={(e) => setRating(Number(e.target.value))}
          />
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
        <button type="button" onClick={handleAddToFavorites}>
          Add to Favorites
        </button>
      </form>
    </div>
  );
};

export default EntryForm;
