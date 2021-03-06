'use strict'

const filmsButton = document.querySelector('.films-btn');
const personsButton = document.querySelector('.persons-btn');
const searchHeader = document.querySelector('.page-main__header');
let searchType = 'movie';
let searchField = document.querySelector('.page-main__search-field');
const { log } = console;

filmsButton.addEventListener('click', evt => {
    evt.preventDefault();
    if (searchHeader.textContent !== 'Поиск фильмов') {
        searchHeader.style = 'filter: blur(10px); color: #ffffff';
        setTimeout(() => searchHeader.textContent = 'Поиск фильмов', 300);
        setTimeout(() => searchHeader.style = 'filter: blur(0); color: #000000', 350);
        searchField.value = '';
        searchField.placeholder = 'Введите название фильма';
        searchType = 'movie';
    } else {
        return;
    }
})

personsButton.addEventListener('click', evt => {
    evt.preventDefault();
    if (searchHeader.textContent !== 'Поиск фктеров') {
        searchHeader.style = 'filter: blur(10px); color: #ffffff';
        setTimeout(() => searchHeader.textContent = 'Поиск актеров', 300);
        setTimeout(() => searchHeader.style = 'filter: blur(0); color: #000000', 350);
        searchField.value = '';
        searchField.placeholder = 'Введите имя актера или режиссера';
        searchType = 'person';
    } else {
        return;
    }
})