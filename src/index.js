import defaultExport from './loadPage.js';
import { homePageElements } from './homePageElems.js';
import { menuPageElements } from './menuPageElems.js';
import { contactPageElements } from './contactPageElems.js';

const elements = [homePageElements, menuPageElements, contactPageElements];
defaultExport(elements[0].header, elements[0].main, elements[0].footer);

const navButtons = document.querySelectorAll('button');
navButtons.forEach(btn => {
    btn.addEventListener('click', changePageContext)
});

function changePageContext(e) {
    switch (e.target.textContent) {
        case 'Home':
            defaultExport(elements[0].main, elements[0].footer);
            break;
        case 'Contact':
            defaultExport(elements[2].main, elements[2].footer);
            break;
        case 'Menu':
            defaultExport(elements[1].main, elements[1].footer);
            break;
        default:
            console.log('default');
            break;
    };  
}