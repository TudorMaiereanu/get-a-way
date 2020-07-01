"use strict";

import { withRouter } from 'react-router-dom';
import React from 'react';

import Page from './Page';

import styled from "styled-components";


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
                    <p className="h1 text-center" style={{paddingTop: "150px"}}>Choose your priorities.</p>
                    <p className="h3 mt-3 text-center" style={{paddingBottom: "50px"}}>
                        In order to find the perfect route for you, we would like to know more about what you value in your travels
                    </p>
                    <div className="d-flex justify-content-center">
                        <form onSubmit={this.handleSubmit}>
                            <div className="row mt-5">
                                <div className="col">
                                    <p className="h5 text-left ml-5" for="startLocation">Reduce COVID-19 Exposure</p>
                                </div>
                                <div className="col">
                                    <InputRange type="range"  min="0" max="1" step="0.05" />
                                </div>
                            </div>
                            <div className="row mt-5">
                                <div className="col">
                                    <p className="h5 text-left ml-5" for="startLocation">Improve Weather”</p>
                                </div>
                                <div className="col">
                                    <InputRange type="range"  min="0" max="1" step="0.05" />
                                </div>
                            </div>
                            <div className="row mt-5">
                                <div className="col">
                                    <p className="h5 text-left ml-5" for="startLocation">Lower Costs</p>
                                </div>
                                <div className="col">
                                    <InputRange type="range"  min="0" max="1" step="0.05" />
                                </div>
                            </div>
                            <div className="row mt-5">
                                <div className="col">
                                    <p className="h5 text-left ml-5" for="startLocation">Minimize Carbon-Footprint</p>
                                </div>
                                <div className="col">
                                    <InputRange type="range" min="0" max="1" step="0.05"/>
                                </div>
                            </div>
                            <div className="row mt-5">
                                <div className="col">
                                    <p className="h5 text-left ml-5" for="startLocation">Shorten Travel Time</p>
                                </div>
                                <div className="col">
                                    <InputRange type="range" min="0" max="1" step="0.05"/>
                                </div>
                            </div>

                            <div className="text-center mt-5">
                                <button type="submit" className="btn btn-primary mt-5">
                                    <a href={"#routes"} className="text-white">
                                        Get a way
                                    </a>
                                </button>
                            </div>
                        </form>
                    </div>
                </div>
            </Page>
        );
    }
}

const InputRange = styled.input`
{
    -webkit-appearance: none;
    background-color: #ddd;
    overflow: hidden;
    width: 400px;
  }
  
  &::-webkit-slider-runnable-track {
    -webkit-appearance: none;
    height: 20px;
  }
  
  &::-webkit-slider-thumb {
    -webkit-appearance: none;
    background: #333;
    border-radius: 50%;
    box-shadow: -210px 0 0 200px #666;
    cursor: pointer;
    height: 20px;
    width: 20px;
  }
`;

export default withRouter(PriorityPage);
