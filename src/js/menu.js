class Menu {
  constructor() {
    this.menuLi = document.querySelectorAll(".content .full-menu .menu-nav li");
    this.menuLi.forEach(li => {
      li.addEventListener("click", this.updateActive);
    });
    this.getMenu('Breakfast');
  }

  // THIS WILL UPDATE THE MENU NAV LINKS
  updateActive() {
    menu.menuLi.forEach(li => li.classList.remove("active"));
    this.classList.add("active");
    menu.getMenu(this.innerHTML);
  }

  // THIS WILL GET THE MENU DATA FROM JSON FILE
  getMenu(type) {
    fetch("menu.json")
      .then(res => res.json())
      .then(data => {
        this.clearMenu();
        this.updateMenu(type, data);
      });
  }

  // THIS WILL REMOVE THE CURRENT MENU
  clearMenu() {
    let dishes = document.querySelectorAll(".content .full-menu .dish");
    dishes.forEach(dish => {
      dish.parentElement.removeChild(dish);
    });
  }

  // THIS WILL UPDATE THE MENU
  updateMenu(type, data) {
    const menu = document.querySelector(".full-menu");
    let dishMenu = document.createElement("div");
    switch (type) {
      case "Breakfast":
        Object.entries(data.breakfast).forEach(dish => {
          dishMenu.innerHTML += `
          <div class="dish fadeIn">
            <div class="name-price">
              <h3>${dish[1].name}</h3>
              <h3>${dish[1].price}€</h3>
            </div>
            <h6>${dish[1].ingre}</h6>
          </div>
        `;
          menu.append(dishMenu);
        });
        break;
      case "Lunch":
        Object.entries(data.lunch).forEach(dish => {
          dishMenu.innerHTML += `
            <div class="dish fadeIn">
              <div class="name-price">
                <h3>${dish[1].name}</h3>
                <h3>${dish[1].price}€</h3>
              </div>
              <h6>${dish[1].ingre}</h6>
            </div>
          `;
          menu.append(dishMenu);
        });
        break;
      case "Dinner":
        Object.entries(data.dinner).forEach(dish => {
          dishMenu.innerHTML += `
            <div class="dish fadeIn">
              <div class="name-price">
                <h3>${dish[1].name}</h3>
                <h3>${dish[1].price}€</h3>
              </div>
              <h6>${dish[1].ingre}</h6>
            </div>
          `;
          menu.appendChild(dishMenu);
        });
        break;
      case "Drinks":
        Object.entries(data.drinks).forEach(dish => {
          dishMenu.innerHTML += `
            <div class="dish fadeIn">
              <div class="name-price">
                <h3>${dish[1].name}</h3>
                <h3>${dish[1].price}€</h3>
              </div>
              <h6>${dish[1].ingre}</h6>
            </div>
          `;
          menu.appendChild(dishMenu);
        });
        break;
    }
  }
}

const menu = new Menu();
