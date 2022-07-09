function loadContact() {
    const element = document.querySelector('#content');

    const header = document.createElement('header');
    header.classList.add('header');
    header.innerHTML=`Danito's - Contact`;


    const tag = document.createElement('div');
    tag.classList.add('intro');
    tag.style.textAlign = 'center';
    tag.innerHTML=`Find us at 1000 North St, North Pole <br>(123)-555-1234
    <br>danitos@pizza.com`;

    element.appendChild(header);
    element.appendChild(tag);
    
}

export default loadContact;