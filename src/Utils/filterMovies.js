function filterMovies(programs) {
    const movies = programs.entries.filter(program => program.programType === "movie" && program.releaseYear > 2010);

    const sortedByTitle = movies.sort((a, b) => {
        if (a.title < b.title) return -1; 
        if (a.title > b.title) return 1; 
        return 0;
    });
    
    return sortedByTitle.slice(0, 21);
}

export default filterMovies;