$(function() {


function showWeeklySalad () {
  var fruccolaAPI = "//fruccola.hu/admin/api/weekly_salad";
  $.getJSON( fruccolaAPI ).done(function( data ) {

      if(typeof data[2] != 'undefined') {
          nData = new Date(data[2].from_date);
          $('.date-from').text( nData.getDate() + " " + monthNames[nData.getMonth()]);
          nData = new Date(data[2].until_date);
          $('.date-until').text( nData.getDate() + " " + monthNames[nData.getMonth()]);

          $('.salad .title').text(data[2].title_en);
          $('.salad .ingredients').text(data[2].ingredients_en);
          $('.salad .price .num').text(data[2].price);

          if ($.inArray (4,data[2].allergen_ids)>= 0) $('.salad .price').after( $( '<em class="vegan" title="Vegan">Vegan</em>') );
          if ($.inArray (3,data[2].allergen_ids)>= 0) $('.salad .price').after( $( '<em class="vegetarian" title="Vegetarian">Vegetarian</em>') );
          if ($.inArray (2,data[2].allergen_ids)>= 0) $('.salad .price').after( $( '<em class="lactosefree" title="Lactose free">Lactose free</em>') );
          if ($.inArray (1,data[2].allergen_ids)>= 0) $('.salad .price').after( $( '<em class="flourfree" title="Flour free">Flour free</em>') );

          if(typeof data[2].image != 'undefined' && String(data[2].image).length > 0) {
              $('.salad').append('<div class="container new"></div>');
              $('.salad .container').append('<img width="640" height="400" src="'+data[2].image+'"> ');
          }
      } else {
          $('li.salad').remove();
      }

  }); // End get JSON
                                
} // End showWeeklySalad
  
showWeeklySalad();

});