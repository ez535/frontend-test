import {API_KEY} from '../js/const.js';
import getExtendedData from './getExtended.js';

export default async function getDataTitle(title) {
  try {
    const response = await fetch(`https://www.omdbapi.com/?s=${title}&plot=full&apikey=${API_KEY}`);
    if (!response.ok) {
      throw new Error('Ошибка при выполнении запроса: ' + response.statusText);
    }

    const data = await response.json();
    const promises = data.Search.map((item, index) => {
      if (index < 6) return getExtendedData(item.imdbID);
    });

    const extendedData = await Promise.all(promises);
    return extendedData;
  } catch (err) {
    throw new Error('Сетевая ошибка', err);
  }
}