import middy from '@middy/core';
import errorLogger from '@middy/error-logger';
import httpJsonBodyParser from '@middy/http-json-body-parser';
import httpResponseSerializer from '@middy/http-response-serializer';
import httpSecurityHeaders from '@middy/http-security-headers';
import inputOutputLogger from '@middy/input-output-logger';
import validator from '@middy/validator';
import type { Handler, HandlerEnhancedByMiddleware } from './types';
import type { JSONSchema6 } from 'json-schema';

const inputValidationSchema: JSONSchema6 = {
  type: 'object',
  required: ['body'],
  properties: {
    body: {
      type: 'object',
      required: ['query'],
      properties: {
        query: { type: 'string' },
        variables: { type: 'object' },
      },
    },
  },
};

const DEBUG = false;

export const applyMiddleware = (handler: HandlerEnhancedByMiddleware): Handler =>
  middy(handler)
    .use(errorLogger())
    .use(httpSecurityHeaders())
    .use(httpJsonBodyParser())
    .use(
      httpResponseSerializer({
        default: 'application/json',
        serializers: [
          {
            regex: /^application\/json$/,
            serializer: ({ body }) => JSON.stringify(body),
          },
        ],
      }),
    )
    .use(
      inputOutputLogger({
        awsContext: true,
        logger: (message) => {
          // eslint-disable-next-line no-console
          if (DEBUG) console.log(message);
        },
      }),
    )
    // Middy can't handle different params or return type for the inner and outer handlers
    .use(validator({ inputSchema: inputValidationSchema })) as unknown as Handler;
