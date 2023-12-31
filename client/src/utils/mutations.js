// mutations.js
import { gql } from '@apollo/client';

export const LOGIN_USER = gql`
  mutation Login($email: String!, $password: String!) {
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

export const CREATE_LIST = gql`
  mutation createList($title: String!, $description: String!, $username: String) {
    createList(title: $title, description: $description, username: $username) {
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

export const CREATE_ENTRY = gql`
  mutation createEntry($entryData: EntryInput!) {
    createEntry(entryData: $entryData) {
      _id
      title
      artist
      note
      rating
    }
  }
`;

export const UPDATE_ENTRY = gql`
  mutation updateEntry($entryId: ID!, $entryData: EntryInput!) {
    updateEntry(entryId: $entryId, entryData: $entryData) {
      _id
      title
      artist
      note
      rating
    }
  }
`;

export const DELETE_ENTRY = gql`
  mutation deleteEntry($entryId: ID!) {
    deleteEntry(entryId: $entryId) {
      _id
    }
  }
`;

export const UPDATE_LIST = gql`
  mutation updateList($listId: ID!, $title: String, $description: String) {
    updateList(listId: $listId, title: $title, description: $description) {
      _id
      title
      description
    }
  }
`;

export const DELETE_LIST = gql`
  mutation deleteList($listId: ID!) {
    deleteList(listId: $listId) {
      _id
    }
  }
`;

