// DeleteList.js is a page that allows users to delete a list.
import React, { useState } from 'react';
import { useMutation } from '@apollo/client';
import { DELETE_LIST } from '../utils/mutations';

const DeleteList = ({ listId }) => {
  const [successMessage, setSuccessMessage] = useState('');
  const [deleteList] = useMutation(DELETE_LIST);

  const handleDeleteList = async () => {
    try {
      await deleteList({
        variables: {
          list_id: listId,
        },
      });

      setSuccessMessage('List deleted successfully');
    } catch (error) {
      console.error('Error deleting list:', error);
    }
  };

  return (
    <div>
      <h2>Delete List</h2>
      {successMessage && <p>{successMessage}</p>}
      <button type="button" onClick={handleDeleteList}>
        Delete List
      </button>
    </div>
  );
};

export default DeleteList;
