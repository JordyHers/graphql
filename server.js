//First we need to set up a basic Express app
const express = require("express");

//Then we need to require the expressQl
const expressGraphQL = require("express-graphql").graphqlHTTP;

const { GraphQLSchema, GraphQLObjectType, GraphQLString } = require("graphql");

const app = express();

//Next step is to create a schema
const schema = new GraphQLSchema({
  //This query section is responsible for the query keyword we will use to answer.
  query: new GraphQLObjectType({
    name: "HelloWorld",
    fields: () => ({
      message: {
        type: GraphQLString,
        resolve: () => "This message is brought you ",
      },
    }),
  }),
});

//Then we need to pass the schema of the GraphQL to app.use()
app.use(
  "/graphql",
  expressGraphQL({
    schema: schema,
    graphiql: true,
  })
);
app.listen(8080, () => console.log("Server Running.."));

// https://www.youtube.com/watch?v=ZQL7tL2S0oQ 10:52
