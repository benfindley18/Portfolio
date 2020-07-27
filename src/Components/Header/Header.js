import React from 'react';
import { withRouter } from "react-router-dom";
import './Header.scss';

class Header extends React.Component {
    state = {}


    render() {

        return (
            <div className='bgArea'>
                <h1>
                    UI / Front-End Developer
                </h1>
                <h3>
                    Based in Indianapolis, Indiana
                </h3>

                <i class="fa fa-github" aria-hidden="true"></i>
            </div>
        )
    }
}


export default withRouter(Header);