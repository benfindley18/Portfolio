import React from 'react';
import { withRouter } from "react-router-dom";
import './Projects.scss';
import { Card, Button } from 'react-bootstrap';
import hiveLogo from '../imgs/hive-icon.png';
import weatherIcon from '../imgs/weather-icon.png'

class Projects extends React.Component {
    state = {}


    render() {

        return (
            <body>
                <div className='hive' id='projects'>
                    <Card className='projectCard' style={{ width: '18rem' }}>
                        <Card.Img className='hiveImg' variant="top" src={hiveLogo} />
                        <Card.Body className='cardBody'>
                            <Card.Title>Hive</Card.Title>
                            <Card.Text>
                                A collaborative React.js project focused around helping people with their savings
                            </Card.Text>
                            <Button variant="primary"><a className='linkBtn' href="https://uxfol.io/project/0421e41d/The-Hive"> More </a></Button>
                        </Card.Body>
                    </Card>
                </div>

                <div className='password'>
                    <Card className='projectCard' style={{ width: '18rem' }}>
                        <Card.Img className='weatherImg' variant="top" src={weatherIcon} />
                        <Card.Body className='cardBody'>
                            <Card.Title>Reactive Weather</Card.Title>
                            <Card.Text>
                                A simple and streamlined responsive weather site made using OpenWeather API
                            </Card.Text>
                            <Button variant="primary"><a className='linkBtn' href="https://reactiveweather.netlify.app/"> More </a></Button>
                        </Card.Body>
                    </Card>
                </div>

            </body>
        )
    }
}


export default withRouter(Projects);