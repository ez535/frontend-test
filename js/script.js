import createPopList from "../components/createPopList.js";
import createSearch from "../components/createSearch.js";
import createStaticList from "../components/createStaticList.js";
import {
    inputForMovie,
    closeSearch, 
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
    document.querySelector('.section_v').classList.add('none'); 
})

inputForMovie.addEventListener('input', ()=> {
    (inputForMovie.value !== '') ? closeSearch.style.display = 'block' : console.log(111);
})

// inputForMovie.addEventListener('blur' , ()=> {
//     closeSearch.style.display = 'none';
// })

closeSearch.addEventListener('click', ()=> {
    inputSearch.value = '';
    inputSearch.focus();
    closeSearch.style.display = 'none'
})

searchForm.addEventListener('submit' , (e)=> {
    e.preventDefault();

    createSearch(inputForMovie.value);
})

btnSearch.addEventListener('click', (e)=> {
    if(searchForm.classList.contains('active')) {
        searchForm.classList.remove('active');
        document.querySelector('.section_v').classList.remove('none');    
    } else {
        searchForm.classList.add('active');
        inputSearch.focus();
        document.querySelector('.section_v').classList.add('none');    
    }
})

btnDelete.addEventListener('click', (e)=> {
    e.preventDefault();

    inputSearch.value = '';
    searchForm.classList.remove('active');
})