import React from 'react';
import Grid from '@material-ui/core/Grid';
import Paper from '@material-ui/core/Paper';
import Box from '@material-ui/core/Box';
// styles
import './../../styles/Missions.scss';
import { Link } from 'react-router-dom';

const Missions = ({missions}) => {
    return (
        <Box>
            <Grid container spacing={4}  className="Missions">
                <h1 className="title">Missions</h1>
                
                    {missions.map(mission => (
                        <Grid item key={mission.id} xs={12} md={4} >
                            {console.log("Missions before link: ", mission.rocket.rocket.id)}
                            <Link to={`/rocket/${mission.rocket.rocket.id}`} style={{textDecoration: 'none'}}>
                                <Paper>
                                    <div>
                                        <img 
                                            src={mission.links.flickr_images[0] || 'https://upload.wikimedia.org/wikipedia/commons/2/22/Falcon_9_close_up.jpeg'} 
                                            alt={`Rocket for ${mission.mission_name} mission`} 
                                            className="Mission-image"
                                        />
                                        <div className="Paper-body">
                                            <h2>{mission.mission_name}</h2>
                                            <p>
                                                The {mission.mission_name} mission used the {mission.rocket.rocket.name} rocket and 
                                                the mission was a {mission.launch_success ? 'success' : 'failure'}.
                                            </p>
                                            <p>{mission.launch_date_utc.slice(0, 10)}</p>
                                        </div>
                                        
                                    </div>
                                </Paper>
                            </Link>
                    
                        </Grid>
                    ))}
                
            </Grid>
        </Box>
    )
}


export default Missions;