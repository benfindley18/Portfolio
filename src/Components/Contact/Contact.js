import React from 'react';
import './Contact.scss';
import ReactContactForm from 'react-mail-form';

class Contact extends React.Component {
    state = {}


    render() {

        return (
            <>
                <div className='contactHeader'>
                    <h1>Contact</h1>

                    <p>Have a question or want to talk?</p>
                </div>
                <ReactContactForm className='contactForm' to="benfindley18@gmail.com" />
                <hr />

                <div className='icons'>
                    <a href="https://www.linkedin.com/in/benjamin-findley-a6489a18b/"><img src="https://img.icons8.com/nolan/40/linkedin.png" alt='Linkedin Icon' /></a>

                    <a className='github' href="https://github.com/benfindley18"><img src="https://img.icons8.com/nolan/40/github.png" alt='GitHub Icon' /></a>
                </div>

            </>
        )
    }
}


export default Contact;