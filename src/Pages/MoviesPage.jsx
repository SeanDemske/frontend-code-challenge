import React, { useState, useEffect } from "react";
import PageHeader from "../Components/PageHeader/PageHeader";
import ProgramsDisplay from "../Components/ProgramsDisplay/ProgramsDisplay";
import filterMovies from "../Utils/filterMovies";

const MoviesPage = () => {
    const [movies, setMovies] = useState([]);

    useEffect(() => {
        async function fetchData() {
            try {
                const response = await fetch("https://raw.githubusercontent.com/StreamCo/react-coding-challenge/master/feed/sample.json");
                const responseJSON =  await response.json();
                setMovies(filterMovies(responseJSON));
            } catch(err) {
                console.log("There was an error fetching the API")
                return undefined
            }
        }
        fetchData();
    }, [])

    return (
        <>
            <PageHeader title="Popular Movies" />
            <ProgramsDisplay programs={movies} />
        </>
    );
}

export default MoviesPage;