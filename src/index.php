<?php require 'header.php' ?>
    <!-- INTRO -->
    <section class="intro">
      <div class="overlay"></div>
      <div class="container">
        <!-- INTRO INFO -->
        <div class="info">
          <!-- HEADLINE -->
          <div class="headline fadeInSlow">
            <h1>Delightful food</h1>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Sit vero aliquam blanditiis expedita
              praesentium
              ducimus adipisci, atque doloribus? Nihil, nisi dolor nesciunt in dolore rerum esse repellat cum
              reiciendis
              sunt?</p>
            <a href="" class="btn">Learn More</a>
          </div>

          <!-- ARROWS -->
          <div class="arrow-container">
            <div class="line lineSlide"></div>
            <div class="left-arrow">
              <div class="circle">
                <i class="fas fa-caret-left fa-3x"></i>
              </div>
            </div>
            <div class="right-arrow">
              <div class="circle">
                <i class="fas fa-caret-right fa-3x"></i>
              </div>
            </div>
          </div>

          <!-- SOCIAL MEDIA ICONS -->
          <div class="social">
            <i class="fab fa-facebook-f"></i>
            <i class="fab fa-twitter"></i>
            <i class="fab fa-instagram"></i>
          </div>
        </div>

        <!-- INTRO IMG -->
        <div class="intro-img">
          <img src="img/pizza.png" alt="" class="fadeIn">
          <div class="box">
            <div class="order orderNowSlide">
              <p>order online</p>
              <i class="fas fa-arrow-right"></i>
            </div>
          </div>
        </div>

        <!-- INTRO SLIDER COUNTER -->
        <div class="slider">
          <div class="slider-line">
            <i class="fas fa-angle-up"></i>
            <div class="vertical-line"></div>
            <i class="fas fa-angle-down"></i>
          </div>
          <ul>
            <li class="active">1</li>
            <li class="">2</li>
            <li class="">3</li>
          </ul>
        </div>
      </div>
      <!-- BACK UP ABOUT US PASTE IT HERE -->
    </section>
  </section>

  <section class="content">
    <!-- <div class="container"> -->
    <!-- ABOUT US -->
    </div>
    <section class="about-us container">
      <div class="container box-shadow">
        <img src="img/salmon.png" alt="">
        <div class="info">
          <h3 class="headers">Our <span>story</span></h3>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Aut tempore a rerum ipsum ab pariatur eius
            voluptate nesciunt! Quia vero quisquam ipsum aut explicabo autem alias quos odio ratione sequi.</p>
          <a href="" class="btn">More</a>
        </div>
      </div>
    </section>

    <div class="separator"></div>


    <!-- MENU -->
    <section class="menu-holder">
      <div class="horizontal-spacing"></div>
      <div class="container">
        <div class="head">
          <h5>Sample Dishes</h5>
          <h3 class="headers">Discover the <span>flavor</span></h3>
        </div>

        <div class="dishes">
          <!-- DISHES SIDE MENU -->
          <ul class="type">
            <li class="active">Breakfast</li>
            <li>Lunch</li>
            <li>Dinner</li>
          </ul>

          <!-- DISHES CARDS -->
          <div class="dishes-card">
            <div class="info box-shadow">
              <div class="img">
                <div class="loader"></div>
              </div>
              <div class="text">
                <h5 class="title">Example Plate</h5>
                <h5 class="price">12.99 €</h5>
              </div>
            </div>

            <div class="info box-shadow">
              <div class="img">
                <div class="loader"></div>
              </div>
              <div class="text">
                <h5 class="title">Example Plate</h5>
                <h5 class="price">12.99 €</h5>
              </div>
            </div>

            <div class="info box-shadow">
              <div class="img">
                <div class="loader"></div>
              </div>
              <div class="text">
                <h5 class="title">Example Plate</h5>
                <h5 class="price">12.99 €</h5>
              </div>
            </div>
            <!-- ARROW -->
            <div class="right-arrow box-shadow">
              <i class="fas fa-angle-right fa-2x arrow-one"></i>
              <i class="fas fa-angle-right fa-2x arrow-two"></i>
            </div>
          </div>
        </div>

        <!-- HORIZONTAL SPACING -->
        <div class="horizontal-spacing"></div>
      </div>
    </section>
    <!-- </div> -->

    <!-- NEWSLETTER -->
    <div class="newletter box-shadow">
      <div class="container">
        <h3 class="headers">Monthly <span>Newsletter</span></h3>
        <form action="">
          <input type="email" placeholder="Enter your email for some awesome stuff!" required>
          <input type="submit" class="btn">
        </form>
      </div>
    </div>

    <!-- HORIZONTAL SPACING -->
    <div class="horizontal-spacing"></div>

    <!-- IMAGE GALLERY -->
    <div class="gallery">
      <img src="img/our-story.jpeg" alt="" class="first-img">

      <div class="two-imgs">
        <img src="img/our-story.jpeg" alt="">
        <img src="img/our-story.jpeg" alt="">
      </div>

      <img src="img/our-story.jpeg" alt="" class="second-img">

      <div class="two-imgs">
        <img src="img/our-story.jpeg" alt="">
        <img src="img/our-story.jpeg" alt="">
      </div>
    </div>

    <!-- HORIZONTAL SPACING -->
    <div class="horizontal-spacing"></div>
    <script src="js/intro.js"></script>
    <script src="js/subMenu.js"></script>
    <script src="js/newsletter.js"></script>
<?php require 'footer.php' ?>
