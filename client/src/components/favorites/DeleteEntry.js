import React, { useState } from 'react';
import { useMutation } from '@apollo/client';
import { DELETE_ENTRY } from '../../utils/mutations';

const DeleteEntry = ({ entryId }) => {
  const [deleteEntry] = useMutation(DELETE_ENTRY);

  const handleDelete = async () => {
    try {
      await deleteEntry({
        variables: { entryId },
      });

      // Redirect to the Favorites component after the mutation is successful
      window.location.href = '/favorites';
    } catch (error) {
      console.error('Error deleting entry:', error);
    }
  };

  return (
    <div>
      <p>Are you sure you want to delete this entry?</p>
      <button onClick={handleDelete}>Delete Entry</button>
    </div>
  );
};

export default DeleteEntry;