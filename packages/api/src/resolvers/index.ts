import messageResolvers from './message';
import queryResolvers from './query';
import type { Resolvers } from '../generated/types';
import type { ResolversContext } from '../types';

const resolvers: Resolvers<ResolversContext> = {
  Message: messageResolvers,
  Query: queryResolvers,
};

export default resolvers;
