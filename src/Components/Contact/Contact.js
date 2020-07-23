import React from 'react';
import './Contact.scss';
import ReactContactForm from 'react-mail-form';

class Contact extends React.Component {
    state = {}


    render() {

        return (
            <>
                <div className='backgroundBox'>
                    <ReactContactForm className='contactForm' to="benfindley18@gmail.com" />
                </div>
                <hr />

                <div className='icons'>
                    <a href="https://www.linkedin.com/in/benjamin-findley-a6489a18b/"><img src="https://img.icons8.com/nolan/40/linkedin.png" /></a>

                    <a className='github' href="https://github.com/benfindley18"><img src="https://img.icons8.com/nolan/40/github.png" /></a>
                </div>

            </>
        )
    }
}


export default Contact;