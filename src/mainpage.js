export function createMainPage() {
    const content = document.querySelector('#content');
    const mainPage = document.createElement('div');
    mainPage.setAttribute('id', 'main-page');
    const image = document.createElement('img');
    image.src = '/src/assests/chef-has.jpeg';
    content.appendChild(mainPage);
    mainPage.appendChild(image);
}