import React from "react"
import PageHeader from "../Components/PageHeader/PageHeader";
import Tile from "../Components/Tile/Tile";
import "../Components/ProgramsDisplay/ProgramsDisplay.css";

const HomePage = () => {
    const tiles = [
        {
            id: 1,
            title: "Popular Series",
            img: "/series.png",
            route: "/series"
        },
        {
            id: 2,
            title: "Popular Movies",
            img: "/movies.png",
            route: "/movies"
        }
    ]

    return (
        <>
            <PageHeader title="Popular Titles" />
            <div className="ProgramsDisplay">
                {tiles.map(tile => {
                    return <Tile key={tile.id} img={tile.img} title={tile.title} route={tile.route} />
                })}
            </div>
        </>
    );
}

export default HomePage;