var elList = document.querySelector('.list');

elList.innerHTML = null;

function generateGenres(films, node) {
	var result = [];

	films.forEach((film) => {
		film.genres.forEach((genre) => {
			if (!result.includes(genre)) {
				result.push(genre);
			}
		});
	});

	result.forEach((genre) => {
		const newOption = document.createElement('option');
		newOption.value = genre;
		newOption.textContent = genre;
		node.appendChild(newOption);
	});
}

function renderFilms(arr, node) {

  node.innerHTML = null;

	arr.forEach((film) => {
		var newLi = document.createElement('li');
		var newHeading = document.createElement('h3');
		var newImage = document.createElement('img');
		var newParagraph = document.createElement('p');
		var newTime = document.createElement('time');
		var newGenreList = document.createElement('ul');

		newHeading.textContent = film.title;
		newParagraph.textContent =
			film.overview.split(' ').slice(0, 10).join(' ') + '...';
		newTime.textContent = normalizeDate(film.release_date);

		for (var genre of film.genres) {
			var newGenreLi = document.createElement('li');
			newGenreLi.textContent = genre;
			newGenreList.appendChild(newGenreLi);
		}

		newLi.setAttribute('class', 'list__item film');
		newHeading.setAttribute('class', 'film__heading');
		newImage.setAttribute('class', 'film__image');
		newImage.setAttribute('src', film.poster);
		newImage.setAttribute('alt', film.title + ' poster');

		newImage.setAttribute('width', '200');
		newImage.setAttribute('height', '200');

		newLi.appendChild(newHeading);
		newLi.appendChild(newImage);
		newLi.appendChild(newParagraph);
		newLi.appendChild(newTime);
		newLi.appendChild(newGenreList);

		node.appendChild(newLi);
	});
}

form.addEventListener('submit', (evt) => {
	evt.preventDefault();

  const genreValue = select.value;

  let filteredFilms = [];

  if (genreValue === 'all') {
    filteredFilms = films;
  }else{
    filteredFilms = films.filter(film =>
      film.genres.includes(genreValue),
    );

  }

  renderFilms(filteredFilms, elList);

});

renderFilms(films, elList);
generateGenres(films, select);








