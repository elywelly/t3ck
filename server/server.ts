import express, { Request, Response } from "express";
import { graphqlHTTP } from "express-graphql";
import { GraphQLSchema, GraphQLObjectType, GraphQLString } from "graphql";
const port = 4000;

const app = express();

app.get("/", (req: Request, res: Response) => {
  res.json({ message: "Hello from express" });
});

app.get("/hi", (req: Request, res: Response) => {
  res.send({ message: "bye" });
});

app.listen(port, () => {
  console.log(`now listening on port ${port}`);
});
