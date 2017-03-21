$(function() {

  /// table builder for both places
  function buildLayout () {
    for (i=6; i>=0; i--) {
      tr = $('<tr><td class="day" data-day-id="'+i+'">'+dayNames[i]+':</td><td></td></tr>');
      if (i===0) {
        $('.table table').append(tr);
      } else {
        $('.table  table').prepend(tr);
      }
    } /// end of week long for cycle
  } /// end of table builder


  function loadAndRenderData () {
    var fruccolaAPI = "http://fruccola.hu/admin/api/open";

    // load special days        
    $.getJSON( fruccolaAPI ).done(function( data ) {

      // if load complete and we have data
      if(data) {
        
        // cycle for arany
        for (i=0; i<7; i++) {
          opens = String(data[1]['opens_'+i]).split(':');
          closes = String(data[1]['closes_'+i]).split(':');
          td = $('td[data-day-id='+i+']', $('.arany'));

          interval_hu =  opens[0] + ':' + opens[1] + ' - ' + closes[0] + ':' + closes[1];
          interval_en = '';
          if(opens[0] === closes[0]) {
            interval_hu = tagClosed;
            td.parent().addClass('weekend');
          } 
          td.next().text(interval_hu);
        } /// end of arany cycle
        
        // cycle for kristof
        for (i=0; i<7; i++) {
          opens = String(data[2]['opens_'+i]).split(':');
          closes = String(data[2]['closes_'+i]).split(':');
          td = $('td[data-day-id='+i+']', $('.kristof'));

          interval_hu =  opens[0] + ':' + opens[1] + ' - ' + closes[0] + ':' + closes[1];
          interval_en = '';
          if(opens[0] === closes[0]) {
            interval_hu = tagClosed;
            td.parent().addClass('weekend');
          } 
          td.next().text(interval_hu);
        } /// end of kristof cycle
       
      } /// if data
      
      /// after load set today
      var t = new Date();
      var todayCell = $('.calendar .day'+t.getDate());

      
    }); /// getJSON

  }  /// end of loadAndRenderData

  function fruccolaOpen () {

    buildLayout ();
    loadAndRenderData ();

  } /// end of fruccolaOpen

  fruccolaOpen();

});