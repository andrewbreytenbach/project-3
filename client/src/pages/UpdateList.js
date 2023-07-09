// UpdateList.js is a page that allows users to update a list.
import React, { useState, useEffect } from 'react';
import { useMutation } from '@apollo/client';
import { UPDATE_LIST } from '../utils/mutations';

const UpdateList = ({ listId }) => {
  const [title, setTitle] = useState('');
  const [about, setAbout] = useState('');

  const [updateList] = useMutation(UPDATE_LIST);

  useEffect(() => {
    // Fetch list details using the appropriate API or backend endpoint
    const fetchList = async () => {
      try {
        const response = await fetch(`/api/lists/${listId}`); // Replace with your API endpoint URL
        const data = await response.json();
        setTitle(data.title);
        setAbout(data.about);
      } catch (error) {
        console.error('Error fetching list:', error);
      }
    };

    fetchList();
  }, [listId]);

  const handleUpdateList = async () => {
    try {
      await updateList({
        variables: {
          list_id: listId,
          title,
          about,
        },
      });

      console.log('List updated successfully');
    } catch (error) {
      console.error('Error updating list:', error);
    }
  };

  return (
    <div>
      <h2>Update List</h2>
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
        <button type="button" onClick={handleUpdateList}>
          Update List
        </button>
      </form>
    </div>
  );
};

export default UpdateList;
