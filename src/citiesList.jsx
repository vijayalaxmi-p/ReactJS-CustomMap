import React, { useEffect } from "react";
import { Marker, Popup } from 'react-leaflet'
import "leaflet/dist/leaflet.css";
import "./styles.css";
import { useDispatch, useSelector } from "react-redux";
import {getPosts} from "./Actions";
import L from "leaflet";
import popLogo from './resources/images/population_boy.jpg';


export default function CitiesList() {
    const populationIcon = L.icon({
        iconUrl: popLogo,
        iconSize: [20, 20],
        iconAnchor: [12, 12],
        popupAnchor: [0, 0],
    });
    const { posts } = useSelector((state) => state.post);
    const dispatch = useDispatch();
    useEffect(() => {
        dispatch(getPosts());
    }, []);

    return (
        <>
            {posts.map((city, idx) => (
                city.ispoplogo == "true" ?
                    <Marker icon={populationIcon}
                        position={[city.lat, city.lng]}
                        key={idx}>
                        <Popup>
                            <b>
                                {city.city}-{city.year}-{city.population}
                            </b>
                        </Popup>
                    </Marker> : null))}
        </>
    );
}
