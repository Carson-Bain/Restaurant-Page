// npm run build
import './style.css'
import { createMainPage } from './mainpage'
import { createMenu } from './menu';
import { createContact } from './contact';

createMainPage();

function clear() {
    const content = document.querySelector('#content');
    if (content.innerHTML !== null) {
        content.innerHTML = '';
    }
}

const homeButton = document.querySelector('#homeBtn');
homeButton.addEventListener('click', () => {
    clear();
    createMainPage();
});

const menuButton = document.querySelector('#menuBtn');
menuButton.addEventListener('click', () => {
    clear();
    createMenu();
})

const contactButton = document.querySelector('#contactBtn');
contactButton.addEventListener('click', () => {
    clear();
    createContact();
})