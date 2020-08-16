const { gql } = require("apollo-server");

const typeDefs = gql`
  type Car {
    id: Int!
    plateNumber: String!
    color: String!
    model: String!
    chasisNumber: String!
    vehicleStatus: String!
    yearOfManufacture: Int!
    issueDate: String!
    expiryDate: String!
  }
  type Query {
    cars: [Car]
  }
`;

module.exports = typeDefs;
