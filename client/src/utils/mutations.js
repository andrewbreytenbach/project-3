import { gql } from '@apollo/client';

export const LOGIN_USER = gql`
  mutation login($email: String!, $password: String!) {
    login(email: $email, password: $password) {
      token
      user {
        _id
        username
        email
      }
    }
  }
`;

export const ADD_USER = gql`
  mutation addUser($username: String!, $email: String!, $password: String!) {
    addUser(username: $username, email: $email, password: $password) {
      token
      user {
        _id
        username
        email
      }
    }
  }
`;

export const CREATE_ENTRY = gql`
  mutation addEntry($body: String!, $note: String!, $rating: Int!) {
    CreateEntry(body: $body, note: $note, rating: $rating) {
      entry_id
      body
      note
      rating
    }
  }
`;

export const UPDATE_ENTRY = gql`
  mutation updateEntry($body: String!, $note: String!, $rating: Int!) {
    updateEntry(body: $body, note: $note, rating: $rating) {
      entry_id
      body
      note
      rating
    }
  }
`;

export const DELETE_ENTRY = gql`
  mutation deleteEntry($entry_id: ID!) {
    deleteEntry(entry_id: $entry_id) {
      entry_id
      body
      note
      rating
    }
  }
`;

export const CREATE_LIST = gql`
  mutation createList($title: String!) {
    createList(title: $title) {
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

export const UPDATE_LIST = gql`
  mutation updateList($title: String!) {
    updateList(title: $title) {
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

export const DELETE_LIST = gql`
  mutation deleteList($list_id: ID) {
    deleteList(list_id: $list_id) {
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
