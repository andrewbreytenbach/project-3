import React from 'react';
import { useMutation } from '@apollo/client';
import { DELETE_LIST } from '../../utils/mutations';

const DeleteList = ({ listId, refetchLists }) => {
  const [deleteList] = useMutation(DELETE_LIST);

  const handleDeleteList = async () => {
    try {
      await deleteList({
        variables: { list_id: listId },
      });

      refetchLists(); // Refetch the lists to update the UI after deleting the list
    } catch (error) {
      console.error('Error deleting list:', error);
    }
  };

  return (
    <div>
      <h2>Delete List</h2>
      <button onClick={handleDeleteList}>Delete List</button>
    </div>
  );
};

export default DeleteList;
