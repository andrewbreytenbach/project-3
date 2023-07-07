import { gql } from '@apollo/client';

export const GET_ME = gql`
  query me {
    me {
      _id
      username
      email
      created_at
      updated_at
    }
  }
`;

export const GET_LIST = gql`
  query list {
    list {
      list_id
      title
      user {
        _id
        username
        email
      }
      entries {
        entry_id
        body
        note
        rating
      }
    }
  }
`;
