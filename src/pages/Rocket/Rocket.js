import React, { Fragment } from "react";
import { gql, useQuery } from "@apollo/client";
// components
import RocketDetails from "../../components/RocketDetails/RocketDetails";

const GET_ROCKET_INFO = gql`
  query GET_ROCKET_INFO($rocketId: ID!) {
    rocket(id: $rocketId) {
      name
      height {
        feet
        meters
      }
      diameter {
        feet
        meters
      }
      stages
      cost_per_launch
      engines {
        type
        number
        propellant_1
        propellant_2
        thrust_to_weight
      }
    }
  }
`;

const Rocket = ({ match }) => {
    // console.log(match.params.rocketId);
  const rocketId = match.params.rocketId;

  const { data, loading, error } = useQuery(GET_ROCKET_INFO, {
    variables: { rocketId }
  });

  if (loading) return <p className="loading">Loading...</p>;
  if (error) {
      console.log(error);
    return <p>Error :(</p>;
  }

  return (
    <Fragment>
      <RocketDetails rocket={{...data.rocket, id: rocketId}} />
    </Fragment>
  );
};

export default Rocket;
