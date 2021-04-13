import React from "react";
import Tile from "../Tile/Tile";
import "./ProgramsDisplay.css";

const ProgramsDisplay = ({programs = []}) => {
    const renderLoading = () => <p>Loading...</p>
    const renderPrograms = () => programs.map(program => <Tile key={program.title} title={program.title} img={program.images["Poster Art"].url} />)
    return (
        <div className="ProgramsDisplay">
            {programs.length > 0 ? renderPrograms() : renderLoading()}
        </div>
    );
}

export default ProgramsDisplay;