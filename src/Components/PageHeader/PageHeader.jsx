import React from "react";
import "./PageHeader.css";

const PageHeader = ({title = "Page Title"}) => {
    return (
        <div className="PageHeader">
            <div className="title"> 
                {title}
            </div>
        </div>
    );
}

export default PageHeader;