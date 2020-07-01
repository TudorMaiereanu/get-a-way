"use strict";

import { withRouter } from 'react-router-dom';
import React from 'react';
import ItemsCarousel from 'react-items-carousel';


import Page from './Page';

class RouteSelectionPage extends React.Component {

    constructor(props) {
        super(props);

        this.state = {
            activeItemIndex: 0,
            selectedCity: "Munich",
            selectedCityClass: "h5 text-center text-white",
            routeStops: [
                {
                    name: "Munich",
                    selected: true,
                    weatherMockList: ["fas fa-cloud", "fas fa-cloud", "fas fa-cloud", "fas fa-cloud-sun", "fas fa-sun", "fas fa-cloud", "fas fa-cloud-sun-rain", "fas fa-sun"],
                    class: ""
                },
                {
                    name: "Zurich",
                    selected: false,
                    weatherMockList: ["fas fa-cloud-sun-rain", "fas fa-sun", "fas fa-cloud", "fas fa-cloud-sun", "fas fa-sun", "fas fa-sun", "fas fa-cloud-sun-rain", "fas fa-cloud"],
                    class: "",
                },
                {
                    name: "Lyon",
                    selected: false,
                    weatherMockList: ["fas fa-cloud", "fas fa-cloud", "fas fa-cloud", "fas fa-cloud-sun", "fas fa-sun", "fas fa-sun", "fas fa-cloud-sun-rain", "fas fa-sun-rain"],
                },
                {
                    name: "Barcelona",
                    selected: false,
                    weatherMockList: [ "fas fa-sun", "fas fa-sun", "fas fa-cloud", "fas fa-cloud", "fas fa-cloud", "fas fa-cloud-sun", "fas fa-cloud-sun-rain", "fas fa-cloud"],
                },
                {
                    name: "Montpellier",
                    selected: false,
                    weatherMockList: ["fas fa-cloud", "fas fa-cloud-sun", "fas fa-cloud", "fas fa-sun", "fas fa-cloud-sun-rain", "fas fa-cloud", "fas fa-cloud", "fas fa-sun"],
                },
                {
                    name: "Geneva",
                    selected: false,
                    weatherMockList: ["fas fa-cloud", "fas fa-cloud", "fas fa-cloud", "fas fa-cloud-sun", "fas fa-sun", "fas fa-sun", "fas fa-cloud-sun-rain", "fas fa-cloud"],
                }
            ]
        };

    }


    render() {
        return (
            <Page>
                <div className="w-100" style={{position: "absolute", minHeight: "100%"}}>
                    <div className="row py-2 text-white" style={{backgroundColor: "#3D5C57"}}>
                        {this.state.routeStops.map((item, i) => <div className="col">
                            <p className="text-center h5 text-white">{item.name}</p>
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
                            this.forceUpdate();
                            console.log(value);
                        }}
                        rightChevron={<button className="btn btn-primary mt-5" style={{backgroundColor: "#19393B"}}>{'Next'}</button>}
                        leftChevron={<button className="btn btn-primary mt-5" style={{backgroundColor: "#19393B"}}>{'Prev'}</button>}
                    >
                        {this.state.routeStops.map((item, i) =>
                            <div className="col-100">
                                <div className="row mb-2">
                                    <div class="col-5 my-auto">
                                        <div class="card m-3" style={{borderRadius: "20px"}}>
                                            <div id={`carouselExampleIndicators${item.name}`} class="carousel slide" data-ride="carousel">
                                                <ol class="carousel-indicators">
                                                    <li data-target={`#carouselExampleIndicators${item.name}`}  data-slide-to="0" class="active"></li>
                                                    <li data-target={`#carouselExampleIndicators${item.name}`} data-slide-to="1"></li>
                                                    <li data-target={`#carouselExampleIndicators${item.name}`}  data-slide-to="2"></li>
                                                </ol>
                                                <div class="carousel-inner">
                                                    <div class="carousel-item active">
                                                    <   img class="d-block w-100" src="https://www.w3schools.com/w3images/fjords.jpg" height="300px" alt="First slide"/>
                                                    </div>
                                                    <div class="carousel-item">
                                                        <img class="d-block w-100" src="https://www.w3schools.com/w3images/fjords.jpg" height="300px" alt="Second slide"/>
                                                    </div>
                                                    <div class="carousel-item">
                                                        <img class="d-block w-100" src="https://www.w3schools.com/w3images/fjords.jpg" height="300px" alt="Third slide"/>
                                                    </div>
                                                </div>
                                                <a class="carousel-control-prev" href={`#carouselExampleIndicators${item.name}`} role="button" data-slide="prev">
                                                    <span class="carousel-control-prev-icon" aria-hidden="true"></span>
                                                    <span class="sr-only">Previous</span>
                                                </a>
                                                <a class="carousel-control-next" href={`#carouselExampleIndicators${item.name}`} role="button" data-slide="next">
                                                    <span class="carousel-control-next-icon" aria-hidden="true"></span>
                                                    <span class="sr-only">Next</span>
                                                </a>
                                            </div>
                                            <div class="card-body text-center" style={{overflowX: "auto"}}>
                                                <h5>{item.name}</h5>
                                                <p>Days: 5</p>
                                            </div>
                                        </div>
                                    </div>
                                    <div class="col-7">
                                        <div className="m-3">
                                            <h5>Restrictions in {item.name}</h5>
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
                                        <p className="h3">14-day Corona cases forecast in {item.name}</p>
                                    </div>
                                </div>
                                <div className="row" style={{maxHeight: "400px"}}>
                                    <div className="col">
                                        <img src="https://3qeqpr26caki16dnhd19sv6by6v-wpengine.netdna-ssl.com/wp-content/uploads/2018/08/Line-Plot-of-Monthly-Car-Sales.png" height="400px" width="100%"/>
                                    </div>
                                </div>
                                <div className="row pt-5" style={{maxHeight: "400px"}}>
                                    <div className="col">
                                        <p className="h3">Forecast in {item.name}</p>
                                    </div>
                                </div>
                                <div className="row" style={{maxHeight: "400px"}}>
                                        {this.state.routeStops[this.state.activeItemIndex].weatherMockList.map((iconName, i) => 
                                        <div className="col">
                                            <button type="button" className="btn btn-default btn-lg">
                                                <i className={iconName}></i>
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
