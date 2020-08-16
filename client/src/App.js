import React from "react";
import logo from "./logo.svg";
import "./App.css";
import { gql, useQuery } from "@apollo/client";

function App() {
  const { loading, error, data } = useQuery(GET_CARS);

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error :(</p>;

  const { cars } = data;
  console.log(cars);

  return (
    <div className="App">
      <div>
        {cars.map((cars) => (
          <h2 key={cars.id}>{cars.plateNumber}</h2>
        ))}
      </div>
    </div>
  );
}

export default App;

const GET_CARS = gql`
  query GET_CARS {
    cars {
      id
      plateNumber
      issueDate
    }
  }
`;
