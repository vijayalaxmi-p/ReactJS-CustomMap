import React, { useEffect } from "react";
import { Marker, Popup } from 'react-leaflet'
import "leaflet/dist/leaflet.css";
import "./styles.css";
import { useDispatch, useSelector } from "react-redux";
import {getPosts} from "./Actions";
import L from "leaflet";
import optisolImage from './resources/images/optisol_img.png';

export default function Optisol() {
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
            {posts.map((optisol, idx) => (
                optisol.isoptilogo == "true" ?
                    <Marker icon={optisolLogo}
                        position={[optisol.lat, optisol.lng]}
                        key={idx}>
                        <Popup>
                            <b>
                                {optisol.address}
                            </b>
                        </Popup>
                    </Marker> : null
            ))}
        </>
    );
}
