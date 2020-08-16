// const datasource = require("./datasource");

const resolvers = {
  Query: {
    // car: (_, { plateNumber }, { dataSources }) =>
    //   dataSources.mvrpAPI.getACar(plateNumber),
    cars: (_, __, { dataSources }) => dataSources.mvrpAPI.getAllCars(),
  },
};

module.exports = resolvers;
