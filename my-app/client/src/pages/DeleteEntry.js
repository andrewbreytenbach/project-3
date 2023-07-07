// DeleteEntry.js is a page that allows users to delete an entry in their diary.
import React, { useState } from 'react';
import { useMutation } from '@apollo/client';
import { DELETE_ENTRY } from '../utils/mutations';

const DeleteEntry = ({ entryId }) => {
  const [successMessage, setSuccessMessage] = useState('');
  const [deleteEntry] = useMutation(DELETE_ENTRY);

  const handleDeleteEntry = async () => {
    try {
      await deleteEntry({
        variables: {
          entry_id: entryId,
        },
      });

      setSuccessMessage('Entry deleted successfully');
    } catch (error) {
      console.error('Error deleting entry:', error);
    }
  };

  return (
    <div>
      <h2>Delete Entry</h2>
      {successMessage && <p>{successMessage}</p>}
      <button type="button" onClick={handleDeleteEntry}>
        Delete Entry
      </button>
    </div>
  );
};

export default DeleteEntry;
