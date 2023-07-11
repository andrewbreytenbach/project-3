const { gql } = require('apollo-server-express');

const typeDefs = gql`
  type User {
    _id: ID!
    username: String!
    email: String!
  }

  type Entry {
    _id: ID!
    title: String!
    artist: String!
    note: String!
    rating: Int
  }

  input EntryInput {
    title: String!
    artist: String!
    note: String!
    rating: Int!
  }

  type Auth {
    token: ID!
    user: User
  }

  type Query {
    me: User
    entry: String
    allEntries: [Entry]
  }

  type Mutation {
    login(email: String!, password: String!): Auth
    addUser(username: String!, email: String!, password: String!): Auth
    createEntry(entryData: EntryInput!): Entry
    updateEntry(entryId: ID!, entryData: EntryInput!): Entry
    deleteEntry(entryId: ID!): Entry
  }
`;

module.exports = typeDefs;