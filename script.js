let dropDownMenu = (function () {

const body = document.querySelector('body');

let menuHTML = '<div class="menu">'+ //can modify HTML here
'      <div class="logo">Logo</div>'+
'      <div class="select">'+
'          <div class="single">Text 0'+
'              <div class="dropdown">'+
'              </div>'+
'          </div>'+
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

body.innerHTML = menuHTML; 


const menu = document.querySelector('.menu');
const logo = document.querySelector('.logo');
const select = document.querySelector('.select');
const single = document.querySelectorAll('.single');
const options = document.querySelectorAll('.option');
const more = document.querySelector('.more');

single.forEach(div => {
    let line = div.children[0];

    div.addEventListener('mouseover', () => {
        div.style.color = 'white';
        line.style.background = 'white';
    });
    div.addEventListener('mouseout', () => {
        div.style.color = 'rgb(23, 255, 73)';
        line.style.background = 'rgb(23, 255, 73)';
    });
});

single.forEach(div => { // place holder to add click events to drop down menu options
    div.addEventListener('click', () => {
        console.log(div.textContent);
    });
});


options.forEach(option => {
    const dropdown = option.children[0];
    let dropdownOptions = dropdown.children;

    for (const div of dropdownOptions) { // place holder to add click events to drop down menu options
        if(div.textContent === '►Text'){
            div.addEventListener('click', () => {
                console.log(div.textContent);
            });
        };
    }; 
})

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

return { body, menuHTML, menu, select, options, more, logo, single };

})();



