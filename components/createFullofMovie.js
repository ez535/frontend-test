export default function createFullofMovie(movie) {
    document.body.style.overflowY = "hidden";

    const article = document.createElement('article');
    article.classList.add('article');

    const divMovie = document.createElement('div');
    divMovie.classList.add('movie');

    const movieHeader = document.createElement('div');
    movieHeader.classList.add('movie-header');
    movieHeader.style.backgroundImage =  "url(" + movie.Poster + ")";

    const title = document.createElement('h3');
    title.classList.add('movie__name');
    title.textContent = movie.Title;



    const close = document.createElement('button');
    close.classList.add('close');
    close.innerHTML = '<svg> <use xlink:href="images/icons/sprite.svg#close"></use></svg>';

    const act = document.createElement('div');
    act.classList.add('act');

    const btnPlay = document.createElement('button');
    btnPlay.classList.add('play');
    btnPlay.innerHTML = '<svg><use xlink:href="images/icons/sprite.svg#play"></use></svg>';

    const btnPlayText = document.createElement('span');
    btnPlayText.textContent = 'Смотреть';

    const btnList = document.createElement('ul');
    btnList.classList.add('act__list');

    const btnLiFav = document.createElement('li');
    btnLiFav.classList.add('act__item');

    const btnLiShare = document.createElement('li');
    btnLiShare.classList.add('act__item');

    const favoriteButton = document.createElement('button');
    favoriteButton.classList.add('act__btn', 'bookmark');
    favoriteButton.setAttribute('type', 'button');
    favoriteButton.innerHTML = '<svg><use xlink:href="images/icons/sprite.svg#bookmark"></use></svg>';

    const shareButton = document.createElement('button');
    shareButton.classList.add('act__btn', 'share');
    shareButton.setAttribute('type', 'button');
    shareButton.innerHTML = '<svg><use xlink:href="images/icons/sprite.svg#share"></use></svg>';

    const addInfo = document.createElement('div');
    addInfo.classList.add('add-info');

    const rating = document.createElement('div');
    rating.classList.add('rating');
    rating.innerHTML = '<svg><use xlink:href="images/icons/sprite.svg#star"></use></svg>';

    const ratingNum = document.createElement('span');
    ratingNum.classList.add('rating__num');
    ratingNum.textContent = movie.imdbRating;

    const year = document.createElement('p');
    year.classList.add('year');
    year.textContent = movie.Year;

    const age = document.createElement('div');
    age.classList.add('age__block');

    const ageText = document.createElement('p');
    ageText.classList.add('age');
    ageText.textContent = movie.Rated;

    const movieFooter = document.createElement('div');
    movieFooter.classList.add('movie__footer');

    const genreList = document.createElement('ul');
    genreList.classList.add('genre__list');
    const genres = movie.Genre.split(' ');
    genres.forEach((genre) => {
        const itemGenre = document.createElement('li');
        itemGenre.classList.add('genre__item');
        itemGenre.textContent = genre.replace(",", "");
        genreList.appendChild(itemGenre);
    })

    const descr = document.createElement('p');
    descr.classList.add('descr');
    descr.textContent = movie.Plot;

    function closeModal() {
        document.body.style.overflowY = "auto";
        article.remove();
    }

    close.addEventListener('click', ()=> {
        closeModal();
    })

    article.addEventListener('click', (e)=> {
        if(!divMovie.contains(e.target)) {
            closeModal();
        }
    })

    article.appendChild(divMovie);
    divMovie.appendChild(movieHeader);
    divMovie.appendChild(movieFooter);
    movieHeader.appendChild(title);
    movieHeader.appendChild(close);
    movieHeader.appendChild(act);
    movieHeader.appendChild(close);
    act.appendChild(btnPlay);
    btnPlay.appendChild(btnPlayText);
    act.appendChild(btnList);
    btnList.appendChild(btnLiFav);
    btnLiFav.appendChild(favoriteButton);
    btnList.appendChild(btnLiShare);
    btnLiShare.appendChild(shareButton);
    movieHeader.appendChild(addInfo);
    addInfo.appendChild(rating);
    rating.appendChild(ratingNum);
    addInfo.appendChild(year);
    movieHeader.appendChild(age);
    age.appendChild(ageText);
    movieFooter.appendChild(genreList);
    movieFooter.appendChild(descr);

    document.body.appendChild(article);
}