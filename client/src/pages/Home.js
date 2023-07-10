import React from 'react';
import { useQuery } from '@apollo/client';
import { GET_LISTS } from '../utils/queries';

const Home = () => {
  const { loading, data } = useQuery(GET_LISTS);

  if (loading) {
    return <div>Loading...</div>;
  }

  const lists = data?.list || [];

  return (
    <div>
      <h2>Home</h2>
      {lists.length ? (
        <div>
          {lists.map((list) => (
            <div key={list.list_id}>
              <h3>{list.title}</h3>
              <ul>
                {list.entries.map((entry) => (
                  <li key={entry.entry_id}>{entry.body}</li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      ) : (
        <div>No lists found.</div>
      )}
    </div>
  );
};

export default Home;
