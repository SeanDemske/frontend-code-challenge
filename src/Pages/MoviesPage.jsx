import React from "react";
import PageHeader from "../Components/PageHeader/PageHeader";
import ProgramsDisplay from "../Components/ProgramsDisplay/ProgramsDisplay";

const MoviesPage = () => {
    return (
        <>
            <PageHeader title="Popular Movies" />
            <ProgramsDisplay />
        </>
    );
}

export default MoviesPage;