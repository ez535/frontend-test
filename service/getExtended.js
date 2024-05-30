import {API_KEY} from '../js/const.js';

export default async function getExtendedData(id) {
  try {
    const response = await fetch(`https://www.omdbapi.com/?i=${id}&plot=full&apikey=${API_KEY}`);
    if (!response.ok) {
      throw new Error('Ошибка при выполнении запроса: ' + response.statusText);
    }
    const movieData = await response.json();
    return movieData;
  } catch (err) {
    throw new Error('Сетевая ошибка');
  }
}