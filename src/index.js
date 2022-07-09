import './style.css';
import loadHome from './home.js';
import loadMenu from './menu.js';


// reference the master div
const element = document.querySelector('#content');

// define the tabs
const tabDiv = document.createElement('div');
tabDiv.classList.add('navbar');
const tabHome = document.createElement('button');
const tabMenu = document.createElement('button');
const tabContact = document.createElement('button');

tabHome.classList.add('tab');
tabHome.innerHTML = `HOME`;
// link the home tab to the home page function
tabHome.addEventListener('click', loadHome);

tabDiv.appendChild(tabHome);

tabMenu.classList.add('tab');
tabMenu.innerHTML = `MENU`;
// link the menu tab to the menu page function
tabMenu.addEventListener('click',loadMenu);
tabDiv.appendChild(tabMenu);

tabContact.classList.add('tab');
tabContact.innerHTML = `CONTACT`;
tabDiv.appendChild(tabContact);


element.appendChild(tabDiv);

loadHome();
