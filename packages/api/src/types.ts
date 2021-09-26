import type {
  APIGatewayProxyEvent,
  APIGatewayProxyEventV2,
  APIGatewayProxyStructuredResultV2,
  Context,
} from 'aws-lambda';
import type { Merge } from 'ts-essentials';

// Request event
export type APIGatewayProxyEventAfterMiddleware = Merge<
  APIGatewayProxyEvent,
  {
    body: {
      query: string;
      variables: Record<string, unknown>;
    };
  }
>;

// Handler response
export type APIGatewayProxyStructuredResultV2BeforeMiddleware = Merge<
  APIGatewayProxyStructuredResultV2,
  {
    body?: Record<string, unknown> | unknown;
  }
>;

// Resolvers dependencies context
export type ResolversContext = { contextSomething: number };

// Inner handler enhanced by middleware
export type HandlerEnhancedByMiddleware = (
  event: APIGatewayProxyEventAfterMiddleware,
  context: Context,
) => Promise<APIGatewayProxyStructuredResultV2BeforeMiddleware>;

// Outer exported handler
export type Handler = (event: APIGatewayProxyEventV2, context: Context) => Promise<APIGatewayProxyStructuredResultV2>;
