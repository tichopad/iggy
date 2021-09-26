import type { QueryResolvers } from '../generated/types';

const queryResolvers: QueryResolvers = {
  hello: () => 'Hello world?',
  messages: (_parent, { count }, _context, _resolveInfo) => {
    return new Array(count).fill(null).map((_, i) => ({
      id: 'abcd' + i.toString(),
      body: 'Hey ho',
      timestamp: Math.floor(Date.now() / 1000),
    }));
  },
};

export default queryResolvers;
