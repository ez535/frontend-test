export const API_URL = 'http://www.omdbapi.com/?i=tt3896198&apikey=b0f3c17b';
export const POSTER_API = 'http://img.omdbapi.com/?apikey=b0f3c17b&';
export const API_KEY = 'b0f3c17b';


const randomSearchTerms = ['action', 'comedy', 'drama', 'adventure'];
export const randomTerm = randomSearchTerms[Math.floor(Math.random() * randomSearchTerms.length)];

export const searchBtn = document.querySelector('.btn');
export const closeSearch = document.querySelector('.close-search');
export const searchForm = document.querySelector('form');
export const headingChange = document.querySelector('.heading');
export const btnSearch = document.querySelector('.btn-search');
export const inputSearch = document.querySelector('.input');
export const btnDelete = document.querySelector('.delete');
export const inputForMovie = document.querySelector('.input');

export default function sortMovies(arr) {
    return arr.sort((a, b) => b.Year - a.Year);
}