// Favorites.js is a page that displays a user's favorite lists and entries.
import React, { useState, useEffect } from 'react';

const Favorites = () => {
  const [lists, setLists] = useState([]);
  const [entries, setEntries] = useState([]);

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

    const fetchEntries = async () => {
      try {
        const response = await fetch('/api/entries'); // Replace with your API endpoint URL
        const data = await response.json();
        setEntries(data);
      } catch (error) {
        console.error('Error fetching entries:', error);
      }
    };

    fetchLists();
    fetchEntries();
  }, []); // Empty dependency array to fetch data only once when the component mounts


  return (
    <div>
      <h2>Favorites</h2>
      <h3>Lists</h3>
      {lists.map((list) => (
        <div key={list.id}>
          <h4>{list.title}</h4>
          <p>{list.description}</p>
        </div>
      ))}
      <h3>Entries</h3>
      {entries.map((entry) => (
        <div key={entry.id}>
          <h4>{entry.title}</h4>
          <p>Notes: {entry.notes}</p>
          <p>Rating: {entry.rating}</p>
        </div>
      ))}
    </div>
  );
};

export default Favorites;
