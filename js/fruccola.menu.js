$(function() {

  /// Build Navigation
  function showNavigation () {
      var fruccolaAPI = "http://fruccola.hu/admin/api/menu/categories";
      var url = window.location.pathname;
      var urlsplit = url.split("/");
      var category = urlsplit[urlsplit.length-1];
      $.getJSON( fruccolaAPI ).done(function( data ) {
          $.each(data, function(index, value){

            item = $('<li></li>');
            item.addClass(data[index].name_class.replace(/,/g,' '));
            
            if (data[index]['slug_'+language].toLowerCase() === category.toLowerCase()){
              item.addClass('active');
              $('.content').addClass(data[index].name_class);
              $('.content h1').html(data[index]['name_'+language]);
              if (category != 'daily-menu' && category != 'napi-menu') $('.content .subtitle').html(data[index]['description_'+language]);
            } else {
              item.addClass('inactive');
            }

            a = $('<a>' + data[index]["name_"+language] + '</a>');
            a.click(function (e){
              console.log($(this).html());
              fbq('trackCustom', 'Menu-CategoryClick', { category: $(this).html() });
              //// e.preventDefault();
            });
            a.attr('href',data[index]['slug_'+language]);
            item.append(a);

            $('.menu-navigation').append(item);
          });
      });
  }
  
  function showMenuItems(slug) {
      var fruccolaAPI = "http://fruccola.hu/admin/api/menu/"+slug;

      $.getJSON( fruccolaAPI ).done(function( data ) {
          $.each(data, function(index, value){
            
            item = $('<li></li>');
            item.addClass(data[index].add_class.replace(/,/g,' '));
            

            h2 = $('<h2></h2>');
            h2.html(data[index]['name_'+language]);
            if(data[index].order_number !== '' && data[index].order_number !== null) h2.prepend($('<strong>'+data[index].order_number+'</strong>'))
            item.append(h2);

            menuid = 'menu'+data[index].id;

            a = $('<a href="#" id="'+menuid+'"></a>');
            a.addClass('love');
            a.click(function(e){
                e.preventDefault();
                $(this).addClass('true');
                var this_id = $(this).attr('id')
                love_cookie = getCookie("loved_menu_items");
                if (love_cookie === "" || love_cookie === undefined) {
                  love_cookie = '[]';
                }
                love_array = JSON.parse(love_cookie);
                if ($.inArray(this_id, love_array) === -1) love_array.push(this_id);
                setCookie("loved_menu_items", JSON.stringify(love_array), 365);
                /// console.log({ id: $(this).attr('id').replace('menu',''), item: $('h2', $(this).closest('li')).html(), category: $('h1', $(this).closest('section')).html() });
                fbq('trackCustom', 'Menu-LoveClick', { id: $(this).attr('id').replace('menu',''), item: $('h2', $(this).closest('li')).html(), category: $('h1', $(this).closest('section')).html() });
            });
            love_cookie = getCookie("loved_menu_items");
            if (love_cookie !== "" && love_cookie !== undefined) {
              love_array = JSON.parse(love_cookie);
              if ($.inArray(menuid, love_array) >= 0) a.addClass('true');
            }
            item.append(a);

            p = $('<p></p>');
            p.addClass('description');
            p.html(data[index]['description_'+language].replace(/\//g,'<br/>'));
            item.append(p);

            p = $('<p></p>');
            p.addClass('properties');
            
            if ( data[index].allergen_ids.in_array(1) >= 0 ) p.append( $( ff ).addClass('flourfree') ); // 1 - flourfree
            if ( data[index].allergen_ids.in_array(2) >= 0 ) p.append( $( lf ).addClass('lactosefree') ); // 2 - lactosefree
            if ( data[index].allergen_ids.in_array(3) >= 0 ) p.append( $( vr ).addClass('vegetarian') ); // 3 - vegetarian
            if ( data[index].allergen_ids.in_array(4) >= 0 ) p.append( $( vn ).addClass('vegan')  ); // 4 - vegan
            if ( data[index].allergen_ids.in_array(5) >= 0 ) p.append( $( hh ).addClass('hot')  ); // 5 - hot
            
            if ( data[index].KCAL > 0) p.append( $( '<em class="calories" title="'+tag_calories+'">'+data[index].KCAL+' kcal</em>') );
            if (p.children().length > 0) item.append(p);

            prices = String(data[index].price).split('/'); // it's neccessary to handle  multiple prices for drinks and hot-drinks
            div = $('<div class=price></div>');
            $.each(prices, function(price_index, price_value){
              p = $('<p></p>');
              pv = String(price_value).split('-')
              strong = $('<strong></strong>');
              strong.html(pv[0].trim());
              p.append(strong);
              if (pv[1]) p.append(' /'+pv[1]);
              div.append(p);
            });
            item.append(div);
            
            if (data[index].visible) $('.content .items').append(item); // only if visible

            
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
  
 
  function setCookie(cname, cvalue, exdays) {
    var d = new Date();
    d.setTime(d.getTime() + (exdays*24*60*60*1000));
    var expires = "expires="+d.toUTCString();
    document.cookie = cname + "=" + cvalue + "; " + expires;
  }

  function getCookie(cname) {
    var name = cname + "=";
    var ca = document.cookie.split(';');
    for(var i = 0; i < ca.length; i++) {
        var c = ca[i];
        while (c.charAt(0) == ' ') {
            c = c.substring(1);
        }
        if (c.indexOf(name) === 0) {
            return c.substring(name.length, c.length);
        }
    }
    return "";
  }
  
  
  function fruccolaMenu (s) {
    showNavigation();
    if (s == 'teszta' || s == 'pasta') showDailyPasta();
    showMenuItems(s);
  } /// end of fruccolaMenu
  
  
  fruccolaMenu(menu_slug);

});