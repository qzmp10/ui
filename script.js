(function createDropDownMenu () {
const body = document.querySelector('body');

body.innerHTML =  '<div class="menu">'+ //can modify HTML here
'      <div class="logo">Logo</div>'+
'      <div class="select">'+
'          <div class="option">Text 1'+
'              <div class="dropdown">'+
'                  <div class="hidden">►Text</div>'+
'                  <div class="hidden">►Text</div>'+
'                  <div class="hidden">►Text</div>'+
'              </div>'+
'          </div>'+
'          <div class="option">Text 2'+
'              <div class="dropdown">'+
'                  <div class="hidden">►Text</div>'+
'                  <div class="hidden">►Text</div>'+
'                  <div class="hidden">►Text</div>'+
'                  <div class="hidden">►Text</div>'+
'              </div>'+
'          </div>'+
'          <div class="option">Text 3'+
'              <div class="dropdown">'+
'                  <div class="hidden">►Text</div>'+
'                  <div class="hidden">►Text</div>'+
'                  <div class="hidden">►Text</div>'+
'                  <div class="hidden">►Text</div>'+
'              </div>'+
'          </div>'+
'          <div class="option more">More ▼'+
'              <div class="dropdown">'+
'                  <div class="hidden">►Text</div>'+
'                  <div class="hidden">►Text</div>'+
'                  <div class="hidden">►Text</div>'+
'                  <div class="hidden">►Text</div>'+
'                  <div class="hidden">►Text</div>'+
'              </div>'+
'          </div>'+
'      </div>'+
'  </div>';


const menu = document.querySelector('.menu');
const logo = document.querySelector('.logo');
const select = document.querySelector('.select');
const options = document.querySelectorAll('.option');
const more = document.querySelector('.more');


options.forEach(option => { //css & dom
    const dropdown = option.children[0];
    let dropdownOptions = dropdown.children;


    for (const div of dropdownOptions) { // place holder to add click events to drop down menu options
        if(div.textContent === '►Text'){
            div.addEventListener('click', () => {
                console.log(div.textContent);
            });
        };
    }; 

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
})();



