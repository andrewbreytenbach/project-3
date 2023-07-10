import React, { useState } from 'react';
import { useMutation } from '@apollo/client';
import { CREATE_ENTRY } from '../../utils/mutations';

const EntryForm = ({ listId, refetchLists }) => {
  const [entryText, setEntryText] = useState('');
  const [createEntry] = useMutation(CREATE_ENTRY);

  const handleChange = (event) => {
    setEntryText(event.target.value);
  };

  const handleFormSubmit = async (event) => {
    event.preventDefault();

    try {
      await createEntry({
        variables: { list_id: listId, body: entryText },
      });

      setEntryText('');
      refetchLists(); // Refetch the lists to update the UI after creating a new entry
    } catch (error) {
      console.error('Error creating entry:', error);
    }
  };

  return (
    <div>
      <h2>Create New Entry</h2>
      <form onSubmit={handleFormSubmit}>
        <textarea
          placeholder="Enter your entry text"
          value={entryText}
          onChange={handleChange}
        ></textarea>
        <button type="submit">Create Entry</button>
      </form>
    </div>
  );
};

export default EntryForm;
