const addMovieBtn = document.getElementById('add-movie-btn');
const searchBtn = document.getElementById('search-btn');

const addMovieHandler = () => {
    const title = document.getElementById('title').value;
    const extraName = document.getElementById('extra-name').value;
    const extraValue = document.getElementById('extra-value').value;

    const movies = [];

    if(
        title.trim() === '' ||
        extraName.trim() === '' ||
        extraValue.trim() === ''
    ) {
        return;
    }

    const newMovie = {
        info: {
            title, // If the key and the value are the same, JavaScript will automatically assign teh value to the key. Will not work, if value is a string
            [extraName]: extraValue
        },
        id: Math.random()
    };
    movies.push(newMovie);
    console.log(newMovie);


};

addMovieBtn.addEventListener('click', addMovieHandler);

