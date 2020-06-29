"use strict";

import { withRouter } from 'react-router-dom';

import Page from './Page';

// map stuff
import React, { useEffect, useRef, useState } from "react";
import mapboxgl from "mapbox-gl";

const styles = {
  width: "100vw",
  height: "90vh",
};

const MapboxGLMap = (newProps) => {
    const [props, setProps] = useState(newProps);
    const [map, setMap] = useState(null);
    const mapContainer = useRef(null);

    useEffect(() => {
        mapboxgl.accessToken =
        "pk.eyJ1IjoidHVkb3JtYWllcmVhbnUiLCJhIjoiY2tiejl6YjF4MDlyODMybXJkNG43ZWJzNiJ9.cTCPTwyMB8GAXB7Cou8ABQ";
        const initializeMap = ({ setMap, mapContainer }) => {
    
        const map = new mapboxgl.Map({
            container: mapContainer.current,
            style: "mapbox://styles/mapbox/streets-v11", // stylesheet location
            center: [11.57549, 48.13743],
            zoom: 9,
        });

        map.on("load", () => {
            setMap(map);
            map.resize();
        });

        map.on("click", (event) => {
            console.log(event.lngLat)
        });

        var div = window.document.createElement('div');
        div.innerHTML = 'Hello, world!';
        
        var popup = new mapboxgl.Popup({ offset: 25, className: 'card' }).setDOMContent(div);

        var marker = new mapboxgl.Marker()
            .setLngLat([11.57549, 48.13743])
            .setPopup(popup)
            .addTo(map);
        };

        if (!map) initializeMap({ setMap, mapContainer });
    }, [map]);

    return <div ref={el => (mapContainer.current = el)} style={styles} />;
};


class MapPage extends React.Component {

    constructor(props) {
        super(props);

        this.state = {
            map: "map",
        };

        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleSubmit(event) {
        event.preventDefault();

        console.log("Get a way");
        console.log(this.state);
    }

    componentDidMount() {
    }

    render() {
        return (
            <Page>
                <div className="w-100 mt-5" style={{position: "absolute", minHeight: "100%"}}>
                    <MapboxGLMap newProps={this.state}/>
                </div>
            </Page>
        );
    }
}

export default withRouter(MapPage);
