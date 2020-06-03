import { gql } from 'apollo-server-express';

// eslint-disable-next-line import/prefer-default-export
export const typeDefs = gql`
  type Query {
    characters (filter: FilterCharacter): Characters
    characterNamesSearch (filter: String) : Characters
    checkUser (email: String, password: String) : User 
  }

  type Mutation {
    createUser(name: String, email: String, password: String): String
  }

  type User {
    id: ID
    name: String
    email: String
    password: String
  }

  type Characters {
    results: [Character]
  }

  type Character {
    id: ID
    name: String
    status: String
    species: String
    type: String
    gender: String
    origin: Location
    location: Location
    image: String
    created: String
  }

  type Location {
    name: String
  }


  input FilterCharacter {
    name: String
    species: String
    gender: String
  }`;

// module.exports = typeDefs;
