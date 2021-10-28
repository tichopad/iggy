import { double } from '@iggy/utils';
import type { MessageResolvers } from '../generated/types';

const messageResolvers: MessageResolvers = {
  meta: () => `Meta${double(2)}`,
};

export default messageResolvers;
