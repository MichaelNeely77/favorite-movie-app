const addMovieBtn = document.getElementById('add-movie-btn');
const searchBtn = document.getElementById('search-btn');

const movies = [];
const renderMovies = (filter = '') => {
    const movieList = document.getElementById('movie-list');

    if (movies.length === 0) {
        movieList.classList.remove('visible');
        return;
    } else {
        movieList.classList.add('visible');
    }
    movieList.innerHTML = ''; // clears fields; not ideal but it works for now

    const filteredMovies = !filter ? movies : movies.filter(movie => movie.info.title.includes(filter));

    filteredMovies.forEach((movie) => {
        const movieEl = document.createElement('li');

        const { info, ...otherProps } = movie;
        console.log(otherProps);
        // const { title: movieTitle } = info; No longer needed after formatting the title
        // const { getFormattedTitle } =movie;
        let text = movie.getFormattedTitle() + ' - ';
        for (const key in info) {
            if (key !== 'title') {
                text = text + `${key}: ${info[key]}`;
            }
        }
        movieEl.textContent = text;
        movieList.append(movieEl);
    });
};
const addMovieHandler = () => {
    const title = document.getElementById('title').value;
    const extraName = document.getElementById('extra-name').value;
    const extraValue = document.getElementById('extra-value').value;





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
        id: Math.random().toString(),
        getFormattedTitle: function() {
            return this.info.title.toUpperCase();
        }
    };
    movies.push(newMovie);
    renderMovies();
};

const searchMovieHandler = () => {
    const filterTerm = document.getElementById('filter-title').value;
    renderMovies(filterTerm);
};

addMovieBtn.addEventListener('click', addMovieHandler);
searchBtn.addEventListener('click', searchMovieHandler);

