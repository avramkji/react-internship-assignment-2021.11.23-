import React, { Fragment } from "react";
// styles
import "./../../styles/RocketDetails.scss";

import {Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Paper} from '@material-ui/core';

const RocketDetails = ({ rocket }) => {
  const { id, name, height, diameter, stages, cost_per_launch, engines } =
    rocket;
  console.log(rocket);
  return (
    <Fragment>
      <div className="RocketDetails">
        

        <TableContainer component={Paper}>
          <Table sx={{ maxWidth: 350 }} size="small" aria-label="simple table">
            <TableHead>
              <TableRow>
                <TableCell>Rocket Name: </TableCell>
                <TableCell align="right">Height: </TableCell>
                <TableCell align="right">Diameter: </TableCell>
                <TableCell align="right">Stages: </TableCell>
                <TableCell align="right">Cost per launch: </TableCell>
                <TableCell align="right">Number of engines: </TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
                <TableRow
                  key={id}
                  sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
                >
                  <TableCell component="th" scope="row">
                    {name}
                  </TableCell>
                  <TableCell align="right">{height.meters}</TableCell>
                  <TableCell align="right">{diameter.meters}</TableCell>
                  <TableCell align="right">{stages}</TableCell>
                  <TableCell align="right">{cost_per_launch}</TableCell>
                  <TableCell align="right">{engines.number}</TableCell>
                </TableRow>
            </TableBody>
          </Table>
        </TableContainer>


        {/* {<p>Name of rocket: {name}</p>}
                {<p>Rocket height: {height.meters} meters / {height.feet} feet</p>}
                {<p>Rocket diameter: {diameter.meters} meters / {diameter.feet} feet</p>}
                {<p>Number of stages: {stages}</p>}
                {<p>Cost per launch: {cost_per_launch} USD</p>}
                {<p>Number of engines: {engines.number}</p>} */}

        {/* <table className="RocketDetails-table">                    
                    <thead>
                        <tr>
                            <th>Name of rocket</th>
                            <th>Rocket height</th>
                            <th>Rocket diameter: </th>
                            <th>Number of stages:</th>
                            <th>Cost per launch: </th>
                            <th>Number of engines:</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td>{name}</td>
                            <td>{height.meters} meters / {height.feet} feet</td>
                            <td>{diameter.meters} meters / {diameter.feet} feet</td>
                            <td>{stages}</td>
                            <td>{cost_per_launch} USD</td>
                            <td>{engines.number}</td>
                        </tr>
                    </tbody>
                </table> */}
      </div>
    </Fragment>
  );
};

export default RocketDetails;
