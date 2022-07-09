function loadMenu() {
    const element = document.querySelector('#content');
    
    // make the header
    const header = document.createElement('div');
    header.classList.add('header');
    header.innerHTML = `Danito's - Menu`;

    element.appendChild(header);

    

    const tag = document.createElement('div');
    tag.classList.add('intro');
    tag.innerHTML=`Come taste and see the Danito's difference. Our all-you-can eat pizza buffet will excite your inner child.`;


}

export default loadMenu;