const menuBtn = document.querySelector ('.navButton');
let menuOpen = false;


const showMenu = document.querySelector ('.navButtonClick')
const displayFlex = "flex";
const displayNone = "none";

menuBtn.addEventListener('click', () => {
 if(!menuOpen) {
    menuBtn.classList.add('open');
    menuOpen = true;
    showMenu.style.display = displayFlex;
    
 } else {
    menuBtn.classList.remove('open');
    menuOpen = false;
    showMenu.style.display = displayNone;
    
 }
});
