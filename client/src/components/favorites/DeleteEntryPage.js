import React from 'react';
import { useParams } from 'react-router-dom';
import DeleteEntry from './DeleteEntry';

const DeleteEntryPage = () => {
  const { entryId } = useParams();

  const refetchList = () => {
    // Implement the logic to refetch the entry list
    console.log('Refetching entry list...');
  };

  return (
    <div>
      <h2>Delete Entry</h2>
      <DeleteEntry entryId={entryId} refetchList={refetchList} />
    </div>
  );
};

export default DeleteEntryPage;
