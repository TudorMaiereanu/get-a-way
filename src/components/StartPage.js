"use strict";

import { withRouter } from 'react-router-dom';
import React from 'react';

import Page from './Page';

const style = { maxWidth: 500 };

class StartPage extends React.Component {

    constructor(props) {
        super(props);
    }

    render() {
        return (
            <Page>
            </Page>
        );
    }
}

export default withRouter(StartPage);
