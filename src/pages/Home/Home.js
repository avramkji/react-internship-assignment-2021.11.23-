import React, {Fragment} from 'react';
import { gql, useQuery } from '@apollo/client';
// components
import Missions from '../../components/Missions/Missions'
// style
import '../../styles/index.scss';

const GET_DATA = gql`
    {
        launchesPast(limit: 5) {
        mission_name
        launch_site {
            site_name_long
        }
        links {
            article_link
            flickr_images
        }
        id
        rocket {
            rocket {
            id
            height {
                meters
                feet
            }
            mass {
                kg
            }
            diameter {
                meters
                feet
            }
            engines {
                number
                type
                version
                layout
                engine_loss_max
                propellant_1
                propellant_2
                thrust_to_weight
            }
            name
            type
            }
        }
        launch_success
        launch_date_utc
        }
    }`;


const Home = () => {
    const { loading, error, data} = useQuery(GET_DATA);

    if(loading) return <p className="loading">Loading...</p>
    if(error) {
        console.log(error);
        return <p>Error</p>
    }

    // const missions = data.launchesPast.filter(mission => mission.links.flickr_images.length > 0);

    return (
        <Fragment>
            <Missions 
                missions={data.launchesPast} 
            />
        </Fragment>
    )

};


export default Home;