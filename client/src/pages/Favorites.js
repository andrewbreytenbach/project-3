import React from 'react';
import { useQuery } from '@apollo/client';
import { GET_ALL_ENTRIES } from '../utils/queries';
import { useNavigate, Link } from 'react-router-dom';
import Auth from '../utils/auth';

const Entries = () => {
  const navigate = useNavigate();
  
  // Query to fetch all entries
  const { loading, error, data } = useQuery(GET_ALL_ENTRIES);

  if (loading) {
    return <div>Loading...</div>;
  }

  if (error) {
    console.error('Error fetching entries:', error);
    return <div>Error fetching entries</div>;
  }

  const { allEntries } = data;

  const handleUpdateEntry = (entryId) => {
    // Handle update entry logic
    navigate(`/entries/${entryId}/update`);
    console.log(`Update entry with ID: ${entryId}`);
  };

  const handleDeleteEntry = (entryId) => {
    // Handle delete entry logic
    navigate(`/entries/${entryId}/delete`);
    console.log(`Delete entry with ID: ${entryId}`);
  };

  if (!Auth.loggedIn()) {
    return (
      <p>
        You need to be logged in to view the entries. Please{' '}
        <Link to="/login">login</Link> or <Link to="/signup">signup.</Link>
      </p>
    );
  }

  return (
    <div>
      <h2>All Entries</h2>
      {allEntries.length ? (
        <ul>
          {allEntries.map((entry) => (
            <li key={entry._id}>
              <h3>{entry.title}</h3>
              <p>Artist: {entry.artist}</p>
              <p>Note: {entry.note}</p>
              <p>Rating: {entry.rating}</p>
              <button onClick={() => handleUpdateEntry(entry._id)}>
                Update
              </button>
              <button onClick={() => handleDeleteEntry(entry._id)}>
                Delete
              </button>
            </li>
          ))}
        </ul>
      ) : (
        <p>No entries found.</p>
      )}
    </div>
  );
};

export default Entries;
