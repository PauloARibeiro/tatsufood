// NAV BAR
class NavBar {
  constructor() {
    this.navUl = document.querySelector("nav .container ul");
    // MODAL
    this.modal = document.querySelector(".modal");
    // HAMBURGER ICON
    this.hamburger = document.querySelector("#hamburger-holder #hamburger");
    this.hamburger.addEventListener("click", () => {
      this.toggleMobileMenu();
    });
    // IS MENU OPEN OR NOT
    this.isSelected = false;

    window.onscroll = () => {
      this.Scroll();
    };
  }

  // TOGGLES MENU
  toggleMobileMenu() {
    this.modal.appendChild(this.navUl);
    this.isSelected
      ? this.hamburger.classList.remove("close")
      : this.hamburger.classList.add("close");

    if (this.isSelected) {
      setTimeout(() => {
        this.modal.style.opacity = "0";
        this.modal.style.zIndex = "-998";
      }, 460);
    } else {
      this.modal.style.opacity = "1";
      this.modal.style.zIndex = "998";
    }

    setTimeout(() => {
      this.isSelected
        ? this.navUl.classList.add("slide")
        : this.navUl.classList.remove("slide");
    }, 150);
    this.isSelected = !this.isSelected;
  }

  Scroll() {
    this.navBar = document.querySelector("nav");
    this.navLi = this.navBar.querySelectorAll(".container ul li");
    if (
      document.body.scrollTop > 50 ||
      document.documentElement.scrollTop > 50
    ) {
      this.navBar.style.position = "fixed";
      this.UpdatePadding("20px");
    } else {
      this.navBar.style.position = "relative";
      this.UpdatePadding("30px");
    }
  }

  // UPDATES NAV BAR UI
  UpdatePadding(padding) {
    this.navLi.forEach((li, i, arr) => {
      li.style.padding = `${padding} 30px`;
      if (Object.is(arr.length - 1, i)) {
        li.style.padding = `${padding} 0px ${padding} 20px`;
      }
    });
  }
}

// MEDIA QUERIES
class MediaQueries {
  constructor() {
    // ABOUT US ELEMENT
    if (
      window.location.pathname === "/tatsufood/" ||
      window.location.pathname === "/tatsufood/index.php"
    ) {
      this.about = document.querySelector(".content .about-us .container");
    } else {
      this.about = null;
    }
    // SPACING BETWEEN ABOUT US AND MENU SECTION
    this.separator = document.querySelector(".separator");
    // CONTANCT CONTAINER
    this.contactHolder = document.querySelector(".content .contact .container");
    // CONTACT INFO
    this.contact = document.querySelector(".content .contact .container .info");

    // THIS WILL GET THE ABOUT AND CONTACT INFO CURRENT HEIGHT
    window.addEventListener("resize", () => {
      this.UpdateSeparator();
    });

    this.UpdateSeparator();
  }

  UpdateSeparator() {
    if (this.about != null) {
      this.separator.style.height = this.about.clientHeight - 40 + "px";
    }
    this.contactHolder.style.height = this.contact.clientHeight - 30 + "px";
  }
}

const mediaQueries = new MediaQueries();
const navBar = new NavBar();
