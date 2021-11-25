import React, { Fragment } from 'react';
// styles
// import './../../styles/Missions.scss';



const RocketDetails = ({rocket}) => {
    const {id, name, height, diameter, stages, cost_per_launch, engines} = rocket;
    console.log(rocket);
    return (
        <Fragment>
            <div>
                {<p>Name of rocket: {name}</p>}
            </div>
        </Fragment>
    )

}

export default RocketDetails;