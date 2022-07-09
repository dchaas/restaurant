function loadMenu() {
    const element = document.querySelector('#content');
    // make the header
    const header = document.createElement('div');
    header.classList.add('header');
    header.innerHTML = `Danito's - Menu`;

    element.appendChild(header);

    let items = [
        {'Item':'Pizza','Price': '$5.50'},
        {'Item':'Soda','Price': '$2.99'},
        {'Item':'Salad','Price': '$4.99'},
        {'Item':'Lasagna','Price': '$8.50'},
        {'Item':'Breadsticks','Price': '$2.25'},
    ];

    items.forEach(function(menuItem) {
        let item = document.createElement('div');    
        item.classList.add('intro');
        item.innerHTML=`${menuItem.Item} - ${menuItem.Price}`;
        element.appendChild(item);
    }
    );

}

export default loadMenu;