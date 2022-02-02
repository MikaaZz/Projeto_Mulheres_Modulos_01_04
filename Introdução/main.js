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
var elem = document.createElement('link');
    elem.rel = 'stylesheet'
    elem.href = 'https://escuela.cacmu.fin.ec/pluginfile.php/14692/course/section/1061/style.csss'; //Link do css
    document.head.appendChild(elem);