function myHMenu() {
    const menu = document.getElementById("myHamburgerMenu");
    menu.style.display === "flex" ? (menu.style.display = "none") : (menu.style.display = "flex");
  }

const sounds = {
  bombo:  document.getElementById('bomboSound'), 
  crash: document.getElementById('crashSound'), 
  'hit-hat': document.getElementById('hitHatSound'), 
  redoblante: document.getElementById('redoblanteSound'),
  tom1: document.getElementById('tom1Sound'), 
  tom2: document.getElementById('tom2Sound'), 
  tom3: document.getElementById('tom3Sound'), 
  tom4: document.getElementById('tom4Sound')
}

function hitTheDom(soundtype){
  sounds[soundtype] ? sounds[soundtype].play() : sounds['tom4'].play();
}
