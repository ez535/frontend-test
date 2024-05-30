import getDataTitle from '../service/getDataTitle.js';
import getExtendedData from '../service/getExtended.js';
import createElementPopMovie from './createElementPopMovie.js';
import { headingChange } from '../js/const.js';

export default async function createSearch(title) {
    const data = await getDataTitle(title, getExtendedData);
    if(title.trim() !== '') {
        headingChange.textContent = 'Результаты поиска';
        createElementPopMovie(data);
    } else { 
        alert('Enter a movie title then search!'); 
    } 
}