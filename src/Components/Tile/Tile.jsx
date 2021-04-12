import React from "react";
import { Link } from "react-router-dom";
import "./Tile.css";

const Tile = ({title = "Default Title", img = "/default.jpg", route = "undefined"}) => {
    return (
        <Link to={route} className="Tile" style={{ textDecoration: 'none' }}>
            <img src={img} alt=""/>
            <p>{`${title}`}</p>
        </Link>
    );
}

export default Tile;