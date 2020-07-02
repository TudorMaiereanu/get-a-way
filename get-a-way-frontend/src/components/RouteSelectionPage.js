"use strict";

import { withRouter } from 'react-router-dom';
import React from 'react';

import Page from './Page';

class RouteSelectionPage extends React.Component {

    constructor(props) {
        super(props);

        this.state = {
            routes: {
                "1": ["Munich", "Zurich", "Montpellier", "Barcelona", "Lyon", "Geneva", "Munich"],
                "2": ["Munich", "Alsance", "Pyrenees", "Barcelona", "Cevennes", "Black-Forest", "Munich"],
                "3": ["Munich", "Mayrhofen", "Castellane", "Girona", "Barcelona", "Parc Naturel Régional de l'Aubrac (Rodez)", "Charmonix", "Munich"],
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
                    <p className="h3 ml-4">Select your route from Munich to Barcelona: </p>
                    <div className="col-100 ml-4 h-75">
                        {Object.keys(this.state.routes).map(item => 
                            <div className="my-5 border">
                                <div className="row ml-0">
                                    <div className="col bg-white pl-4 pt-3 rounded text-align" style={{minWidth:"100px", maxWidth:"250px", }}>
                                        <label className="h3 inline">Route {item}</label>
                                        <div className="pl-3 row">
                                            Corona Exposure:
                                        </div>
                                        <div className="pl-3 row">
                                            Weather: 6/10
                                        </div>
                                        <div className="pl-3 row">
                                            Cost: 200$
                                        </div>
                                        <div className="pl-3 row">
                                            Carbon Footprint: CO2e kg
                                        </div>
                                        <div className="pl-3 row">
                                            Travel Time: 30 h
                                        </div>
                                        <div className="pl-3 row">
                                            Surfing:
                                        </div>
                                        <div className="pl-3 row">
                                            Hiking:
                                        </div>
                                        <div className="row justify-content-center mt-3">
                                            <a className="text-white" href={"#tiles"}>
                                                <button type="submit" className="btn btn-primary" style={{backgroundColor: "#eb401d"}}>
                                                    Pick route
                                                </button>
                                            </a>
                                        </div>
                                    </div>
                                    <div className="col mr-4">
                                        <div className="row bg-light m-2 flex-nowrap rounded" style={{overflowX: "scroll"}}>
                                        {this.state.routes[item].map(item => 
                                        <div className="px-4">
                                            <div class="card" style={{minWidth: "200px", height: "250px", borderRadius: "20px"}}>
                                                <img class="card-img-top" style={{borderRadius: "20px 20px 0 0"}} src="https://www.w3schools.com/w3images/fjords.jpg" alt="Card image cap" />
                                                <div class="card-body text-center" style={{overflowX: "auto"}}>
                                                    <h5>{item}</h5>
                                                    <p>Days: 5</p>
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
