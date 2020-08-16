const { ApolloServer, gql } = require("apollo-server");

const MvrpAPI = require("./datasource");
const resolvers = require("./resolvers");
const typeDefs = require("./schema");

const server = new ApolloServer({
  typeDefs,
  resolvers,
  dataSources: () => ({
    mvrpAPI: new MvrpAPI(),
  }),
});

server.listen().then(({ url }) => {
  console.log(`🚀 Server ready at ${url}`);
});
