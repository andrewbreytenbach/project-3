import React, { useState } from 'react';
import { useMutation } from '@apollo/client';
import { UPDATE_ENTRY } from '../../utils/mutations';

const UpdateEntry = ({ entryId, currentTitle, currentBody, refetchLists }) => {
  const [entryTitle, setEntryTitle] = useState(currentTitle);
  const [entryBody, setEntryBody] = useState(currentBody);
  const [updateEntry] = useMutation(UPDATE_ENTRY);

  const handleTitleChange = (event) => {
    setEntryTitle(event.target.value);
  };

  const handleBodyChange = (event) => {
    setEntryBody(event.target.value);
  };

  const handleFormSubmit = async (event) => {
    event.preventDefault();

    try {
      await updateEntry({
        variables: { entry_id: entryId, title: entryTitle, body: entryBody },
      });

      refetchLists(); // Refetch the lists to update the UI after updating the entry
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
          placeholder="Enter updated entry title"
          value={entryTitle}
          onChange={handleTitleChange}
        />
        <textarea
          placeholder="Enter updated entry text"
          value={entryBody}
          onChange={handleBodyChange}
        ></textarea>
        <button type="submit">Update Entry</button>
      </form>
    </div>
  );
};

export default UpdateEntry;
