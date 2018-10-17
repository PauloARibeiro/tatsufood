<?php require 'header.php' ?>

</section>
  <section class="content"> 
    <!-- HORIZONTAL SPACING -->
    <div class="horizontal-spacing"></div>
    <div class="reservation container-no-top">
      <h1 class="headers">Book your table</h1>

      <form action="">
        <label for="type">Booking Type</label>
        <select name="type" id="" class="box-shadow" required>
          <option value="Breakfast">Breakfast</option>
          <option value="Lunch">Lunch</option>
          <option value="Dinner">Dinner</option>
        </select>

        <label for="people">number of people (10 max)</label>
        <input type="number" name="people" value="2" min="1" max="10" class="box-shadow" required>

        <label for="date">Date</label>
        <input type="date" class="box-shadow">

        <label for="time">time</label>
        <select name="time" id="" class="box-shadow" required>
          <option value="19">19:00</option>
          <option value="1930">19:30</option>
          <option value="20">20:00</option>
          <option value="20">20:30</option>
          <option value="21">21:00</option>
          <option value="21">21:30</option>
          <option value="22">22:00</option>
        </select>

        <label for="name">name</label>
        <input type="text" class="box-shadow" required>

        <h3 class="reservation">Reservation made. see you soon!</h3>

        <input type="submit" class="btn" value="Book Now!"> 
      </form>

    </div>
    
    <!-- HORIZONTAL SPACING -->
    <div class="horizontal-spacing"></div>
    <script src="js/reservations.js"></script>
<?php require 'footer.php' ?>