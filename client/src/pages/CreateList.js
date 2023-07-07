import React, { useState, useEffect } from 'react';
import { useMutation } from '@apollo/client';
import { CREATE_LIST } from '../utils/mutations';

const ListForm = () => {
  const [title, setTitle] = useState('');
  const [about, setAbout] = useState('');
  const [lists, setLists] = useState([]);

  const [createList] = useMutation(CREATE_LIST);

  useEffect(() => {
    const fetchLists = async () => {
      try {
        const response = await fetch('/api/lists'); // Replace with your API endpoint URL
        const data = await response.json();
        setLists(data);
      } catch (error) {
        console.error('Error fetching lists:', error);
      }
    };

    fetchLists();
  }, []);

  const handleCreateList = async () => {
    try {
      // Create a new list
      const { data } = await createList({
        variables: {
          title,
        },
      });

      console.log('List created:', data);
      // Reset form values
      setTitle('');
      setAbout('');
    } catch (error) {
      console.error('Error creating list:', error);
    }
  };

  return (
    <div>
      <h2>List Form</h2>
      <form>
        <div>
          <label htmlFor="title">Title:</label>
          <input
            type="text"
            id="title"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
          />
        </div>
        <div>
          <label htmlFor="about">About:</label>
          <textarea
            id="about"
            value={about}
            onChange={(e) => setAbout(e.target.value)}
          ></textarea>
        </div>
        <div>
          <label htmlFor="list">Select List:</label>
          <select
            id="list"
            onChange={(e) => setLists(e.target.value)}
          >
            {lists.map((list) => (
              <option key={list.list_id} value={list.list_id}>
                {list.title}
              </option>
            ))}
          </select>
        </div>
        <button type="button" onClick={handleCreateList}>
          Create List
        </button>
      </form>
    </div>
  );
};

export default ListForm;
