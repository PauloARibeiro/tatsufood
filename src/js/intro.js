class Intro {
  constructor() {
    this.leftArrow = document.querySelector(".left-arrow");
    this.rightArrow = document.querySelector(".right-arrow");
    this.upArrow = document.querySelector(".fa-angle-up");
    this.downArrow = document.querySelector(".fa-angle-down");
    this.sliderLi = document.querySelectorAll('.intro .container .slider ul li');
    this.index = 1;

    this.sliderLi.forEach((li, index) => {
      li.addEventListener('click', () =>{
        this.index = index + 1;
        this.getIntro();
      })
    })


    // THIS IS FOR THE CLICK EVENTS OF ALL MENU CLICKABLES
    this.leftArrow.addEventListener("click", () => {
      this.index--;
      this.checkIndex();
    });
    this.rightArrow.addEventListener("click", () => {
      this.index++;
      this.checkIndex();
    });

    this.upArrow.addEventListener('click', () =>{
      this.index--;
      this.checkIndex();
    })

    this.downArrow.addEventListener('click', () =>{
      this.index++;
      this.checkIndex();
    })
  }
   
  // WILL CHECK THE INDEX MAKE SURE IT WONT OVERFLOW
  checkIndex() {
    if (this.index > 3) this.index = 1;
    if (this.index < 1) this.index = 3;
    this.getIntro();
  }

  // GETS INFO FROM JSON FILE
  getIntro() {
    fetch("intro.json")
      .then(res => res.json())
      .then(data => {
        this.resetAnimation();
        this.updateIntro(data);
      });
  }

  // THIS WILL UPDATE THE DATA IN THE INTRO
  updateIntro(data) {
    let header = document.querySelector(".intro .container .info .headline h1");
    let description = document.querySelector(".intro .container .info .headline p");
    let img = document.querySelector(".intro .container .intro-img img");

    switch (this.index) {
      case 1:
        header.innerHTML = data.first.name;
        description.innerHTML = data.first.description;
        img.src = data.first.img;
        img.style.marginLeft = '0px';
        this.sliderLi[0].classList.add('active');
        break;

      case 2:
        header.innerHTML = data.second.name;
        description.innerHTML = data.second.description;
        img.src = data.second.img;
        img.style.marginLeft = '50px';
        this.sliderLi[1].classList.add('active');
        break;

      case 3:
        header.innerHTML = data.third.name;
        description.innerHTML = data.third.description;
        img.src = data.third.img;
        img.style.marginLeft = '50px';
        this.sliderLi[2].classList.add('active');
        break;
    }
    this.updateAnimation();
  }

  // THIS WILL REMOVE THE CURRENT ANIMATION CLASSES
  resetAnimation(){
    this.sliderLi.forEach((li) =>{
      li.classList.remove('active');
    })

    let headline = document.querySelector(".intro .container .info .headline");
    headline.classList.remove('fadeInSlow');
    headline.style.opacity = '0';

    let img = document.querySelector('.intro .container .intro-img img');
    img.classList.remove('fadeIn');
    img.style.opacity = '0';

    let order = document.querySelector('.intro .container .intro-img .box .order');
    order.classList.remove('orderNowSlide');
    order.style.left = '-21%';

    let line = document.querySelector('.intro .container .info .arrow-container .line');
    line.classList.remove('lineSlide');
    line.style.width = '0%';
  }

  // THIS WILL ADD THE ANIMATION CLASSES THE EACH ELEMENT
  updateAnimation(){
    let headline = document.querySelector(".intro .container .info .headline");
    let img = document.querySelector('.intro .container .intro-img img');
    let order = document.querySelector('.intro .container .intro-img .box .order');
    let line = document.querySelector('.intro .container .info .arrow-container .line');

    setTimeout(() => {
      headline.classList.add('fadeInSlow');
    }, 300);
    
    setTimeout(() => {
      img.classList.add('fadeIn');
    }, 150);

    setTimeout(() => {
      order.classList.add('orderNowSlide');
    }, 150);

    setTimeout(() => {
      line.classList.add('lineSlide');
    }, 250);
  }
}

const intro = new Intro();
