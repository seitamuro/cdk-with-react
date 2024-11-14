import { APIGatewayProxyEvent } from "aws-lambda";

export const handler = async (event: APIGatewayProxyEvent) => {
  const date = new Date();
  const seconds = date.getSeconds();

  return {
    statusCode: 200,
    body: JSON.stringify({ message: `${Math.floor(seconds / 10)}`}),
  };
}