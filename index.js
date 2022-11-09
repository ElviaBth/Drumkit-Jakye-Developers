function myHMenu() {
    const menu = document.getElementById("myHamburgerMenu");
    if (menu.style.display === "flex") {
      menu.style.display = "none";
    } else {
      menu.style.display = "flex";
    }
  }