export function createContact () {
    const content = document.querySelector('#content');
    const contact = document.createElement('div');
    contact.setAttribute('id', 'contact');
    const image = document.createElement('img');
    image.src = '/src/assests/chef-bros.jpeg';
    content.appendChild(contact);
    contact.appendChild(image);
}