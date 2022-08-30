const body = document.querySelector('body');
const menu = document.querySelector('.menu');
const logo = document.querySelector('logo');
const select = document.querySelector('.select');
const options = document.querySelectorAll('.option');
const more = document.querySelector('.more');

options.forEach(option => { //css & dom
    const dropdown = option.children[0];

    option.addEventListener('mouseover', () => {
        dropdown.style.width = '12rem';
        dropdown.style.height = '30%';

        for (let i = 0; i < dropdown.children.length; i++) {

            dropdown.children[i].classList.add('dropdown-option');
            dropdown.children[i].classList.remove('hidden');

            dropdown.children[i].addEventListener('mouseover', () => {
                dropdown.children[i].style.background = 'rgb(97, 255, 132)';
            });

            dropdown.children[i].addEventListener('mouseout', () => {
                dropdown.children[i].style.background = 'rgb(23, 255, 73)';
            });
        };
    });

    option.addEventListener('mouseout', () => {
        dropdown.style.width = '8rem';
        dropdown.style.height = '0.2rem';

        for (let i = 0; i < dropdown.children.length; i++) {
            dropdown.children[i].classList.remove('dropdown-option');
            dropdown.children[i].classList.add('hidden');
        };
    });
});




