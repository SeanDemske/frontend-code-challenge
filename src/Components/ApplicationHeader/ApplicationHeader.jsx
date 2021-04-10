import React from "react";
import { Link } from "react-router-dom";
import "./ApplicationHeader.css";

const ApplicationHeader = () => {
    return (
        <div className="ApplicationHeader">

            <Link to="/" className="title"> 
                DEMO Streaming
            </Link>

            <div className="header-buttons">
                <button className="btn">Log in</button>
                <button className="btn btn-grey">Start your free trial</button>
            </div>

        </div>
    );
}

export default ApplicationHeader;