import getDataBase from '../service/getDataBase.js';
import getExtendedData from '../service/getExtended.js';
import createElementPopMovie from './createElementPopMovie.js';
import { randomTerm } from '../js/const.js';

export default async function createPopList() {
    const data = await getDataBase(randomTerm, getExtendedData);
    createElementPopMovie(data);
}