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
                    <p className="h2">Your routes</p>
                    <div className="col-100">
                        {Object.keys(this.state.routes).map(item => <div className="row my-5 bg-dark p-5 mx-2">
                            {this.state.routes[item].map(item => <div class="card mx-3" style={{width: "150px"}}>
                                <img class="card-img-top" src="..." alt="Card image cap" />
                                <div class="card-body">
                                    <h5 class="card-title">{item}</h5>
                                    <a href="#" class="btn btn-primary">Expand card</a>
                                </div>
                            </div>)}
                        </div>)}
                    </div>
                </div>
            </Page>
        );
    }
}

export default withRouter(RouteSelectionPage);
