import React from 'react';

const Favorites = () => {
  // Mock data for demonstration purposes
  const lists = [
    { id: 1, title: 'Favorite Artists', description: 'My favorite artists' },
    { id: 2, title: 'Top Songs', description: 'My top songs' },
  ];

  const entries = [
    { id: 1, title: 'Favorite Song', notes: 'This is my favorite song', rating: 5 },
    { id: 2, title: 'Best Album', notes: 'The best album of all time', rating: 4 },
  ];

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
