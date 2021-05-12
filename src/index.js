import './styles.css';
import makeMenuList from './menu.json';
import listTemp from './templates/menu.hbs';

const ulRef = document.querySelector('.js-menu');

const menuMarkup = listTemp(makeMenuList);

ulRef.innerHTML = menuMarkup;

const bodyRef = document.querySelector('body');
const inputCheckbox = document.querySelector('.theme-switch__toggle');

const currentThemeTheme = {
  LIGHT: 'light-theme',
  DARK: 'dark-theme',
};

function simpleTheme(oldTheme, newTheme) {
  document.body.classList.add(newTheme);
  document.body.classList.remove(oldTheme);
  localStorage.setItem('theme', newTheme);
}

inputCheckbox.addEventListener('change', event => {
  if (event.target.checked) {
    simpleTheme(Theme.LIGHT, Theme.DARK);
  } else {
    simpleTheme(Theme.DARK, Theme.LIGHT);
  }
});

const firstTheme = () => {
  let currentTheme = localStorage.getItem('theme') || Theme.LIGHT;
  inputCheckbox.checked = currentTheme === Theme.DARK;
  return currentTheme;
};

bodyRef.classList.add(firstTheme());

// console.log('run');
// import './js/test';

// // import print from './js/test'; //defult
// // console.log(print);

// // print('Jo');

// // import { text, printText } from './js/test';

// import * as object from './js/test';
// console.log(object.text);
// object.printText('Hello world');
