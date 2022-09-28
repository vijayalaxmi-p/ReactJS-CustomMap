import React, { useEffect } from "react";
import { Marker, Popup } from 'react-leaflet'
import "leaflet/dist/leaflet.css";
import "./styles.css";
import { useDispatch, useSelector } from "react-redux";
import { getPosts } from "./Actions";
import L from "leaflet";
import popLogo from './resources/images/population_boy.jpg';
import optisolImage from './resources/images/optisol_img.png';

export default function CitiesOptisol() {

    const populationIcon = L.icon({
        iconUrl: popLogo,
        iconSize: [20, 20],
        iconAnchor: [12, 12],
        popupAnchor: [0, 0],
    });

    const optisolLogo = L.icon({
        iconUrl: optisolImage,
        iconSize: [25, 25],
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
            {posts.map((posts, idx) => (

                posts.isoptilogo === "true" ?
                    <Marker icon={optisolLogo}
                        position={[posts.lat, posts.lng]}
                        key={idx}
                    >
                        <Popup>
                            <b>
                                {posts.address}
                            </b>
                        </Popup>
                    </Marker> : <Marker icon={populationIcon}
                        position={[posts.lat, posts.lng]}
                        key={idx}
                    >
                        <Popup>
                            <b>
                                {posts.city}-{posts.year}-{posts.population}
                            </b>
                        </Popup>
                    </Marker>))}
        </>
    );
}
