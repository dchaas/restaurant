import './style.css';
import loadHome from './home.js';
import loadMenu from './menu.js';
import loadContact from './contact.js';


// reference the master div
const element = document.querySelector('#content');

function createTabs() {
    // define the tabs
    const tabDiv = document.createElement('div');
    tabDiv.classList.add('navbar');
    const tabHome = document.createElement('button');
    const tabMenu = document.createElement('button');
    const tabContact = document.createElement('button');

    tabHome.classList.add('tab');
    tabHome.innerHTML = `HOME`;
    // link the home tab to the home page function
    tabHome.addEventListener('click', function() {
        resetPage();
        loadHome();
    });

    tabDiv.appendChild(tabHome);

    tabMenu.classList.add('tab');
    tabMenu.innerHTML = `MENU`;
    // link the menu tab to the menu page function
    tabMenu.addEventListener('click', function() {
        resetPage();
        loadMenu();
    });
    tabDiv.appendChild(tabMenu);

    tabContact.classList.add('tab');
    tabContact.innerHTML = `CONTACT`;
    tabContact.addEventListener('click', function() {
        resetPage();
        loadContact();
    });
    tabDiv.appendChild(tabContact);
    

    element.appendChild(tabDiv);
}


function resetPage() {
    // clear the content
    while (element.hasChildNodes()) {
        element.removeChild(element.firstChild);
    }
    // add the tabs back in
    createTabs();
}

createTabs();
loadHome();
