"use strict";

import { withRouter } from 'react-router-dom';
import React from 'react';

import Page from './Page';

class StartPage extends React.Component {

    constructor(props) {
        super(props);

        this.state = {
            startLocation : '',
            endLocation : '',
        };

        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleSubmit(event) {
        event.preventDefault();

        console.log("Set priorities")
    }

    render() {
        return (
            <Page>
                <div className="w-100 p-3" style={{position: "absolute", minHeight: "100%"}}>
                    <div className="container">
                        <form onSubmit={this.handleSubmit}>
                            <div className="form-group mt-5">
                                <label for="startLocation">What's your starting point?</label>
                                <select className="form-control"
                                    id="startLocation"
                                    onChange={ (event) => { this.state.startLocation = event.target.value } }
                                >
                                    <option value="munich">Munich</option>
                                    <option value="munich">Munich</option>
                                </select>
                            </div>
                            <div className="form-group mt-5">
                                <label for="endLocation">What's your destination?</label>
                                <select className="form-control"
                                    id="endLocation"
                                    onChange={ (event) => { this.state.endLocation = event.target.value } }
                                >
                                    <option value="barcelona">Barcelona</option>
                                    <option value="barcelona">Barcelona</option>
                                </select>
                            </div>

                            <button type="submit" className="btn btn-primary mt-3">
                                <a href={"#"} className="text-white">Set priorities</a>
                            </button>
                        </form>
                    </div>
                </div>
            </Page>
        );
    }
}

export default withRouter(StartPage);
