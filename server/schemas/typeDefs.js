const { gql } = require('apollo-server');

const typeDefs = gql`

  type User {
    _id: ID!
    username: String!
    email: String!
    created_at: String
    updated_at: String
  }

  type Entry {
    entry_id: ID!
    body: String!
    note: String
    rating: Int
  }

  type List {
    list_id: ID!
    title: String!
    user: User
    entries: [Entry]
  }

  type Auth {
    token: String!
    user: User!
  }

  type Query {
    me: User
    list: List
  }

  type Mutation {
    login(email: String!, password: String!): Auth
    addUser(username: String!, email: String!, password: String!): Auth
    addEntry(body: String!, note: String!, rating: Int!): Entry 
    updateEntry(body: String!, note: String!, rating: Int!): Entry
    deleteEntry(entry_id: ID!): Entry 
    createList(title: String!): List 
    deleteList(list_id: ID): List
  }

`;

module.exports = typeDefs;
