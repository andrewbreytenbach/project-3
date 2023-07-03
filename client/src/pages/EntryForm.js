import React, { useState } from 'react';

const EntryForm = () => {
  const [title, setTitle] = useState('');
  const [notes, setNotes] = useState('');
  const [rating, setRating] = useState('');
  const [isAddedToFavorites, setIsAddedToFavorites] = useState(false);

  const handleAddToFavorites = () => {
    // Perform logic to add the entry to favorites (e.g., API request or state management)
    // Here, we are simply logging the values for demonstration purposes
    console.log('Entry Title:', title);
    console.log('Notes:', notes);
    console.log('Rating:', rating);
    setIsAddedToFavorites(true);
  };

  return (
    <div>
      <h2>New Entry</h2>
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
        <label htmlFor="notes">Notes:</label>
        <textarea
          id="notes"
          value={notes}
          onChange={(e) => setNotes(e.target.value)}
        ></textarea>
      </div>
      <div>
        <label htmlFor="rating">Rating:</label>
        <input
          type="number"
          id="rating"
          min="1"
          max="5"
          value={rating}
          onChange={(e) => setRating(e.target.value)}
        />
      </div>
      <div>
        <button onClick={handleAddToFavorites}>
          {isAddedToFavorites ? 'Added to Favorites' : 'Add to Favorites'}
        </button>
      </div>
    </div>
  );
};

export default EntryForm;
