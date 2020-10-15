let hamburger = document.querySelector(".hamburger-btn");
let isHamburgerMenuOpen = false;
hamburger.addEventListener("click", () => {
    if(isHamburgerMenuOpen){
        isHamburgerMenuOpen = !isHamburgerMenuOpen;
        hamburger.classList.remove("open");
    }else{
        isHamburgerMenuOpen = !isHamburgerMenuOpen;
        hamburger.classList.add("open");
    }
});

