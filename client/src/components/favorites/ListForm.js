import React, { useState } from 'react';
import { useMutation } from '@apollo/client';
import { CREATE_LIST } from '../../utils/mutations';

const ListForm = ({ refetchLists }) => {
  const [listTitle, setListTitle] = useState('');
  const [createList] = useMutation(CREATE_LIST);

  const handleChange = (event) => {
    setListTitle(event.target.value);
  };

  const handleFormSubmit = async (event) => {
    event.preventDefault();

    try {
      await createList({
        variables: { title: listTitle },
      });

      setListTitle('');
      refetchLists(); // Refetch the lists to update the UI after creating a new list
    } catch (error) {
      console.error('Error creating list:', error);
    }
  };

  return (
    <div>
      <h2>Create New List</h2>
      <form onSubmit={handleFormSubmit}>
        <input
          type="text"
          placeholder="Enter list title"
          value={listTitle}
          onChange={handleChange}
        />
        <button type="submit">Create List</button>
      </form>
    </div>
  );
};

export default ListForm;
