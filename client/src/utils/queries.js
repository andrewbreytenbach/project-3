// queries.js
import { gql } from '@apollo/client';

export const GET_ME = gql`
  query getMe {
    me {
      _id
      username
      email
      list {
        _id
        title
        description
        username
        entries {
          _id
          title
          artist
          note
          rating
        }
      }
    }
  }
`;

export const GET_LISTS = gql`
  query getLists {
    allLists {
      _id
      title
      description
      username
      entries {
        _id
        title
        artist
        note
        rating
      }
    }
  }
`;

export const GET_ALL_ENTRIES = gql`
  query {
    allEntries {
      _id
      title
      artist
      note
      rating
    }
  }
`;

export const GET_ENTRY = gql`
  query getEntry($entryId: ID!) {
    entry(entryId: $entryId) {
      _id
      title
      artist
      note
      rating
    }
  }
`;
