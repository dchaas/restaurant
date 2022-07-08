import './style.css';
import Pizza from './pizza.jpg';

function loadPage() {
    const element = document.querySelector('#content');

    const header = document.createElement('header');
    header.classList.add('header');
    header.innerHTML=`Danito's <p class="subtitle">Lots of Pizza is Good Pizza</p>`;


    const tag = document.createElement('div');
    tag.classList.add('intro');
    tag.innerHTML=`Come taste and see the Danito's difference. Our all-you-can eat pizza buffet will excite your inner child.`;


    const imgPizza = new Image();
    imgPizza.src = Pizza;
    imgPizza.classList.add('pizza');

    // add the content
    element.appendChild(header);
    element.appendChild(tag);
    element.appendChild(imgPizza);



}

export default loadPage;