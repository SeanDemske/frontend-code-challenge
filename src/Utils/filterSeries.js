function filterSeries(programs) {
    const series = programs.entries.filter(program => program.programType === "series" && program.releaseYear > 2010);

    const sortedByTitle = series.sort((a, b) => {
        if (a.title < b.title) return -1; 
        if (a.title > b.title) return 1; 
        return 0;
    });
    
    return sortedByTitle.slice(0, 21);
}

export default filterSeries;