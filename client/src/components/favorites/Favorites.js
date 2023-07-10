import React from 'react';
import { useQuery } from '@apollo/client';
import { GET_LISTS } from '../../utils/queries';
import CreateList from './CreateList';
import UpdateList from './UpdateList';
import CreateEntry from './CreateEntry';
import UpdateEntry from './UpdateEntry';
import DeleteList from './DeleteList';
import DeleteEntry from './DeleteEntry';

const Favorites = () => {
  const { loading, data, refetch } = useQuery(GET_LISTS);
  console.log('listdata ', data);

  if (loading) {
    return <div>Loading...</div>;
  }

  const { lists } = data || {};

  return (
    <div>
      <h1>Favorites</h1>

      <CreateList refetchLists={refetch} />

      {lists && lists.length === 0 ? (
        <div>No lists found. Create a new list.</div>
      ) : (
        <div>
          {lists &&
            lists.map((list) => (
              <div key={list._id}>
                <h2>{list.title}</h2>
                <UpdateList
                  listId={list._id}
                  currentTitle={list.title}
                  refetchLists={refetch}
                />
                <DeleteList listId={list._id} refetchLists={refetch} />

                {list.entries.map((entry) => (
                  <div key={entry._id}>
                    <h3>{entry.title}</h3>
                    <p>{entry.body}</p>
                    <UpdateEntry
                      entryId={entry._id}
                      currentTitle={entry.title}
                      currentBody={entry.body}
                      refetchLists={refetch}
                    />
                    <DeleteEntry
                      entryId={entry._id}
                      refetchLists={refetch}
                    />
                  </div>
                ))}

                <CreateEntry listId={list._id} refetchLists={refetch} />
              </div>
            ))}
        </div>
      )}
    </div>
  );
};

export default Favorites;
