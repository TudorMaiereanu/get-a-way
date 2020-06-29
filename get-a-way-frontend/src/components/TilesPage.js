"use strict";

import { withRouter } from 'react-router-dom';
import React from 'react';

import Page from './Page';

class RouteSelectionPage extends React.Component {

    constructor(props) {
        super(props);

        this.state = {
            routeStops: ["Munich", "Zurich", "Montpellier", "Barcelona", "Lyon", "Geneva", "Munich"],
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
                    <p className="h2 ml-4">Your route details from Munich to Barcelona: </p>
                    <p className="h2 ml-4">Your stops from Munich to Barcelona: </p>
                    <div className="col">
                    {this.state.routeStops.map(item =>
                        <div className="row mb-5 border">
                            <div class="col-4" style={{maxWidth: "500px"}}>
                                <div class="card m-3" style={{borderRadius: "20px"}}>
                                    <img class="card-img-top" 
                                        src="https://www.w3schools.com/w3images/fjords.jpg"
                                        alt="Card image cap"
                                        style={{borderRadius: "20px 20px 0 0"}}
                                    />
                                    <div class="card-body text-center" style={{overflowX: "auto"}}>
                                        <h5>{item}</h5>
                                        <p>Days: 5</p>
                                    </div>
                                </div>
                            </div>
                            <div class="col-8">
                                <div className="m-3">
                                    <h5>Restrictions in {item}</h5>
                                    <p>
                                        Note that, for travellers entering from a country, which is qualified a risk area according to the website of the Robert Koch-Institut, in almost all federal states a compulsory 14 day quarantine applies. If the respective federal state has issued an ordninance for travelers from risk countries, travellers need to self-quarantine, contact the local health authority and inform the latter of their entry. This is currently the case for travellers entering from Sweden.
                                    </p>
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
