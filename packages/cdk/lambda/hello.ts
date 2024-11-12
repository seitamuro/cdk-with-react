import { APIGatewayProxyEvent, APIGatewayProxyHandler } from 'aws-lambda';

export const handler: APIGatewayProxyHandler = async (event: APIGatewayProxyEvent) => {
  console.log('Hello, world!');
  return {
    statusCode: 200,
    body: JSON.stringify({
      message: 'Hello, world!',
      input: event,
    }),
  };
}