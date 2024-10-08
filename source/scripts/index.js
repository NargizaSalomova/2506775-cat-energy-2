/* в этот файл добавляет скрипты*/
const mainHeader = document.querySelector('.main-header');
const menuToggle = document.querySelector('.main-header__toggle');
const navMenu = document.querySelector('.main-nav');

mainHeader.classList.remove('main-header--nojs');
menuToggle.removeAttribute('disabled');

menuToggle.addEventListener('click',() =>{
  if(menuToggle.classList.contains('main-header__toggle--closed')){
    menuToggle.classList.remove('main-header__toggle--closed');
    menuToggle.classList.add('main-header__toggle--opened');
    navMenu.classList.remove('main-nav--closed');
  } else{
    menuToggle.classList.remove('main-header__toggle--opened');
    menuToggle.classList.add('main-header__toggle--closed');
    navMenu.classList.add('main-nav--closed');
  }
});

const imagesCat = document.querySelector('.images-cat');

document.querySelector('.images-cat__slider').addEventListener('input', (e)=>{
  imagesCat.style.setProperty('--position', `${e.target.value}%`);
});
