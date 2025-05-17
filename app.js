async function searchActive() {
  const input = document.querySelector(".nav__input");
  input.focus();
  //   await searchIconClick();
}

async function searchIconClick() {
  const input = document.querySelector(".nav__input");
  const value = document.querySelector(".nav__input").value;
  if (!value) return;

  searchResult(value);
  await Movie.renderMovies(value);
  input.value = "";
}

async function searchBarEnter(event) {
  let value = document.querySelector(".nav__input").value;
  const input = document.querySelector(".nav__input");
  //   if (!value) {
  //     alert("please enter movie name to search");
  //     return;
  //   }
  if (event.keyCode == 13) {
    if (input === document.activeElement) {
      searchResult(value);
      await Movie.renderMovies(value);
    }
    value = document.querySelector(".movie__input").value;
    // if (!value) {
    //   alert("please enter movie name to search");
    //   return;
    // }
    searchResult(value);
    await Movie.renderMovies(value);
    document.querySelector(".movie__input").value = "";
    input.value = "";
  }
}
async function searchBarClick() {
  const input = document.querySelector(".movie__input");

  if (!input.value) {
    console.log("no value");
    alert("please enter movie name to search");
    return;
  }
  searchResult(input.value);
  await Movie.renderMovies(input.value);
  input.value = "";
}

function searchResult(value) {
  if (!value) return;
  const searchBar = document.querySelector(".movies__top");

  const searchResult = document.querySelector(".movie__search--result");

  const searchBarHTML = `<h2 class="movies__top--title">
  Search results for:
</h2>
<h2 class="movie__search--result">"${value}"</h2>`;

  searchBar.innerHTML = searchBarHTML;

  searchBar.classList.add("movie__search--result-visible");
}
