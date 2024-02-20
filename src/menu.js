export function createMenu () {
    const content = document.querySelector('#content');
    const menu = document.createElement('div');
    menu.setAttribute('id', 'menu');
    const image = document.createElement('img');
    image.src = '/src/assests/menu.jpeg';
    content.appendChild(menu);
    menu.appendChild(image);
}