const { ApolloServer, gql } = require("apollo-server");

const userData = [
  { id: 1, name: "hamzah", email: "hamzah@abc.com", age: 21 },
  { id: 2, name: "areeb", email: "areeb@abc.com", age: 22 },
  { id: 3, name: "asim", email: "asim@abc.com", age: 23 },
];

const resolvers = {
  Query: {
    users: () => userData,
  },
};

// your data.
const typeDefs = gql`
  type User {
    id: Int
    name: String
    email: String
    age: Int
  }

  type Query {
    users: [User]
  }
`;

const server = new ApolloServer({ typeDefs, resolvers });

// The `listen` method launches a web server.
server.listen().then(({ url }) => {
  console.log(`🚀  Server ready at ${url}`);
});
