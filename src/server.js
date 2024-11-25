const { ApolloServer } = require("apollo-server");
const connectDB = require("./config/database");
const typeDefs = require("./graphql/schema");
const resolvers = require("./graphql/resolvers");

connectDB();

const server = new ApolloServer({
  typeDefs,
  resolvers,
  cors: {
    origin: "*",
    credentials: true,
  },
});

server.listen().then(({ url }) => {
  console.log(`Server ready at ${url}`);
});
