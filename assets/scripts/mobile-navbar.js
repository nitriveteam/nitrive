class MobileNavbar {
    constructor(mobileNavbar, navList, navLinks) {
        this.mobileNavbar = document.querySelector(mobileNavbar);
        this.navList = document.querySelector(navList)
        this.navLinks = document.querySelectorAll(navLinks);
        this.activeClass = "active";
    }

    addClickEvent() {
        this.mobileNavbar.addEventListener("click", () => console.log("Hey"))
    }

    init(){
        if (this.mobileNavbar){
            this.addClickEvent();
        }
        return this;
    }
}

const mobileNavbar = new MobileNavbar(
    ".mobile-menu",
    "nav-list",
    "nav-links li",
);