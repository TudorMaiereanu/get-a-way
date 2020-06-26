"use strict";

import { withRouter } from 'react-router-dom';
import React from 'react';

import Page from './Page';

class PriorityPage extends React.Component {

    constructor(props) {
        super(props);

        this.state = {
            coronaPriority: "",
            weatherPriority: "",
            costPriority: "",
            hikingPriority: "",
            surfingPriority: "",
            emissionPriority: "",
        };

        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleSubmit(event) {
        event.preventDefault();

        console.log("Get a way");
        console.log(this.state);
    }

    render() {
        return (
            <Page>
                <div className="w-100 p-3" style={{position: "absolute", minHeight: "100%"}}>
                    <div className="container">
                        <p className="h4 mt-5">
                            Before planning the perfect route for you, we'd like to find more about the factors
                            that you take into account when planning a trip

                        </p>
                        <form onSubmit={this.handleSubmit}>
                            <div className="form-inline mt-5">
                                <label className="h5 w-50 mb-3" for="startLocation">How important is the corona risk for you?</label>
                                <select className="form-control"
                                    id="startLocation"
                                    onChange={(event) => {
                                        this.setState({
                                            coronaPriority: event.target.value
                                        })
                                    }}
                                >
                                    <option hidden>Select priority</option>
                                    <option value="1">1/3</option>
                                    <option value="2">2/3</option>
                                    <option value="3">3/3</option>
                                </select>
                            </div>

                            <div className="form-inline mt-5 py-auto">
                                <label className="h5 w-50 mb-0" for="endLocation">How important is good weather for you?</label>
                                <select className="form-control"
                                    id="endLocation"
                                    onChange={(event) => {
                                        this.setState({
                                            weatherPriority: event.target.value
                                        });
                                    }}
                                >
                                    <option hidden>Select priority</option>
                                    <option value="1">1/3</option>
                                    <option value="2">2/3</option>
                                    <option value="3">3/3</option>
                                </select>
                            </div>

                            <div className="form-inline mt-5 py-auto">
                                <label className="h5 w-50 mb-0" for="endLocation">How important is the city lesiure cost for you?</label>
                                <select className="form-control"
                                    id="endLocation"
                                    onChange={(event) => {
                                        this.setState({
                                            costPriority: event.target.value
                                        });
                                    }}
                                >
                                    <option hidden>Select priority</option>
                                    <option value="1">1/3</option>
                                    <option value="2">2/3</option>
                                    <option value="3">3/3</option>
                                </select>
                            </div>

                            <div className="form-inline mt-5 py-auto">
                                <label className="h5 w-50 mb-0" for="endLocation">How much are you into hiking?</label>
                                <select className="form-control"
                                    id="endLocation"
                                    onChange={(event) => {
                                        this.setState({
                                            hikingPriority: event.target.value
                                        });
                                    }}
                                >
                                    <option hidden>Select priority</option>
                                    <option value="1">1/3</option>
                                    <option value="2">2/3</option>
                                    <option value="3">3/3</option>
                                </select>
                            </div>

                            <div className="form-inline mt-5 py-auto">
                                <label className="h5 w-50 mb-0" for="endLocation">How much are you into surfing?</label>
                                <select className="form-control"
                                    id="endLocation"
                                    onChange={(event) => {
                                        this.setState({
                                            surfingPriority: event.target.value
                                        });
                                    }}
                                >
                                    <option hidden>Select priority</option>
                                    <option value="1">1/3</option>
                                    <option value="2">2/3</option>
                                    <option value="3">3/3</option>
                                </select>
                            </div>

                            <div className="form-inline mt-5 py-auto">
                                <label className="h5 w-50 mb-0" for="endLocation">How important is the carbon footpring for you?</label>
                                <select className="form-control"
                                    id="endLocation"
                                    onChange={(event) => {
                                        this.setState({
                                            emissionPriority: event.target.value
                                        });
                                    }}
                                >
                                    <option hidden>Select priority</option>
                                    <option value="1">1/3</option>
                                    <option value="2">2/3</option>
                                    <option value="3">3/3</option>
                                </select>
                            </div>

                            

                            <button type="submit" className="btn btn-primary mt-5">
                                <a href={"#routes"}className="text-white">
                                    Set priorities
                                </a>
                            </button>
                        </form>
                    </div>
                </div>
            </Page>
        );
    }
}

export default withRouter(PriorityPage);
