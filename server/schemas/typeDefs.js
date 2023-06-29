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
    list_id: List
    name: String,
    notes: String,
    created_at: String
    updated_at: String
  }

  type List {
    user_id: User
    created_at: String
    updated_at: String
    entries: [Entry]
  }

  type Auth {
    token: String!
    user: User!
  }

  type Query {
    me: User!
  }

  type Mutation {
    login(email: String!, password: String!): Auth!
    addUser(username: String!, email: String!, password: String!): Auth!
  }

`;

module.exports = typeDefs;
