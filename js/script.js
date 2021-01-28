window.onscroll=() =>{scrollfunction()};
let intro =document.getElementById('intro');
let logo= document.querySelector('#logo a');
logo.classList.add('visible-hidden');
intro.classList.add('visible');
function scrollfunction(){
    if (document.body.scrollTop > 180 || document.documentElement.scrollTop > 180) {
        intro.classList.remove('visible');
        intro.classList.add('visible-hidden');
        logo.classList.remove('visible-hidden');
        logo.classList.add('visible');
      } else {
        intro.classList.remove('visible-hidden');
        intro.classList.add('visible');
        logo.classList.add('visible-hidden');
        logo.classList.remove('visible');
      }
}

// Scroll to specific values
// scrollTo is the same
window.scroll({
  behavior: 'smooth'
});

// Scroll certain amounts from current position 
window.scrollBy({ 
  behavior: 'smooth' 
});

// Scroll to a certain element
