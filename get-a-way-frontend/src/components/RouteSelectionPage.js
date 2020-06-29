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
                    <p className="h2 ml-4">Select your route from Munich to Barcelona: </p>
                    <div className="col-100 ml-4">
                        {Object.keys(this.state.routes).map(item => 
                            <div className="my-5 pl-5 border">
                                <label className="h3 inline mt-3">Route {item}</label>
                                <div className="row ml-0 mb-3">
                                    <div className="col bg-white pl-5 pt-5 rounded" style={{minWidth:"200px", maxWidth:"300px", }}>
                                        <div className="row h5">
                                            Corona risk:
                                        </div>
                                        <div className="row h5">
                                            Weather:
                                        </div>
                                        <div className="row h5">
                                            CO2 footprint:
                                        </div>
                                        <div className="row h5">
                                            Activities: hiking
                                        </div>
                                        <div className="row h5">
                                            Average cost:
                                        </div>
                                        <div className="row h5">
                                            Distance:
                                        </div>
                                        <div className="row mb-3 justify-content-center">
                                            <a className="text-white" href={"#tiles"}>
                                                <button type="submit" className="btn btn-primary mt-5">
                                                    Pick route
                                                </button>
                                            </a>
                                        </div>
                                    </div>
                                    <div className="col mr-4">
                                        <div className="row bg-light m-2 flex-nowrap rounded" style={{overflowX: "scroll"}}>
                                        {this.state.routes[item].map(item => 
                                        <div className="px-5">
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
