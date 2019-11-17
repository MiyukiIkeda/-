'use strict';
window.addEventListener("DOMContentLoaded", function(){

  const gNav = document.getElementById('js-global-nav');
  const gNavItems = gNav.getElementsByTagName('li');


  const aTags = document.getElementsByTagName('a');
  for(let i = 0; i < aTags.length; i++){
    aTags[i].onclick = ()=>{return false;}
  }

  const changeActiveNavItem = function(){
    let clickedItem = this;
    let activeItem = gNav.querySelector('li.active');
    activeItem.classList.remove('active');
    clickedItem.classList.add('active');
  }

  for(let i = 0; i < gNavItems.length; i++){
    gNavItems[i].addEventListener('click', changeActiveNavItem);
  }


});
