import { buildSchema } from 'graphql';
import { plugin } from '../src/plugin';

const schema = buildSchema('type Query { hello: String }');

describe('GraphQL codegen schema plugin', () => {
  test('Prints file content string containing the given schema', () => {
    const printedText = plugin(schema, [], {});
    const expectedOutput = 'export default `\ntype Query {\n  hello: String\n}\n`';
    expect(printedText).toEqual(expectedOutput);
  });
});
