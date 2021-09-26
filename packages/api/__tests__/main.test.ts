import { handler } from '../src/main';
import type { APIGatewayProxyEventV2 } from 'aws-lambda';

describe('GraphQL request handler', () => {
  test('Returns query response', async () => {
    const context = {} as never;
    const request: APIGatewayProxyEventV2 = {
      body: `{ "query": "query { hello }" }`,
      headers: { 'Content-Type': 'application/json' },
    } as never;

    const response = await handler(request, context);

    expect(response.statusCode).toBe(200);
    expect(response.body).toBe('{"data":{"hello":"Hello world?"}}');
  });
});
