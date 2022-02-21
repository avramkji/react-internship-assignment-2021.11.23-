import React from 'react';
// styles
import './../../styles/Missions.scss';

// MUI Components
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';

const Missions = ({missions}) => {
    return (

        <div className='Missions'>
            <h1>Missions</h1>
            <div className='cardsList'>
                {missions.map((mission, index) => {
                    return (
                    <Card key={mission.id} className="Card" sx={{ maxWidth: 345 }}>
                        <CardMedia
                            component="img"
                            height="140"
                            image={mission.links.flickr_images[0] || 'https://upload.wikimedia.org/wikipedia/commons/2/22/Falcon_9_close_up.jpeg'}
                            alt={`Rocket for ${mission.mission_name}`}
                        />
                        <CardContent className="CardContent">
                        <Typography gutterBottom variant="h5" component="div">
                            {mission.mission_name}
                        </Typography>
                        <Typography variant="body2" color="text.secondary">
                            The {mission.mission_name} mission used the {mission.rocket.rocket.name} rocket and the mission was a {mission.launch_success ? 'success' : 'failure'}
                            <br/>
                            {mission.launch_date_utc.slice(0, 10)}
                        </Typography>
                        </CardContent>
                        <CardActions className="CardActions">
                        <a href={`/rocket/${mission.rocket.rocket.id}`}>
                            <Button size="small">Read More!</Button>
                        </a>
                        </CardActions>
                    </Card>
                    )
                })}
            </div>
        </div>
    )
}


export default Missions;