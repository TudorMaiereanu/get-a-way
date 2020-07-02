"use strict";

import { withRouter } from 'react-router-dom';
import React from 'react';

import Page from './Page';

const mockData = require('./constants/mockData');

class RouteSelectionPage extends React.Component {

    constructor(props) {
        super(props);

        this.state = {
            routes: {
                "1": mockData.routes[1],
                "2": mockData.routes[2],
                "3": mockData.routes[0],
            }
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
                    <p className="h3 ml-5 my-4 pb-4">Select your route from Munich to Barcelona: </p>
                    <div className="col-100 ml-4 h-75">
                        {Object.keys(this.state.routes).map(routeIndex => 
                            <div className="mb-5">
                                <div className="row ml-0">
                                    <div className="col pl-4 pt-3 text-align" style={{minWidth:"100px", maxWidth:"300px", backgroundColor: "rgba(136, 152, 149, 0.3)", borderRadius: "20px 0 0 20px"}}>
                                        <p className="h3 inline text-center mb-3">Route {routeIndex}</p>
                                        <div className="pl-3 row mx-auto">
                                            <p style={{fontSize: "17px"}}>Corona Exposure: {this.state.routes[routeIndex].coronaRisk}</p>
                                        </div>
                                        <div className="pl-3 row mx-auto">
                                            <p style={{fontSize: "17px"}}>Weather: {this.state.routes[routeIndex].weatherAverage}/10</p>
                                        </div>
                                        <div className="pl-3 row mx-auto">
                                            <p style={{fontSize: "17px"}}> Cost: {this.state.routes[routeIndex].cost}</p>
                                        </div>
                                        <div className="pl-3 row mx-auto">
                                            <p style={{fontSize: "17px"}}> Carbon Footprint: CO2e kg</p>
                                        </div>
                                        <div className="pl-3 row mx-auto">
                                            <p style={{fontSize: "17px"}}>Travel Time: {this.state.routes[routeIndex].travelTime} h</p>
                                        </div>
                                        <div className="pl-3 row mx-auto">
                                            <p style={{fontSize: "17px"}}>Surfing stops: {this.state.routes[routeIndex].surfActivitiesNumber}</p>
                                        </div>
                                        <div className="pl-3 row mx-auto">
                                            <p style={{fontSize: "17px"}}>Hiking stops: {this.state.routes[routeIndex].hikeActivitiesNumber}</p>
                                        </div>
                                        <div className="row justify-content-center my-4">
                                            <a className="text-white" href={"#map"}>
                                                <button type="submit" className="btn btn-primary" style={{backgroundColor: "#eb401d", borderRadius: "20px", borderColor:"#eb401d"}}>
                                                    <p className="h5 p-2 my-auto">Pick route</p>
                                                </button>
                                            </a>
                                        </div>
                                    </div>
                                    <div className="col mr-4 border" style={{borderRadius: "0 20px 20px 0"}}>
                                        <div className="row bg-light my-4 flex-nowrap" style={{overflowX: "scroll"}}>
                                        {this.state.routes[routeIndex].stopsList.map((item, i) => 
                                        <div className="px-4">
                                            <div class="card" style={{width: "300px", height: "350px", borderRadius: "20px"}}>
                                                <img class="card-img-top" style={{height: "200px", borderRadius: "20px 20px 0 0"}} src={mockData.cities.find(obj => { return obj["locationName"] === item})['image']} alt="Card image cap" />
                                                <div class="card-body text-center" style={{overflowX: "auto"}}>
                                                    <h4>{item}</h4>
                                                    <p>{mockData.cities.find(obj => { return obj["locationName"] === item})['locationCountryName']}</p>
                                                    <h5>Days: {this.state.routes[routeIndex].dayslist[i]}</h5>
                                                </div>
                                            </div>
                                        </div>
                                        )}
                                        </div>
                                    </div>
                                </div>
                            </div>
                        )}
                    </div>
                </div>
            </Page>
        );
    }
}

export default withRouter(RouteSelectionPage);
