function myHMenu() {
    const menu = document.getElementById("myHamburgerMenu");
    if (menu.style.display === "flex") {
      menu.style.display = "none";
    } else {
      menu.style.display = "flex";
    }
  }

const bomboSound = document.getElementById('bomboSound');
const crashSound = document.getElementById('crashSound');
const hitHatSound = document.getElementById('hitHatSound');
const redoblanteSound = document.getElementById('redoblanteSound');
const tom1Sound = document.getElementById('tom1Sound');
const tom2Sound = document.getElementById('tom2Sound');
const tom3Sound = document.getElementById('tom3Sound');
const tom4Sound = document.getElementById('tom4Sound');
function hitTheDom(sound){
  if(sound=="bombo"){
    bomboSound.play();
  } else if(sound=="crash"){
    crashSound.play();
  } else if(sound=="hit-hat"){
    hitHatSound.play();
  } else if(sound=="redoblante"){
    redoblanteSound.play();
  } else if(sound=="tom1"){
    tom1Sound.play();
  } else if(sound=="tom2"){
    tom2Sound.play();
  } else if(sound=="tom3"){
    tom3Sound.play();
  } else{
    tom4Sound.play();
  }
}
