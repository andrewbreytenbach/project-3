import React, { useState } from 'react';
import { useMutation } from '@apollo/client';
import { CREATE_ENTRY } from '../../utils/mutations';
import { Link } from 'react-router-dom';
import Auth from '../../utils/auth';

const CreateEntry = ({ listId, refetchEntries }) => {
  
  const [formState, setFormState] = useState({
    title: '',
    artist: '',
    note: '',
    rating: 0,
  });

  const [createEntry] = useMutation(CREATE_ENTRY);

  const handleChange = (event) => {
    const { name, value } = event.target;
    const parsedValue = name === 'rating' ? parseInt(value) : value;

    setFormState((prevState) => ({
      ...prevState,
      [name]: parsedValue,
    }));
  };

  const handleFormSubmit = async (event) => {
    event.preventDefault();

    try {
      await createEntry({
        variables: { entryData: formState },
      });

      setFormState({
        title: '',
        artist: '',
        note: '',
        rating: 0,
      });

      if (typeof refetchEntries === 'function') {
        refetchEntries(); // Check if refetchEntries is a function and call it
      }

      // Redirect to the Favorites component after the mutation is successful
      window.location.href = '/favorites';
    } catch (error) {
      console.error('Error creating entry:', error);
    }
  };

  if (!Auth.loggedIn()) {
    return (
      <p>
        You need to be logged in to create a new entry. Please{' '}
        <Link to="/login">login</Link> or <Link to="/signup">signup.</Link>
      </p>
    );
  }

  return (
    <div>
      <h2>Create New Entry</h2>
      <form onSubmit={handleFormSubmit}>
        <input
          name='title'
          type='text'
          placeholder='Enter entry title'
          value={formState.title}
          onChange={handleChange}
        />
        <input
          name='artist'
          type='text'
          placeholder='Enter artist name'
          value={formState.artist}
          onChange={handleChange}
        />
        <textarea
          name='note'
          placeholder='Enter note'
          value={formState.note}
          onChange={handleChange}
        ></textarea>
        <input
          name='rating'
          type='number'
          placeholder='Enter rating'
          value={formState.rating}
          onChange={handleChange}
        />
        <button type='submit'>Create Entry</button>
      </form>
    </div>
  );
};

export default CreateEntry;
