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
            <nav class="navbar navbar-expand-md navbar-light bg-dark static-top">
                <div class="d-flex flex-grow-1 mr-3 ml-3">
                    <a class="navbar-brand text-warning mr-auto" href="#">Get a way</a>
                    <ul class="navbar-nav">
                        <li class="nav-item">
                            <a class="nav-link text-warning"  href="#login">Login</a>
                        </li>
                        <li class="nav-item">
                            <a class="nav-link text-warning"  href="#register">Register</a>
                        </li>
                    </ul>
                </div>
            </nav>
        );
    }
};

export default withRouter(Header);