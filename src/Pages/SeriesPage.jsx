import React, { useState, useEffect } from "react";
import PageHeader from "../Components/PageHeader/PageHeader";
import ProgramsDisplay from "../Components/ProgramsDisplay/ProgramsDisplay";
import filterSeries from "../Utils/filterSeries";

const SeriesPage = () => {
    const [series, setSeries] = useState([]);

    useEffect(() => {
        async function fetchData() {
            try {
                const response = await fetch("https://raw.githubusercontent.com/StreamCo/react-coding-challenge/master/feed/sample.json");
                const responseJSON =  await response.json();
                setSeries(filterSeries(responseJSON));
            } catch(err) {
                console.log("There was an error fetching the API")
                return undefined
            }
        }
        fetchData();
    }, [])

    return (
        <>
            <PageHeader title="Popular Series" />
            <ProgramsDisplay programs={series} />
        </>
    );
}

export default SeriesPage;