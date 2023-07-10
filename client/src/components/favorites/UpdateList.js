import React, { useState } from 'react';
import { useMutation } from '@apollo/client';
import { UPDATE_LIST } from '../../utils/mutations';

const UpdateListForm = ({ listId, currentTitle, refetchLists }) => {
  const [listTitle, setListTitle] = useState(currentTitle);
  const [updateList] = useMutation(UPDATE_LIST);

  const handleChange = (event) => {
    setListTitle(event.target.value);
  };

  const handleFormSubmit = async (event) => {
    event.preventDefault();

    try {
      await updateList({
        variables: { list_id: listId, title: listTitle },
      });

      refetchLists(); // Refetch the lists to update the UI after updating the list
    } catch (error) {
      console.error('Error updating list:', error);
    }
  };

  return (
    <div>
      <h2>Update List</h2>
      <form onSubmit={handleFormSubmit}>
        <input
          type="text"
          placeholder="Enter updated list title"
          value={listTitle}
          onChange={handleChange}
        />
        <button type="submit">Update List</button>
      </form>
    </div>
  );
};

export default UpdateListForm;
