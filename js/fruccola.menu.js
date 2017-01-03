$(function() {

  /// Build Navigation
  function showNavigation () {
      var fruccolaAPI = "http://fruccola.hu/admin/api/menu/categories";
      var lang = 'en';
      var url = window.location.pathname;
      var urlsplit = url.split("/");
      var category = urlsplit[urlsplit.length-1];
      $.getJSON( fruccolaAPI ).done(function( data ) {
          $.each(data, function(index, value){

            item = $('<li></li>');
            item.addClass(data[index].name_class.replace(',',''));
            item.addClass((data[index]['slug_'+lang] == category)?'active':'inactive');

            a = $('<a>' + data[index]["name_"+lang] + '</a>');
            a.attr('href',data[index]['slug_'+lang]);
            item.append(a);

            $('.menu-navigation').append(item);
          });
      });
  }

  function showDailyPasta() {
      var fruccolaAPI = "http://fruccola.hu/admin/api/daily_pasta";
      $.getJSON( fruccolaAPI ).done(function( data ) {
          /// var nData = new Date() ;
          /// $('.date').html(nData.getDate() + " "  + monthNames[nData.getMonth()] + ", " + dayNames[nData.getDay()]);   
          if(typeof data[1] != 'undefined') {
            $('.content.pasta .location.arany').show();
            $('.arany .pasta').html(data[1].pasta_en);
          }
          if(typeof data[2] != 'undefined') {
            $('.content.pasta .location.kristof').show();
            $('.kristof .pasta').html(data[2].pasta_en);
          }
      });
  }
  
  function showDailyMenu() {
    var fruccolaAPI = "http://fruccola.hu/admin/api/daily_menu";
    $.getJSON( fruccolaAPI ).done(function( data ) {

        var nData = new Date() ;
        $('.dailymenu .date').html(nData.getDate() + " "  + monthNames[nData.getMonth()] + ", " + dayNames[nData.getDay()]);
        if (nData.getDay() === 1) $('.dailymenu').addClass('meatfree');
        if (nData.getDay() === 1) $('.dailymenu h1').text(daily_menu_monday);
        /*if (nData.getDay() === 3) $('.offer').addClass('beef');*/
        if (nData.getDay() === 5) $('.dailymenu').addClass('fish');
        if (nData.getDay() === 5) $('.dailymenu h1').text(daily_menu_friday);        

        if(typeof data[1] != 'undefined') {

          $('.offer .arany .soup span').html(data[1].soup_en);
          $('.offer .arany .main span').html(data[1].dish_en);

          if ($.inArray (1,data[1].soup_allergen_ids)>= 0) $('.offer .arany .soup').append( $( ff ).addClass('flourfree') );
          if ($.inArray (2,data[1].soup_allergen_ids)>= 0) $('.offer .arany .soup').append( $( lf ).addClass('lactosefree') );
          if ($.inArray (3,data[1].soup_allergen_ids)>= 0) $('.offer .arany .soup').append( $( vr ).addClass('vegetarian') );
          if ($.inArray (4,data[1].soup_allergen_ids)>= 0) $('.offer .arany .soup').append( $( vn ).addClass('vegan')  );

          if ($.inArray (1,data[1].dish_allergen_ids)>= 0) $('.offer .arany .main').append( $( ff ).addClass('flourfree') );
          if ($.inArray (2,data[1].dish_allergen_ids)>= 0) $('.offer .arany .main').append( $( lf ).addClass('lactosefree') );
          if ($.inArray (3,data[1].dish_allergen_ids)>= 0) $('.offer .arany .main').append( $( vr ).addClass('vegetarian') );
          if ($.inArray (4,data[1].dish_allergen_ids)>= 0) $('.offer .arany .main').append( $( vn ).addClass('vegan')  );
        }

        if(typeof data[2] != 'undefined') {

          $('.offer .kristof .soup span').html(data[2].soup_en);
          $('.offer .kristof .main span').html(data[2].dish_en);

          if ($.inArray (1,data[2].soup_allergen_ids)>= 0) $('.offer .kristof .soup').append( $( ff ).addClass('flourfree') );
          if ($.inArray (2,data[2].soup_allergen_ids)>= 0) $('.offer .kristof .soup').append( $( lf ).addClass('lactosefree') );
          if ($.inArray (3,data[2].soup_allergen_ids)>= 0) $('.offer .kristof .soup').append( $( vr ).addClass('vegetarian') );
          if ($.inArray (4,data[2].soup_allergen_ids)>= 0) $('.offer .kristof .soup').append( $( vn ).addClass('vegan')  );

          if ($.inArray (1,data[2].dish_allergen_ids)>= 0) $('.offer .kristof .main').append( $( ff ).addClass('flourfree') );
          if ($.inArray (2,data[2].dish_allergen_ids)>= 0) $('.offer .kristof .main').append( $( lf ).addClass('lactosefree') );
          if ($.inArray (3,data[2].dish_allergen_ids)>= 0) $('.offer .kristof .main').append( $( vr ).addClass('vegetarian') );
          if ($.inArray (4,data[2].dish_allergen_ids)>= 0) $('.offer .kristof .main').append( $( vn ).addClass('vegan')  );
        }
    });
  }
  
  function showMenuItems(slug) {
      var fruccolaAPI = "http://fruccola.hu/admin/api/menu/"+slug;
      var lang = 'en';
      $.getJSON( fruccolaAPI ).done(function( data ) {
          $.each(data, function(index, value){

            item = $('<li></li>');
            item.addClass(data[index].add_class.replace(',',''));
            $('.content .items').append(item);

            h2 = $('<h2></h2>');
            h2.html(data[index]['name_'+lang]);
            item.append(h2);

            p = $('<p></p>');
            p.html(data[index]['description_'+lang].replace(/\//g,'<br/>'));
            item.append(p);

            prices = String(data[index].price).split('/'); // it's neccessary to handle  multiple prices for drinks and hot-drinks
            $.each(prices, function(price_index, price_value){
              pv = String(price_value).split('-')
              p = $('<p class=price></p>');
              strong = $('<strong></strong>');
              strong.html(pv[0].trim());
              p.append(strong);
              if (pv[1]) p.append(' /'+pv[1]);
              item.append(p);
            });


            if ( data[index].add_class.indexOf('flourfree') >= 0 ) item.append( $( ff ).addClass('flourfree') );
            if ( data[index].add_class.indexOf('lactosefree') >= 0 ) item.append( $( lf ).addClass('lactosefree') );
            if ( data[index].add_class.indexOf('vegetarian') >= 0 ) item.append( $( vr ).addClass('vegetarian') );
            if ( data[index].add_class.indexOf('vegan') >= 0 ) item.append( $( vn ).addClass('vegan')  );

            if ( data[index].KCAL > 0) item.append( $( '<em class="calories" title="'+tag_calories+'">'+data[index].KCAL+' kcal</em>') );

          });
      });
  }
  function   showWeeklySalad () {
    
  }
  
  function fruccolaMenu (s) {

    showNavigation();
    if (s == 'teszta' || s == 'pasta') showDailyPasta();
    if (s == 'napi-menu' || s == 'daily-menu') showDailyMenu();
    if (s == 'slata' || s == 'salad') showWeeklySalad();
    showMenuItems(s);
    
  } /// end of fruccolaMenu

  fruccolaMenu(menu_slug);

});