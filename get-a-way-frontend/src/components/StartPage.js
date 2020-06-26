"use strict";

import { withRouter } from 'react-router-dom';
import React from 'react';
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import Page from './Page';

Date.prototype.addDays = function(days) {
    var date = new Date(this.valueOf());
    date.setDate(date.getDate() + days);
    return date;
}


class StartPage extends React.Component {

    constructor(props) {
        super(props);

        this.state = {
            startLocation : '',
            endLocation : '',
            startDate: new Date(),
            endDate: (new Date()).addDays(14),
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
                                <label className="h5 mb-3" for="startLocation">Where are you starting your trip?</label>
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
                            <div className="form-group mt-5">
                                <label className="h5 mb-3" for="endLocation">Where do you want to travel?</label>
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
                            
                            <div className="form-group mt-5">
                                <label className="h5 mb-3" for="date">When do you want to start your trip?</label>
                                <div className="form-inline" id="date">
                                    <div className="form-group mr-5">
                                        <label className="mr-3">From</label>
                                        <DatePicker
                                            selected={this.state.startDate}
                                            onChange={date => this.setState({ startDate: date })}
                                            minDate={new Date()}
                                            maxDate={this.state.startDate.addDays(13)}
                                            dateFormat="dd/MM/yyyy"
                                        />
                                    </div>
                                    <div className="form-group">
                                        <label className="mr-3">To</label>
                                        <DatePicker
                                            selected={this.state.endDate}
                                            onChange={date => this.setState({ endDate: date })}
                                            dateFormat="dd/MM/yyyy"
                                            minDate={this.state.startDate}
                                            maxDate={this.state.startDate.addDays(13)}
                                        />
                                    </div>
                                </div>
                            </div>
                            

                            <button type="submit" className="btn btn-primary mt-5">
                                <a href={`#priority/origin=${this.state.startLocation}&destination=${this.state.endLocation}`} className="text-white">
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

export default withRouter(StartPage);
