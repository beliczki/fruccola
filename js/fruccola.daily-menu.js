$(function() {


  function showDailyMenu() {
    var fruccolaAPI = "http://fruccola.hu/admin/api/daily_menu";
    $.getJSON( fruccolaAPI ).done(function( data ) {

        var nData = new Date() ;
        $('.subtitle').html(nData.getDate() + " "  + monthNames[nData.getMonth()] + ", " + dayNames[nData.getDay()]);

      
        // prepend miatt az utolsó kártyával kezdünk
        // Build MOM daily menu card
        buildCardItem ('mom');
        if(typeof data[3] != 'undefined') {
          $('.mom .soup .description').html(data[3]['soup_'+language]);
          $('.mom .main-dish .description').html(data[3]['dish_'+language]);
          addAllergenes (data[3], 'mom','soup','soup');
          addAllergenes (data[3], 'mom','dish','main-dish');
        } else {
          $('.mom').addClass('unavailable');
        }
        $('#dailymenu-holder .mom').addClass('new');
      
        // Build arany daily menu card
        buildCardItem ('arany');
        if(typeof data[1] != 'undefined') {
          //console.log('language: ' +data[1]['soup_'+language]);
          $('.arany .soup .description').html(data[1]['soup_'+language]);
          $('.arany .main-dish .description').html(data[1]['dish_'+language]);
          addAllergenes (data[1], 'arany','soup','soup');
          addAllergenes (data[1], 'arany','dish','main-dish');
        } else {
          $('.arany').addClass('unavailable');
        }
      
        // Build kristof daily menu card
        buildCardItem ('kristof');
        if(typeof data[2] != 'undefined') {
          $('.kristof .soup .description').html(data[2]['soup_'+language]);
          $('.kristof .main-dish .description').html(data[2]['dish_'+language]);
          addAllergenes (data[2], 'kristof','soup','soup');
          addAllergenes (data[2], 'kristof','dish','main-dish');
        } else {
          $('.kristof').addClass('unavailable');
        }
      
        // fill in pricing coming form admin
        if(typeof data.pricing != 'undefined') {
          $('.soup .price strong').html(data.pricing.soup);
          $('.main-dish .price strong').html(data.pricing.dish);
          $('.soup-and-maindish .price strong').html(data.pricing.combo);
        }
        // modify cards when items are not available
        $( ".today" ).each(function( index ) {
          if( $('.main-dish', this).html() == '' ||  $('.main-dish', this).html() == 'Brunch nap' ||  $('.main-dish', this).html() == 'Brunch day') {
            $('.main-dish', this).setAttributes('style','display:none;');
            $('.soup-and-maindish', this).setAttributes('style','display:none;');
          }
        });
        
        

      
        if (nData.getDay() === 1) {
          $('.dailymenu').addClass('meatfree');
          $('.dailymenu h1').text(daily_menu_monday);
        }
        if (nData.getDay() === 1) 
        /*if (nData.getDay() === 3) $('.offer').addClass('beef');*/
        if (nData.getDay() === 5) {
          $('.dailymenu').addClass('fish');
          $('.dailymenu h1').text(daily_menu_friday);
        }
        if (nData.getDay() === 6 || nData.getDay() === 0) {
          /*$('.soup-and-maindish').addClass('hide');
          $('.arany .main-dish').addClass('hide');
          $('.kristof .main-dish').html(daily_menu_brunh_txt); */
        }
    });
  }
  
  function addAllergenes (data, loc, plate, plate_class) {
    if ($.inArray (1,data[plate+'_allergen_ids']) >= 0) $(' .'+loc+' .'+plate_class+' .properties').append( $( ff ) );
    if ($.inArray (2,data[plate+'_allergen_ids']) >= 0) $(' .'+loc+' .'+plate_class+' .properties').append( $( lf ) );
    if ($.inArray (3,data[plate+'_allergen_ids']) >= 0) $(' .'+loc+' .'+plate_class+' .properties').append( $( vr ) );
    if ($.inArray (4,data[plate+'_allergen_ids']) >= 0) $(' .'+loc+' .'+plate_class+' .properties').append( $( vn ) );
    if ($.inArray (5,data[plate+'_allergen_ids']) >= 0) $(' .'+loc+' .'+plate_class+' .properties').append( $( hh ) );
    if ($.inArray (6,data[plate+'_allergen_ids']) >= 0) $(' .'+loc+' .'+plate_class+' .properties').append( $( cm ) );
  }
  
  function buildCardItem (loc){
    item = $('<li></li>').addClass(loc + ' today'); 
      
    h2 = $('<h2></h2>').html(daily_menu_txt+'<br/>'+ eval('daily_menu_' + loc));
    item.append(h2);

    div = $('<div></div>').addClass('soup');
    p = $('<p></p>').addClass('description'); 
    div.append(p);
    p = $('<p></p>').addClass('properties'); 
    div.append(p);
    p = $('<p><strong></strong></p>').addClass('price'); 
    div.append(p);
    item.append(div);

    div = $('<div></div>').addClass('main-dish');
    p = $('<p></p>').addClass('description'); 
    div.append(p);
    p = $('<p></p>').addClass('properties'); 
    div.append(p);
    p = $('<p><strong></strong></p>').addClass('price'); 
    div.append(p);
    item.append(div);

    div = $('<div></div>').addClass('soup-and-maindish');
    p = $('<p></p>').addClass('description').html(daily_menu_sm_txt); 
    div.append(p);
    p = $('<p><strong></strong></p>').addClass('price'); 
    div.append(p);
    item.append(div);

    div = $('<div></div>').addClass('subscribe');
    a = $('<a href=/'+daily_menu_subscribe_url+'?location='+loc+'></a>').addClass('button').html(daily_menu_subscribe_txt); 
    div.append(a);
    item.append(div);
    
    $('#dailymenu-holder').prepend(item);

    
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
  
  
  function fruccolaDailyMenu (s) {
    showDailyMenu();
  } /// end of fruccolaDailyMenu
  
  
  fruccolaDailyMenu();

});