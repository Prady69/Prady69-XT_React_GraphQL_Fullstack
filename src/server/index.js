import { ApolloServer, gql } from 'apollo-server-express';
import { resolvers } from './graphql/resolvers';
import { typeDefs } from './graphql/typeDefs';

// eslint-disable-next-line import/no-unresolved
const express = require('express');
const connectDB = require('./dbconnect/db');

const startServer = async () => {
  const app = express();

  const server = new ApolloServer({
    typeDefs,
    resolvers
  });

  server.applyMiddleware({ app });
  await connectDB();

  app.listen({ port: 4000 }, () => console.log(`🚀 Server ready at http://localhost:4000${server.graphqlPath}`));
};

startServer();
