import createFullofMovie from "./createFullofMovie.js";
import sortMovies from "../js/const.js";

export default function createElementMovie(movies) {
    sortMovies(movies);
    const pop = document.querySelector('.pop');
    pop.textContent = '';
    const mItem = document.createElement('li');
    mItem.classList.add('m-item');
    const mLink = document.createElement('a');
    mLink.classList.add('m-link');

    let count = 0;
    movies.forEach(movie => {
        if(count < 6) {
            const mItem = document.createElement('li');
            mItem.classList.add('m-item');
            const mLink = document.createElement('a');
            mLink.classList.add('m-link');
            mLink.setAttribute('href', `l?id=${movie.imdbID}`);
    
            mLink.innerHTML = `
                <div class="m-img">
                    <img src="${movie.Poster}" alt="${movie.Title}">
                </div> 
    
                <div class="info">
                    <span class="name">${movie.Title}</span>
    
                    <div class="rating">
                        <svg>
                            <use xlink:href="images/icons/sprite.svg#star"></use>
                        </svg>
    
                        <span class="rating__num">${movie.imdbRating}</span>
                    </div>
                </div>
            `; 
    
            mLink.addEventListener('click', (e) => {
                e.preventDefault();

                createFullofMovie(movie);
            });
            
            pop.appendChild(mItem); 
            mItem.appendChild(mLink);
        }
        count++;
    }); 
}