import getDataTitle from '../service/getDataTitle.js';
import getExtendedData from '../service/getExtended.js';
import createElementStatic from './createElementStatic.js';

export default async function createStaticList() {
    const data = await getDataTitle('Lord', getExtendedData);
    createElementStatic(data);
}