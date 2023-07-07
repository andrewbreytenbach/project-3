import React, { useState, useEffect } from 'react';
import { useMutation } from '@apollo/client';
import { UPDATE_ENTRY } from '../utils/mutations';

const UpdateEntry = ({ entryId }) => {
  const [body, setBody] = useState('');
  const [note, setNote] = useState('');
  const [rating, setRating] = useState(0);

  const [updateEntry] = useMutation(UPDATE_ENTRY);

  useEffect(() => {
    // Fetch entry details using the appropriate API or backend endpoint
    const fetchEntry = async () => {
      try {
        const response = await fetch(`/api/entries/${entryId}`); // Replace with your API endpoint URL
        const data = await response.json();
        setBody(data.body);
        setNote(data.note);
        setRating(data.rating);
      } catch (error) {
        console.error('Error fetching entry:', error);
      }
    };

    fetchEntry();
  }, [entryId]);

  const handleUpdateEntry = async () => {
    try {
      await updateEntry({
        variables: {
          entryId,
          body,
          note,
          rating,
        },
      });

      console.log('Entry updated successfully');
    } catch (error) {
      console.error('Error updating entry:', error);
    }
  };

  return (
    <div>
      <h2>Update Entry</h2>
      <form>
        <div>
          <label htmlFor="body">Body:</label>
          <textarea
            id="body"
            value={body}
            onChange={(e) => setBody(e.target.value)}
          ></textarea>
        </div>
        <div>
          <label htmlFor="note">Note:</label>
          <input
            type="text"
            id="note"
            value={note}
            onChange={(e) => setNote(e.target.value)}
          />
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
        <button type="button" onClick={handleUpdateEntry}>
          Update Entry
        </button>
      </form>
    </div>
  );
};

export default UpdateEntry;
