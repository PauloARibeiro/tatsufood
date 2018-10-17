class SubMenu {
  constructor() {
    this.selectionLi = document.querySelectorAll(
      ".content .menu-holder .dishes .type li"
    );
    this.title = document.querySelectorAll(
      ".content .menu-holder .dishes .info .text .title"
    );
    this.img = document.querySelectorAll(
      ".content .menu-holder .dishes .info .img"
    );
    this.price = document.querySelectorAll(
      ".content .menu-holder .dishes .info .text .price"
    );
    this.loader = document.querySelectorAll('.loader');
    this.arrow = document.querySelector('.content .menu-holder .right-arrow');
    this.index = 1;

    this.selectionLi.forEach((li, index) => {
      li.addEventListener("click", () => {
        this.index = index + 1;
        this.getIntro();
      });
    });

    this.arrow.addEventListener('click', () =>{
      this.index++;
      this.checkIndex();
    })

    this.getIntro();
  }

  // WILL CHECK THE INDEX MAKE SURE IT WONT OVERFLOW
  checkIndex() {
    if (this.index > 3) this.index = 1;
    if (this.index < 1) this.index = 3;
    this.getIntro();
  }

  getIntro() {
    this.loader.forEach(loader => {
      loader.style.display = 'block';
    });
    fetch("submenu.json")
      .then(res => res.json())
      .then(data => {
        this.resetAnimation();
        this.updateSubMenu(data);
      })
  }

  updateSubMenu(data) {
    switch (this.index) {
      case 1:
        Object.entries(data.breakfast).forEach((dish, i) => {
          this.updateAnimation(i, dish);
        });
        this.selectionLi[0].classList.add("active");
        break;
      case 2:
        Object.entries(data.lunch).forEach((dish, i) => {
          this.updateAnimation(i, dish);
        });
        this.selectionLi[1].classList.add("active");
        break;
      case 3:
        Object.entries(data.dinner).forEach((dish, i) => {
          this.updateAnimation(i, dish);
        });
        this.selectionLi[2].classList.add("active");
        break;
    }
  }

  resetAnimation() {
    this.selectionLi.forEach((li, i) => {
      li.classList.remove("active");
      this.title[i].classList.remove("fadeIn");
      this.img[i].classList.remove("fadeIn");
      this.price[i].classList.remove("priceSlideUp");
    });
  }

  updateAnimation(i, dish) {
    this.loader[i].style.display = 'none';

    setTimeout(() => {
      this.price[i].innerHTML = dish[1].price;
      this.price[i].classList.add("priceSlideUp");
    }, 450);

    setTimeout(() => {
      this.title[i].innerHTML = dish[1].name;
      this.title[i].classList.add("fadeIn");
    }, 150);

    setTimeout(() => {
      this.img[i].classList.add("fadeIn");
      this.img[i].style.background = `url('../${dish[1].img}')`;
      this.img[i].style.backgroundSize = "cover";
      this.img[i].style.backgroundPosition = "center";
    }, 300);
  }
}

const subMenu = new SubMenu();
