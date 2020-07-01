"use strict";

import React from 'react';
import { Toolbar, Button } from 'react-md';
import { withRouter } from 'react-router-dom'


class Header extends React.Component {

    constructor(props) {
        super(props);
    }

    render() {
        return (
            <nav class="navbar navbar-expand-md navbar-light static-top" style={{backgroundColor: "#19393B"}}>
                <div class="d-flex flex-grow-1 mr-3 ml-3">
                    <a class="navbar-brand text-white mr-auto" href="#">
                        <img src="/assets/logo.png" alt="logo" style={{width:"20px"}}/>
                    </a>
                    <ul class="navbar-nav">
                        <li class="nav-item">
                            <a class="nav-link text-white"  href="#login">Login</a>
                        </li>
                        <li class="nav-item">
                            <a class="nav-link text-white"  href="#register">Register</a>
                        </li>
                    </ul>
                </div>
            </nav>
        );
    }
};

export default withRouter(Header);