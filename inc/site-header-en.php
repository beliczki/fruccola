<nav class="main-navigation">
  
  <h1 class="logo"><a href="/">fruccola</a></h1>
  
  <a class="mobile-navigation open" href="#mobile"></a>
  <a class="mobile-navigation close" href="#top"></a>
  
  <ul class="items">
    <li class="menu"><a href="/menu">Menu</a></li>
    <li class="map"><a href="/map">Map</a></li>
    <li class="contact"><a href="/contact">Contact</a> <!--<a class="button" href="tel://+3614306125">+36 1 430 6125</a>--></li>
    <li class="open"><!-- class="warning" --><a href="/open"><em>Opening hours</em></a></li>
    <li class="happy"><a href="/happy-things">Happy things</a></li>
    <li class="sticky feedback"><a href="/feedback" class="">Tell us what you think</a></li>
    <li class="sticky dailymenu"><a href="/daily-menu-subscribe" class="">Get daily menu notification</a></li>
  </ul>
  
  <p class="language"><a href="<?php echo $version_hu;?>">Magyar </a></p>
  
</nav>

<form id="filter" class="product-filter">
  
    <a class="mobile-filter open" href="#filter"></a>
    <a class="mobile-filter close" href="#top"></a>

    <fieldset class="items">
          <label for="filter-flourfree" class="flourfree">
              <input type="checkbox" id="filter-flourfree" name="flourfree">
              <span>flour-free</span>
          </label>
          <br>

          <label for="filter-lactosefree" class="lactosefree">
              <input type="checkbox" id="filter-lactosefree" name="lactosefree">
              <span>lactose-free</span>
          </label>
          <br>

          <label for="filter-vegetarian" class="vegetarian">
              <input type="checkbox" id="filter-vegetarian" name="vegetarian">
              <span>vegetarian</span>
          </label>
          <br>

          <label for="filter-vegan" class="vegan">
              <input type="checkbox" id="filter-vegan" name="vegan">
              <span>vegan</span>
          </label>
          <br>
      
          <label for="filter-kristof" class="address kristof">
              <input type="checkbox" id="filter-kristof" name="kristof" checked>
              <span>Kristóf square</span>
          </label>
          <br>
          <label for="filter-mom" class="address mom">
              <input type="checkbox" id="filter-mom" name="mom" checked>
              <span>Mom park</span>
          </label>
          <br>
          <label for="filter-arany" class="address arany">
              <input type="checkbox" id="filter-arany" name="arany" checked>
              <span>Arany János street</span>
          </label>
          <br>
          
      </fieldset>
  </form>