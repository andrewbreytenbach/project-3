import React from 'react';
import { useParams } from 'react-router-dom';
import UpdateEntry from './UpdateEntry';

const EntryPage = () => {
  const { entryId } = useParams();

  return (
    <div>
      <h2>Entry Page</h2>
      <UpdateEntry entryId={entryId} />
    </div>
  );
};

export default EntryPage;
