import './style.css';
import Pizza from './pizza.jpg';

function loadHome() {
    const element = document.querySelector('#content');

    const header = document.createElement('header');
    header.classList.add('header');
    header.innerHTML=`Danito's <p class="subtitle">Lots of Pizza is Good Pizza</p>`;


    const tag = document.createElement('div');
    tag.classList.add('intro');
    tag.innerHTML=`Come taste and see the Danito's difference. Our all-you-can eat pizza buffet will excite your inner child.`;

    const hrs = document.createElement('div');
    hrs.classList.add('intro');
    hrs.classList.add('hrs');
    hrs.innerHTML=`
    <span class="hr-head">Hours of Operation</span>
    <span class="day">Monday</span> <span class="time">11:00-8:00</span>
    <span class="day">Tuesday</span> <span class="time">11:00-8:00</span>
    <span class="day">Wednesday</span> <span class="time">11:00-8:00</span>
    <span class="day">Thrusday</span> <span class="time">11:00-8:00</span>
    <span class="day">Friday</span> <span class="time">11:00-8:00</span>
    <span class="day">Saturday</span> <span class="time">10:00-10:00</span>
    <span class="day">Sunday</span> <span class="time">10:00-2:00</span>
    `;



    const imgPizza = new Image();
    imgPizza.src = Pizza;
    imgPizza.classList.add('pizza');

    // add the content
    element.appendChild(header);
    element.appendChild(tag);
    element.appendChild(hrs);
    // element.appendChild(imgPizza);



}

export default loadHome;