import React, { useState } from 'react';
import { useMutation } from '@apollo/client';
import { CREATE_LIST } from '../../utils/mutations';


const ListForm = ({ refetchLists }) => {
  // const [listTitle, setListTitle] = useState('');
  // const [listDescription, setListDescription] = useState('');
  const [formState, setFormState] = useState({
    title: '',
    description: '',
  });
  const [createList] = useMutation(CREATE_LIST);


  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormState({
      ...formState,
      [name]: value,
    });
  };

  const handleFormSubmit = async (event) => {
    event.preventDefault();

    try {
      await createList({
        variables: { title: formState.title, description: formState.description },
      });

      setFormState({
        title: '',
        description: '',
        })
;
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
          name='title'
          type="text"
          placeholder="Enter list title"
          value={formState.title}
          onChange={handleChange}
        />
        <input
          name='description'
          type="text"
          placeholder="Enter list description"
          value={formState.description}
          onChange={handleChange}
        />
        <button type="submit">Create List</button>
      </form>
    </div>
  );
};

export default ListForm;
