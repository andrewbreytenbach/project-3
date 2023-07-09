const { gql } = require('apollo-server-express');

const typeDefs = gql`

  type User {
    _id: ID!
    username: String!
    email: String!
    list: [List]
  }

 type List {
    _id: ID!
    title: String!
    description: String!
    username: String
    entries: [Entry]
  }

  type Entry {
    _id: ID!
    title: String!
    artist: String!
    note: String
    rating: Int
  }

  input EntryInput {
    title: String!
    artist: String!
    note: String
    rating: Int
  }

  type Auth {
    token: ID!
    user: User
  }

  type Query {
    me: User
    allLists: [List]
  }

  type Mutation {
    login(email: String!, password: String!): Auth
    addUser(username: String!, email: String!, password: String!): Auth
    addEntry(list_id: ID!, entryInput: EntryInput): List 
    deleteEntry(list_id: ID!, entry_id: ID!): List 
    createList(title: String!, description: String!, username: String): User 
    deleteList(list_id: ID): User
  }

`;

module.exports = typeDefs;
