import React from 'react';
import { withRouter } from "react-router-dom";
import './Projects.scss';
import { Card, Button } from 'react-bootstrap';
import hiveLogo from '../imgs/hive-icon.png';
import passwordLogo from '../imgs/password.jpg';
import journalIcon from '../imgs/journaling-icon.png'

class Projects extends React.Component {
    state = {}


    render() {

        return (
            <body>
                <div className='hive'>
                    <Card className='projectCard' style={{ width: '18rem' }}>
                        <Card.Img className='hiveImg' variant="top" src={hiveLogo} />
                        <Card.Body className='cardBody'>
                            <Card.Title>Hive</Card.Title>
                            <Card.Text>
                                A collaborative React.js project focused around helping people with their savings
                            </Card.Text>
                            <Button variant="primary"> More Info </Button>
                        </Card.Body>
                    </Card>
                </div>

                <div className='password'>
                    <Card className='projectCard' style={{ width: '18rem' }}>
                        <Card.Img className='passwordImg' variant="top" src={passwordLogo} />
                        <Card.Body className='cardBody'>
                            <Card.Title>Password Strength</Card.Title>
                            <Card.Text>
                                A quick side project testing out a password strength validation user interaction
                            </Card.Text>
                            <Button variant="primary"> More Info </Button>
                        </Card.Body>
                    </Card>
                </div>

                <div className='plume'>
                    <Card className='projectCard' style={{ width: '18rem' }}>
                        <Card.Img className='journalImg' variant="top" src={journalIcon} />
                        <Card.Body className='cardBody'>
                            <Card.Title>Plume</Card.Title>
                            <Card.Text>
                                A collaborative design project focused of mindful journaling and helping users understanding mental health
                            </Card.Text>
                            <Button variant="primary"> More Info </Button>
                        </Card.Body>
                    </Card>
                </div>
            </body>
        )
    }
}


export default withRouter(Projects);