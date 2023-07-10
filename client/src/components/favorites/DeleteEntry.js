import React from 'react';
import { useMutation } from '@apollo/client';
import { DELETE_ENTRY } from '../../utils/mutations';

const DeleteEntry = ({ entryId, refetchLists }) => {
  const [deleteEntry] = useMutation(DELETE_ENTRY);

  const handleDeleteEntry = async () => {
    try {
      await deleteEntry({
        variables: { entry_id: entryId },
      });

      refetchLists(); // Refetch the lists to update the UI after deleting the entry
    } catch (error) {
      console.error('Error deleting entry:', error);
    }
  };

  return (
    <div>
      <h2>Delete Entry</h2>
      <button onClick={handleDeleteEntry}>Delete Entry</button>
    </div>
  );
};

export default DeleteEntry;
