"use strict";

import { withRouter } from 'react-router-dom';
import React from 'react';
import Page from './Page';
import Calendar from "./Calendar";

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
                    <p className="h1 text-center" style={{paddingTop: "200px"}}>Tailor-made road trips.</p>
                    <p className="h2 mt-3 text-center">Detour Corona. Reduce emissions. Save time.</p>
                    <div className="container">
                        <form onSubmit={this.handleSubmit}>
                            <div className="mt-5" style={{horizontalAlign: "middle"}}>
                                <p className="h4 mb-3 text-center" for="startLocation">From</p>
                                <select className="form-control"
                                    id="startLocation"
                                    onChange={(event) => {
                                        this.setState({
                                            startLocation: event.target.value
                                        })
                                    }}
                                >
                                    <option hidden>Select starting point</option>
                                    <option value="Munich">Munich</option>
                                    <option value="Budapest">Budapest</option>
                                </select>
                            </div>
                            <div className="mt-5">
                                <p className="h4 mb-3 text-center" for="startLocation">To</p>
                                <select className="form-control"
                                    id="endLocation"
                                    onChange={(event) => {
                                        this.setState({
                                            endLocation: event.target.value
                                        })
                                    }}
                                >
                                    <option hidden>Select destination</option>
                                    <option value="Barcelona">Barcelona</option>
                                    <option value="Lisbon">Lisbon</option>
                                </select>
                            </div>
                            
                            <div className="mt-5">
                                <p className="h4 mb-3 text-center" for="date">Choose dates:</p>
                                <div className="text-center" id="date">
                                    <Calendar/>
                                </div>
                            </div>
                            <div className="text-center">
                                <button type="submit" className="btn btn-primary mt-5 text-center">
                                    <a href={`#priority/origin=${this.state.startLocation}&destination=${this.state.endLocation}`} className="text-white">
                                        Set priorities
                                    </a>
                                </button>
                            </div>
                        </form>
                    </div>
                </div>
            </Page>
        );
    }
}

export default withRouter(StartPage);
