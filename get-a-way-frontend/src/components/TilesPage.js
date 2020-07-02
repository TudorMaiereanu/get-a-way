"use strict";

import { withRouter } from 'react-router-dom';
import React from 'react';
import ItemsCarousel from 'react-items-carousel';

const mockData = require('./constants/mockData');
const routeIndex = "2";

import Page from './Page';

class RouteSelectionPage extends React.Component {

    constructor(props) {
        super(props);

        this.state = {
            activeItemIndex: 0,
            routeStopNames: mockData.routes[routeIndex].stopsList,
            routeStops: [],
            weatherMockDict: {
                1: "fas fa-sun",
                2:  "fas fa-sun",
                3:  "fas fa-cloud-sun",
                4:  "fas fa-cloud-sun",
                5:  "fas fa-cloud-sun-rain",
                6:  "fas fa-cloud-sun-rain",
                7:  "fas fa-cloud",
                8:  "fas fa-cloud",
                9:  "fas fa-cloud"
            }
        };
    }

    getObjectByCityName(cityName, routeObjectsList) {
        return routeObjectsList.find(obj => obj.locationName === cityName);
    }

    componentWillMount() {
        const routeObjectsList = mockData.cities.filter(obj => mockData.routes[routeIndex].stopsList.includes(obj.locationName));

        this.state.routeStopNames.forEach((object => {
            this.state.routeStops.push(this.getObjectByCityName(object, routeObjectsList))
        }))
    }


    render() {
        return (
            <Page>
                <div className="w-100" style={{position: "absolute", minHeight: "100%"}}>
                    <div className="row py-2 text-white" style={{backgroundColor: "#3D5C57"}}>
                        {this.state.routeStops.map((item, i) => <div className="col">
                            <p className="text-center h5 text-white">{item.locationName}</p>
                            <p className="text-center text-white">Days: {mockData.routes[routeIndex].dayslist[i]}</p>
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
                        }}
                        rightChevron={<button className="btn btn-primary mt-5" style={{backgroundColor: "#19393B"}}>{'Next'}</button>}
                        leftChevron={<button className="btn btn-primary mt-5" style={{backgroundColor: "#19393B"}}>{'Prev'}</button>}
                    >
                        {this.state.routeStops.map((item, i) =>
                            <div className="col-100">
                                <div className="row mt-5 mb-3 ml-3">
                                    <h1 className="mt-3">{item.locationName}</h1>
                                </div>
                                <div className="row mb-5 mx-3">
                                    <p className="h5">{item.locationDescription}</p>
                                </div>
                                <div className="row mb-2">
                                    <div class="col-5 mt-3">
                                        <div class="card m-3" style={{borderRadius: "20px"}}>
                                            <div id={`carouselExampleIndicators${item.locationName}`} class="carousel slide" data-ride="carousel">
                                                <ol class="carousel-indicators">
                                                    <li data-target={`#carouselExampleIndicators${item.locationName}`}  data-slide-to="0" class="active"></li>
                                                    <li data-target={`#carouselExampleIndicators${item.locationName}`} data-slide-to="1"></li>
                                                    <li data-target={`#carouselExampleIndicators${item.locationName}`}  data-slide-to="2"></li>
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
                                                <a class="carousel-control-prev" href={`#carouselExampleIndicators${item.locationName}`} role="button" data-slide="prev">
                                                    <span class="carousel-control-prev-icon" aria-hidden="true"></span>
                                                    <span class="sr-only">Previous</span>
                                                </a>
                                                <a class="carousel-control-next" href={`#carouselExampleIndicators${item.locationName}`} role="button" data-slide="next">
                                                    <span class="carousel-control-next-icon" aria-hidden="true"></span>
                                                    <span class="sr-only">Next</span>
                                                </a>
                                            </div>
                                            <div class="card-body text-center" style={{overflowX: "auto"}}>
                                                <h5>{item.locationName}</h5>
                                                <p>Days: 5</p>
                                            </div>
                                        </div>
                                    </div>
                                    <div class="col-7 mt-3">
                                        <div className="m-3">
                                            <h2>Restrictions in {item.locationCountryName}</h2>
                                            <div className="mt-4" style={{height: "300px", overflowY: "auto"}}>
                                                <p className="h4">May I freely move within this country?</p>
                                                <p className="mb-4" style={{fontSize: "18px"}} >{item.locationRegulations.first}</p>
                                                <p className="h4">May I transit this country?</p>
                                                <p className="mb-4" style={{fontSize: "17px"}}>{item.locationRegulations.second}</p>
                                                <p className="h4">Is a mask required in public? </p>
                                                <p style={{fontSize: "18px"}} >{item.locationRegulations.second}</p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="row pt-5" style={{maxHeight: "400px"}}>
                                    <div className="col">
                                        <p className="h3">14-day Corona cases forecast in {item.locationName}</p>
                                    </div>
                                </div>
                                <div className="row" style={{maxHeight: "400px"}}>
                                    <div className="col">
                                        <img src="https://3qeqpr26caki16dnhd19sv6by6v-wpengine.netdna-ssl.com/wp-content/uploads/2018/08/Line-Plot-of-Monthly-Car-Sales.png" height="400px" width="100%"/>
                                    </div>
                                </div>
                                <div className="row pt-5" style={{maxHeight: "400px"}}>
                                    <div className="col">
                                        <p className="h3">Forecast in {item.locationName}</p>
                                    </div>
                                </div>
                                <div className="row mb-5" style={{maxHeight: "400px"}}>
                                        {this.state.routeStops[this.state.activeItemIndex].weatherList.map((iconValue, i) => 
                                        <div className="col">
                                            <button type="button" className="btn btn-default btn-lg">
                                                <i className={this.state.weatherMockDict[iconValue]}></i>
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
