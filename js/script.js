import createPopList from "../components/createPopList.js";
import createSearch from "../components/createSearch.js";
import createStaticList from "../components/createStaticList.js";
import { 
    searchForm, 
    searchBtn, 
    headingChange, 
    btnSearch, 
    inputSearch,
    btnDelete
} from "./const.js";

document.addEventListener('DOMContentLoaded', ()=> {
    createPopList();
    createStaticList();
})

searchBtn.addEventListener('click', () => {
    headingChange.textContent = 'Поиск...';
})

searchForm.addEventListener('submit' , (e)=> {
    e.preventDefault();
    const inputForMovie = document.querySelector('.input');
    const valueInputMovie = inputForMovie.value;
    createSearch(valueInputMovie);
})

btnSearch.addEventListener('click', (e)=> {
    searchForm.classList.add('active');
    inputSearch.focus();
    document.querySelector('.section_v').classList.add('none');
})

btnDelete.addEventListener('click', (e)=> {
    e.preventDefault();
    inputSearch.value = '';
    searchForm.classList.remove('active');
    document.querySelector('.section_v').classList.remove('none');
})