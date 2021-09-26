import { printSchema } from 'graphql';
import type { DocumentNode, GraphQLSchema } from 'graphql';

type Configuration = Record<string, unknown>;
type Documents = Array<{ location: string; document: DocumentNode }>;
type Output = string;

export function plugin(schema: GraphQLSchema, _documents: Documents, _config: Configuration): Output {
  return 'export default `\n' + printSchema(schema) + '`';
}
