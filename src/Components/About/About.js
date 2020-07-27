import React from 'react';
import './About.scss';
import userPic from '../imgs/profile-pic.jpeg'

class About extends React.Component {
    state = {}


    render() {

        return (
            <>
                <h1 className='header'>
                    Who am I?
                </h1>

                <div className='content'>
                    <p className='text'>
                        I am a Front-End Developer and Designer based in Indianapolis, Indiana.
                        I have a passion for creating beautifully simple webpages and apps that
                        work towards solving users problems.
                    </p>

                    <img src={userPic} alt='Headshot' />
                </div>
            </>
        )
    }
}


export default About;