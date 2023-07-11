import React, { useState } from 'react';
import { useMutation } from '@apollo/client';
import { UPDATE_ENTRY } from '../../utils/mutations';



const UpdateEntry = ({ entryId, refetchList }) => {
  const [formState, setFormState] = useState({
    title: '',
    artist: '',
    note: '',
    rating: 0,
  });

  const [updateEntry] = useMutation(UPDATE_ENTRY);

  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormState({
      ...formState,
      [name]: value,
    });
  };

  const handleFormSubmit = async (event) => {
    event.preventDefault();

    try {
      await updateEntry({
        variables: {
          entryId, // Pass the entryId variable to the mutation
          entryData: {
            title: formState.title,
            artist: formState.artist,
            note: formState.note,
            rating: parseFloat(formState.rating),
          },
        },
      });
  
      // Redirect to the Favorites component after the mutation is successful
     window.location.href = '/favorites';
    } catch (error) {
      console.error('Error updating entry:', error);
    }
  };

  return (
    <div>
      <h2>Update Entry</h2>
      <form onSubmit={handleFormSubmit}>
        <input
          type="text"
          name="title"
          placeholder="Title"
          value={formState.title}
          onChange={handleChange}
        />
        <input
          type="text"
          name="artist"
          placeholder="Artist"
          value={formState.artist}
          onChange={handleChange}
        />
        <input
          type="text"
          name="note"
          placeholder="Note"
          value={formState.note}
          onChange={handleChange}
        />
        <input
          type="number"
          name="rating"
          placeholder="Rating"
          value={formState.rating}
          onChange={handleChange}
        />
        <button type="submit">Update Entry</button>
      </form>
    </div>
  );
};

export default UpdateEntry;