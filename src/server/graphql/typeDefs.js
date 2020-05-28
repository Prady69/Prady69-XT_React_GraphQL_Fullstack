import { gql } from 'apollo-server-express';

// eslint-disable-next-line import/prefer-default-export
export const typeDefs = gql`
  type Query {
    charactersAll: [CharacterType!]!
  }

  type CharacterType {
    name: String!
  }
`;
