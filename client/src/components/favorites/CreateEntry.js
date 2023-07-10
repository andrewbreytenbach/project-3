import React, { useState } from 'react';
import { useMutation } from '@apollo/client';
import { CREATE_ENTRY } from '../../utils/mutations';

const EntryForm = ({ listId, refetchLists }) => {
  const [entryText, setEntryText] = useState('');
  const [entryTitle, setEntryTitle] = useState('');
  const [entryArtist, setEntryArtist] = useState('');
  const [entryRating, setEntryRating] = useState(0);
  const [createEntry] = useMutation(CREATE_ENTRY);

  const handleChange = (event) => {
    const { name, value } = event.target;
    switch (name) {
      case 'title':
        setEntryTitle(value);
        break;
      case 'artist':
        setEntryArtist(value);
        break;
      case 'text':
        setEntryText(value);
        break;
      case 'rating':
        setEntryRating(Number(value));
        break;
      default:
        break;
    }
  };

  const handleFormSubmit = async (event) => {
    event.preventDefault();

    try {
      await createEntry({
        variables: {
          list_id: listId,
          title: entryTitle,
          artist: entryArtist,
          body: entryText,
          rating: entryRating,
        },
      });

      setEntryText('');
      setEntryTitle('');
      setEntryArtist('');
      setEntryRating(0);
      refetchLists(); // Refetch the lists to update the UI after creating a new entry
    } catch (error) {
      console.error('Error creating entry:', error);
    }
  };

  return (
    <div>
      <h2>Create New Entry</h2>
      <form onSubmit={handleFormSubmit}>
        <input
          type="text"
          name="title"
          placeholder="Title"
          value={entryTitle}
          onChange={handleChange}
        />
        <input
          type="text"
          name="artist"
          placeholder="Artist"
          value={entryArtist}
          onChange={handleChange}
        />
        <textarea
          name="text"
          placeholder="Enter your entry text"
          value={entryText}
          onChange={handleChange}
        ></textarea>
        <input
          type="number"
          name="rating"
          placeholder="Rating"
          value={entryRating}
          onChange={handleChange}
        />
        <button type="submit">Create Entry</button>
      </form>
    </div>
  );
};

export default EntryForm;
