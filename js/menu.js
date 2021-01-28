// menu toggle

let nav = document.querySelector('header nav');
let btnToggle = document.querySelector('.toggle-menu');
let close = document.querySelector('.close');

btnToggle.addEventListener('click', menutoggle);

close.addEventListener('click', closing);

function menutoggle(){
  nav.style.transition='right .5s';
  nav.style.right='0';
  close.style.display='block';
}
function closing(){
  nav.style.transition='right .5s';
  nav.style.right='-310px';
  close.style.display='none';
}