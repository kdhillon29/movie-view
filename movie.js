class Movie {
  static apiUrl = 'https://www.omdbapi.com/?type="movie"&apikey=adbacd04';
  static movies = [];

  static async getMovies(value) {
    if (!value) {
      return;
    }
    try {
      //   throw new Error("Error fetching movies");
      const apiUrl = `${this.apiUrl}&s=${value}`;
      const response = await fetch(apiUrl);
      const movieData = await response.json();
      console.log(movieData);

      this.movies =
        movieData.Search && movieData.Search.length > 0
          ? movieData.Search.slice(0, 6)
          : [];
      console.log(this.movies);
    } catch (error) {
      console.log(error);
      alert("Error fetching movies");
    }
  }

  static async renderMovies(value) {
    const movies = document.querySelector(".movies__list");

    movies.innerHTML = `<i class="fa-solid fa-spinner movies__list--loading movies__list--loading-visible"></i>
    `;
    await this.getMovies(value);
    if (!this.movies.length) {
      movies.innerHTML = `<p class="movies__list--no-movies">No movies found</p>`;
      return;
    }
    const moviesHTML = this.movies
      .map(
        (movie) => `
        <div class="movie ">
        <figure class="movie__img--wrapper">
        <img src="${movie.Poster}" alt="" class="movie__img">
        <h3 class="movie__info--title">${movie.Title}</h3>
        <div class="movie__info--list">
            <div class="movie__info">
            <i class="fa-solid fa-clock movie__info--icon"></i>
            <p class="movie__info--text">136m</p>
            </div>
            <div class="movie__info">
            <i class="fa-solid fa-star movie__info--icon"></i>
            <p class="movie__info--text">4.5</p>
            </div>
            <div class="movie__info">
            <i class="fa-solid fa-earth-americas movie__info--icon"></i>
            <p class="movie__info--text">English</p>
            </div>
        </div>
        </figure>
        <h4 class="movie__title">${movie.Title}</h4>
        </div>`
      )
      .join("");
    movies.innerHTML = moviesHTML;
  }
}
