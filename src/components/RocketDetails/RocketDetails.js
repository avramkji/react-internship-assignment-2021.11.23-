import React, { Fragment } from "react";
// styles
import "./../../styles/RocketDetails.scss";

import {
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Paper,
} from "@material-ui/core";

const RocketDetails = ({ rocket }) => {
  const { id, name, height, diameter, stages, cost_per_launch, engines } =
    rocket;
  console.log(rocket);
  return (
    <Fragment>
      <div className="RocketDetails">
        <TableContainer style={{width:'65%'}} component={Paper}>
          <Table size="small" aria-label="simple table">
            <TableHead>
              <TableRow>
                <TableCell>Rocket Name: </TableCell>
                <TableCell align="right">Height: </TableCell>
                <TableCell align="right">Diameter: </TableCell>
                <TableCell align="right">Stages: </TableCell>
                <TableCell align="right">Cost per launch(USD): </TableCell>
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
                <TableCell align="right">{height.meters}m / {height.feet} ft</TableCell>
                <TableCell align="right">{diameter.meters}m / {diameter.feet} ft</TableCell>
                <TableCell align="right">{stages}</TableCell>
                <TableCell align="right">{cost_per_launch}</TableCell>
                <TableCell align="right">{engines.number}</TableCell>
              </TableRow>
            </TableBody>
          </Table>
        </TableContainer>
      </div>
    </Fragment>
  );
};

export default RocketDetails;
