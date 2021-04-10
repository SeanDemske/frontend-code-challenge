import React from "react";
import PageHeader from "../Components/PageHeader/PageHeader";
import ProgramsDisplay from "../Components/ProgramsDisplay/ProgramsDisplay";

const SeriesPage = () => {
    return (
        <>
            <PageHeader title="Popular Series" />
            <ProgramsDisplay />
        </>
    );
}

export default SeriesPage;