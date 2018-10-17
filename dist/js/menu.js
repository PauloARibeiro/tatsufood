class Menu{constructor(){this.menuLi=document.querySelectorAll(".content .full-menu .menu-nav li"),this.menuLi.forEach(a=>{a.addEventListener("click",this.updateActive)}),this.getMenu("Breakfast")}updateActive(){menu.menuLi.forEach(a=>a.classList.remove("active")),this.classList.add("active"),menu.getMenu(this.innerHTML)}getMenu(a){fetch("menu.json").then(a=>a.json()).then(b=>{this.clearMenu(),this.updateMenu(a,b)})}clearMenu(){let a=document.querySelectorAll(".content .full-menu .dish");a.forEach(a=>{a.parentElement.removeChild(a)})}updateMenu(a,b){const c=document.querySelector(".full-menu");let d=document.createElement("div");"Breakfast"===a?Object.entries(b.breakfast).forEach(a=>{d.innerHTML+=`
          <div class="dish fadeIn">
            <div class="name-price">
              <h3>${a[1].name}</h3>
              <h3>${a[1].price}€</h3>
            </div>
            <h6>${a[1].ingre}</h6>
          </div>
        `,c.append(d)}):"Lunch"===a?Object.entries(b.lunch).forEach(a=>{d.innerHTML+=`
            <div class="dish fadeIn">
              <div class="name-price">
                <h3>${a[1].name}</h3>
                <h3>${a[1].price}€</h3>
              </div>
              <h6>${a[1].ingre}</h6>
            </div>
          `,c.append(d)}):"Dinner"===a?Object.entries(b.dinner).forEach(a=>{d.innerHTML+=`
            <div class="dish fadeIn">
              <div class="name-price">
                <h3>${a[1].name}</h3>
                <h3>${a[1].price}€</h3>
              </div>
              <h6>${a[1].ingre}</h6>
            </div>
          `,c.appendChild(d)}):"Drinks"===a?Object.entries(b.drinks).forEach(a=>{d.innerHTML+=`
            <div class="dish fadeIn">
              <div class="name-price">
                <h3>${a[1].name}</h3>
                <h3>${a[1].price}€</h3>
              </div>
              <h6>${a[1].ingre}</h6>
            </div>
          `,c.appendChild(d)}):void 0}}const menu=new Menu;