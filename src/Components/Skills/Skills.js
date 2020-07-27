import React from 'react';
import './Skills.scss';

class Skills extends React.Component {
    state = {}


    render() {

        return (
            <>
                <h1 className='header'>Skills</h1>

                < div className='container'>
                    <div className='html skillCard'>
                        <img src="https://img.icons8.com/color/48/000000/html-5.png"
                            alt='HTML Icon' />
                        <p>HTML</p>
                    </div>

                    <div className='css skillCard'>
                        <img src="https://img.icons8.com/color/48/000000/css3.png"
                            alt='CSS Icon' />
                        <p>CSS</p>
                    </div>

                    <div className='scss skillCard'>
                        <img src="https://img.icons8.com/color/48/000000/sass-avatar.png"
                            alt='SCSS Icon' />
                        <p>SCSS</p>
                    </div>

                    <div className='git skillCard'>
                        <img src="https://img.icons8.com/color/48/000000/git.png"
                            alt='Git Icon' />
                        <p>Git</p>
                    </div>

                    <div className='javascript skillCard'>
                        <img src="https://img.icons8.com/dusk/49/000000/javascript-logo.png"
                            alt='JavaScript Icon' />
                        <p>JavaScript</p>
                    </div>

                    <div className='react skillCard'>
                        <img src="https://img.icons8.com/color/48/000000/react-native.png"
                            alt='React.js Icon' />
                        <p>React.js</p>
                    </div>

                    <div className='ui skillCard'>
                        <img src="https://img.icons8.com/officel/40/000000/template.png"
                            alt='Design Icon' />
                        <p>Design</p>
                    </div>

                    <div className='figma skillCard'>
                        <img src="https://img.icons8.com/windows/40/000000/figma.png"
                            alt='Figma Icon' />
                        <p>Figma</p>
                    </div>

                    <div className='photoshop skillCard'>
                        <img src="https://img.icons8.com/fluent/48/000000/adobe-photoshop.png"
                            alt='Photoshop Icon' />
                        <p>Photoshop</p>
                    </div>

                    <div className='invision skillCard'>
                        <img src="https://img.icons8.com/windows/64/000000/invision.png"
                            alt='Invision Icon' />
                        <p>Invision</p>
                    </div>
                </div>
            </>
        )
    }
}


export default Skills;