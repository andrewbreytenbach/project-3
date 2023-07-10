import React from 'react';
import { useQuery, useMutation } from '@apollo/client';
import { DELETE_LIST, CREATE_ENTRY, DELETE_ENTRY } from '../../utils/mutations';
import { GET_ME , GET_LISTS } from '../../utils/queries';

const Favorites = () => {
  const { loading, data } = useQuery(GET_LISTS);
  const { data: userData } = useQuery(GET_ME);
  const [deleteList] = useMutation(DELETE_LIST);
  const [createEntry] = useMutation(CREATE_ENTRY);
  const [deleteEntry] = useMutation(DELETE_ENTRY);

  const handleDeleteList = async (listId) => {
    try {
      await deleteList({
        variables: { list_id: listId },
      });

      // Optionally, you can refetch the lists after deletion to update the UI
      // refetch();
    } catch (error) {
      console.error('Error deleting list:', error);
    }
  };

  const handleCreateEntry = async (listId) => {
    try {
      await createEntry({
        variables: { list_id: listId, body: 'New Entry' },
      });

      // Optionally, you can refetch the lists after creating a new entry to update the UI
      // refetch();
    } catch (error) {
      console.error('Error creating entry:', error);
    }
  };

  const handleDeleteEntry = async (entryId) => {
    try {
      await deleteEntry({
        variables: { entry_id: entryId },
      });

      // Optionally, you can refetch the lists after deleting an entry to update the UI
      // refetch();
    } catch (error) {
      console.error('Error deleting entry:', error);
    }
  };

  if (loading) {
    return <div>Loading...</div>;
  }

  const { list } = data || {};
  const { me } = userData || {}; // Add a default value for the 'me' variable

  return (
    <div>
      <h1>Favorites</h1>

      {list && list.length === 0 ? (
        <div>No lists found. Create a new list.</div>
      ) : (
        <div>
          {list && list.map((listItem) => (
            <div key={listItem.list_id}>
              <h2>{listItem.title}</h2>
              <button onClick={() => handleDeleteList(listItem.list_id)}>Delete List</button>
              <button onClick={() => handleCreateEntry(listItem.list_id)}>Create Entry</button>
              <ul>
                {listItem.entries.map((entry) => (
                  <li key={entry.entry_id}>
                    {entry.body}
                    <button onClick={() => handleDeleteEntry(entry.entry_id)}>Delete Entry</button>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default Favorites;
