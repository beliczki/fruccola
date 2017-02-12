<?php
$url = parse_url ($_SERVER['REQUEST_URI']);
$path_array = explode('/',$url['path']);
$category = $path_array[2];
?>

<script>
  var menu_slug = '<?php echo $category?>';
</script>

<ul class="menu-navigation">

</ul>

<section class="content menu">
  
  <h1>
    
  </h1>
  
  <p class="subtitle">
  
  </p>
  
  <ul class="items" id="dailymenu-holder">
    
  </ul>
  
</section>


<script src="/js/fruccola.menu.js"></script>

<?php if ( $path_array[2] === 'daily-menu' || $path_array[2] === 'napi-menu') { ?>
<script src="/js/fruccola.daily-menu.js"></script>
<?php }  ?>

<?php if ( $path_array[2] === 'salad' || $path_array[2] === 'salata') { ?>
<!--<script src="/js/fruccola.weekly-salad.js"></script>-->
<?php }  ?>
