"use strict";

import { withRouter } from 'react-router-dom';
import React from 'react';
import ItemsCarousel from 'react-items-carousel';


import Page from './Page';

class RouteSelectionPage extends React.Component {

    constructor(props) {
        super(props);

        this.state = {
            routeStops: ["Munich", "Zurich", "Mfdsjkfdasfsadontpellier", "Barcelona", "Lyfdshufadsbfkasdfadson", "Geneva", "Munich"],
            activeItemIndex: 0,
            weatherMockList: ["fas fa-cloud", "fas fa-cloud", "fas fa-cloud", "fas fa-cloud-sun", "fas fa-sun", "fas fa-sun", "fas fa-cloud-sun-rain", "fas fa-sun"]
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
                <div className="w-100" style={{position: "absolute", minHeight: "100%"}}>
                    <div className="row py-3 border text-white" style={{backgroundColor: "#3D5C57"}}>
                        {this.state.routeStops.map(item => <div className="col">
                            <h5 className="text-center text-white">{item}</h5>
                            <p className="text-center text-white">Days 5</p>
                        </div>)}
                    </div>
                    <div className="container-fluid" style={{maxWidth:"90%"}}>
                    <ItemsCarousel
                        placeholderItem={<div style={{ height: 600, background: '#EEE' }} />}
                        enablePlaceholder={true}
                        numberOfPlaceholderItems={1}
                        numberOfCards={1}
                        slidesToScroll={1}
                        chevronWidth={100}
                        outsideChevron={true}
                        showSlider={true}
                        alwaysShowChevrons={true}
                        firstAndLastGutter={false}
                        activeItemIndex={this.state.activeItemIndex}
                        requestToChangeActive={(value) => {
                            this.setState({ activeItemIndex: value })
                            console.log(value);
                        }}
                        rightChevron={<button className="btn btn-primary mt-5">{'Next'}</button>}
                        leftChevron={<button className="btn btn-primary mt-5">{'Prev'}</button>}
                    >
                        {this.state.routeStops.map((item, i) =>
                            <div className="col-100">
                                <div className="row mb-5" style={{height: "400px"}}>
                                    <div class="col-5 my-auto">
                                        <div class="card m-3" style={{borderRadius: "20px"}}>
                                            <div id={`carouselExampleIndicators${item}`} class="carousel slide" data-ride="carousel">
                                                <ol class="carousel-indicators">
                                                    <li data-target={`#carouselExampleIndicators${item}`}  data-slide-to="0" class="active"></li>
                                                    <li data-target={`#carouselExampleIndicators${item}`} data-slide-to="1"></li>
                                                    <li data-target={`#carouselExampleIndicators${item}`}  data-slide-to="2"></li>
                                                </ol>
                                                <div class="carousel-inner">
                                                    <div class="carousel-item active">
                                                    <   img class="d-block w-100" src="https://www.w3schools.com/w3images/fjords.jpg" alt="First slide"/>
                                                    </div>
                                                    <div class="carousel-item">
                                                        <img class="d-block w-100" src="https://www.w3schools.com/w3images/fjords.jpg" alt="Second slide"/>
                                                    </div>
                                                    <div class="carousel-item">
                                                        <img class="d-block w-100" src="https://www.w3schools.com/w3images/fjords.jpg" alt="Third slide"/>
                                                    </div>
                                                </div>
                                                <a class="carousel-control-prev" href={`#carouselExampleIndicators${item}`} role="button" data-slide="prev">
                                                    <span class="carousel-control-prev-icon" aria-hidden="true"></span>
                                                    <span class="sr-only">Previous</span>
                                                </a>
                                                <a class="carousel-control-next" href={`#carouselExampleIndicators${item}`} role="button" data-slide="next">
                                                    <span class="carousel-control-next-icon" aria-hidden="true"></span>
                                                    <span class="sr-only">Next</span>
                                                </a>
                                            </div>
                                            <div class="card-body text-center" style={{overflowX: "auto"}}>
                                                <h5>{item}</h5>
                                                <p>Days: 5</p>
                                            </div>
                                        </div>
                                    </div>
                                    <div class="col-7">
                                        <div className="m-3">
                                            <h5>Restrictions in {item}</h5>
                                            <p className="h5" style={{height: "400px", overflowY: "auto"}}>
                                                Note that, for travellers entering from a country, which is qualified a risk area according to the website of the Robert Koch-Institut, in almost all federal states a compulsory 14 day quarantine applies. If the respective federal state has issued an ordninance for travelers from risk countries, travellers need to self-quarantine, contact the local health authority and inform the latter of their entry. This is currently the case for travellers entering from Sweden.
                                                <br />
                                                Note that, for travellers entering from a country, which is qualified a risk area according to the website of the Robert Koch-Institut, in almost all federal states a compulsory 14 day quarantine applies. If the respective federal state has issued an ordninance for travelers from risk countries, travellers need to self-quarantine, contact the local health authority and inform the latter of their entry. This is currently the case for travellers entering from Sweden.
                                                <br />
                                                Note that, for travellers entering from a country, which is qualified a risk area according to the website of the Robert Koch-Institut, in almost all federal states a compulsory 14 day quarantine applies. If the respective federal state has issued an ordninance for travelers from risk countries, travellers need to self-quarantine, contact the local health authority and inform the latter of their entry. This is currently the case for travellers entering from Sweden.
                                            </p>
                                        </div>
                                    </div>
                                </div>
                                <div className="row pt-5" style={{maxHeight: "400px"}}>
                                    <div className="col">
                                        <p className="h3">14-day Corona cases forecast in {item}</p>
                                    </div>
                                </div>
                                <div className="row" style={{maxHeight: "400px"}}>
                                    <div className="col">
                                        <img src="https://3qeqpr26caki16dnhd19sv6by6v-wpengine.netdna-ssl.com/wp-content/uploads/2018/08/Line-Plot-of-Monthly-Car-Sales.png" height="400px" width="100%"/>
                                    </div>
                                </div>
                                <div className="row pt-5" style={{maxHeight: "400px"}}>
                                    <div className="col">
                                        <p className="h3">Forecast in {item}</p>
                                    </div>
                                </div>
                                <div className="row" style={{maxHeight: "400px"}}>
                                        {this.state.weatherMockList.map((item, i) => 

                                        <div className="col">
                                            <button type="button" className="btn btn-default btn-lg">
                                                <i className={item}></i>
                                                <p className="text-center">{i + 20}° C</p>
                                            </button>
                                        </div>
                                        )}
                                </div>
                            </div>
                        )}
                    </ItemsCarousel>
                    </div>
                </div>
            </Page>
        );
    }
}

export default withRouter(RouteSelectionPage);
