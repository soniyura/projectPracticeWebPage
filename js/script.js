/* Задания на урок:

1) Удалить все рекламные блоки со страницы (правая часть сайта)

2) Изменить жанр фильма, поменять "комедия" на "драма"

3) Изменить задний фон постера с фильмом на изображение "bg.jpg". Оно лежит в папке img.
Реализовать только при помощи JS

4) Список фильмов на странице сформировать на основании данных из этого JS файла.
Отсортировать их по алфавиту 

5) Добавить нумерацию выведенных фильмов */

'use strict';

const movieDB = {
    movies: [
        "Логан",
        "Лига справедливости",
        "Ла-ла лэнд",
        "Одержимость",
        "Скотт Пилигрим против..."
    ]
};

// вытягиваем найменования класов и присваиваим их переменным 
const   avd = document.querySelectorAll('.promo__adv img'),
        poster = document.querySelector('.promo__bg'),
        ganer = poster.querySelector('.promo__genre'),
        movieList = document.querySelector('.promo__interactive-list');

        // находим и убераем рекламу 
avd.forEach(item => {
    item.remove();
});

ganer.textContent = 'драма'; // меняем жанр  комедия -> драма

poster.style.backgroundImage = 'url("img/bg.jpg")';  // меняем задний фон

movieList.innerHTML = "";  // удаляем старый список фильмов 

// сортировка по алфавиту
movieDB.movies.sort();

// динамический вывод фильмов с номерацией    += (a = a + 1  a += 1) 
movieDB.movies.forEach((film, i) => {
    movieList.innerHTML += `  
    <li class="promo__interactive-item">${i + 1} ${film}
        <div class="delete"></div>
    </li>
    `;
});

