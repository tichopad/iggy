import { makeExecutableSchema } from '@graphql-tools/schema';
import { graphql } from 'graphql';
import typeDefs from './generated/schema';
import { applyMiddleware } from './middleware';
import resolvers from './resolvers';
import type { HandlerEnhancedByMiddleware } from './types';

const schema = makeExecutableSchema({
  typeDefs,
  resolvers,
});

export const innerHandler: HandlerEnhancedByMiddleware = async (event) => {
  const { query = '', variables = {} } = event.body;

  return {
    body: await graphql(schema, query, null, { contextSomething: 2 }, variables),
    statusCode: 200,
  };
};

export const handler = applyMiddleware(innerHandler);
