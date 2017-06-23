$(function() {
  
  var normalHours = {};

  /// calendar builder for both places
  function buildLayout (year, month) {

    var firstDay = new Date(year,Number(month)-1, 1);
    var lastDay = new Date(year,Number(month), 0);
    /// console.log(firstDay + "day:" + firstDay.getDay());
    /// console.log(lastDay+ "day:" + firstDay.getDay());

    $('.calendar .week').empty();

    /// fill the empty days until first day 
    firstDayIndex = firstDay.getDay();
    if (firstDay.getDay() === 0) firstDayIndex = 7
    i=1;
    while (i < firstDayIndex) { 
      $('.calendar .week').append( $( '<div><span></span></div>') );
      i++;
    }
    /// create the days of actual month
    for (i = 1; i <= lastDay.getDate(); i++) { 
      $('.calendar .week').append( $( '<div class="day'+i+'"><span>'+i+'</span></div>') );
      currentDay = new Date(year, Number(month)-1, i);
      curentMonth2Digit = ("0" + (currentDay.getMonth()+1)).slice(-2);
      currentDay2Digit = ("0" + currentDay.getDate()).slice(-2);
      
      /// either way date is required data on both places calendar
      $('.calendar .day'+i).attr('data-date',currentDay.getFullYear()+'-'+curentMonth2Digit+'-'+currentDay2Digit);
      
      /// render normalHours dataData

      o = normalHours.arany['opens_'+currentDay.getDay()];
      c = normalHours.arany['closes_'+currentDay.getDay()];
      d = new Date('01/01/2017 ' + c) - new Date( '01/01/2017 ' + o)
      if ( d === 0 ) t = tagClosed; else t = tagOpen; 
      if ( d === 0 ) s = 'closed'; else s = 'open'; 
      if ( d === 0 ) s = 'closed'; else s = 'open'; 
      if(s != 'closed') $('.arany .calendar .day'+i).attr('data-time', o.slice(0,5) + '-' + c.slice(0,5) );
      $('.arany .calendar .day'+i).attr('data-tag', t );
      $('.arany .calendar .day'+i).attr('data-class', s );
      if (currentDay.getDay() == 6 || currentDay.getDay() === 0) $('.arany .calendar .day'+i).addClass( 'weekend' ); else $('.arany .calendar .day'+i).addClass( s );
      
      o = normalHours.kristof['opens_'+currentDay.getDay()];
      c = normalHours.kristof['closes_'+currentDay.getDay()];
      d = new Date('01/01/2017 ' + c) - new Date( '01/01/2017 ' + o)
      if ( d === 0 ) t = tagClosed; else t = tagOpen; 
      if ( d === 0 ) s = 'closed'; else s = 'open'; 
      if ( d === 0 ) s = 'closed'; else s = 'open'; 
      if(s != 'closed') $('.kristof .calendar .day'+i).attr('data-time', o.slice(0,5) + '-' + c.slice(0,5) );
      $('.kristof .calendar .day'+i).attr('data-tag', t );
      $('.kristof .calendar .day'+i).attr('data-class', s );
      $('.kristof .calendar .day'+i).addClass( s );

      
      /// than based on the palce and wether it is weekend; the daily rules are the following
      /*if (currentDay.getDay() == 6 || currentDay.getDay() === 0) {
        $('.arany .calendar .day'+i).addClass('weekend');

        $('.arany .calendar .day'+i).attr('data-time','');
        $('.arany .calendar .day'+i).attr('data-tag',tagClosed);
        $('.arany .calendar .day'+i).attr('data-class','closed');


        if (currentDay.getDay() == 6) {
          $('.kristof .calendar .day'+i).addClass('open');

          $('.kristof .calendar .day'+i).attr('data-time','8:00-21:00');
          $('.kristof .calendar .day'+i).attr('data-tag',tagOpen);
          $('.kristof .calendar .day'+i).attr('data-class','open');

        }
        if (currentDay.getDay() === 0) {
          $('.kristof .calendar .day'+i).addClass('open');

          $('.kristof .calendar .day'+i).attr('data-time','8:00-17:00');
          $('.kristof .calendar .day'+i).attr('data-tag',tagOpen);
          $('.kristof .calendar .day'+i).attr('data-class','open');

        }
      } else { // egyébként hétköznap mindkét hely nyitva van
        $('.calendar .day'+i).addClass('open');

        $('.arany .calendar .day'+i).attr('data-time','7:00-19:00');
        $('.arany .calendar .day'+i).attr('data-tag',tagOpen);
        $('.arany .calendar .day'+i).attr('data-class','open');

        $('.kristof .calendar .day'+i).attr('data-time','7:00-21:00');
        $('.kristof .calendar .day'+i).attr('data-tag', tagOpen);
        $('.kristof .calendar .day'+i).attr('data-class','open');

      }*/
    }

  } /// end of calendar builder


  /// set header information based on clicked d day in DOM
  function setDayInfo (d) {
    var t = new Date();
    var week = d.parent();
    var calendar = week.parent();
    var place = calendar.parent();
    var selectedDay = new Date(d.attr('data-date'));

    if ( t.getDate() == selectedDay.getDate() && t.getMonth() == selectedDay.getMonth() && t.getFullYear() == selectedDay.getFullYear() ) {
      $('.dayinfo .date',place).html( todayTag + ':' );    
    } else if ( t.getDate()+1 == selectedDay.getDate() && t.getMonth() == selectedDay.getMonth() && t.getFullYear() == selectedDay.getFullYear() )  {
      $('.dayinfo .date',place).html( tomorrowTag + ':' );    
    } else  {
      $('.dayinfo .date',place).html( selectedDay.getDate() + ' ' + monthNames[selectedDay.getMonth()] + ':');    
    }
    
    $('.dayinfo .tag', place).html(d.attr('data-tag'));
    $('.dayinfo .time',place).html(d.attr('data-time'));
    $('.dayinfo ',place).attr('class','dayinfo '+ d.attr('data-class'));
    $('.selected',calendar).removeClass('selected');
    d.addClass('selected');
  } /// end of setDayInfo




  function loadAndRenderSpecialCalendarData (year, month) {
    var fruccolaAPI = "http://fruccola.hu/admin/api/calendar/"+year+"/"+month;

    // load special days        
    $.getJSON( fruccolaAPI ).done(function( data ) {

      // if load complete and we have data
      if(data.length  > 0) {

        /// reformat calendar days 
        for (i = 0; i < data.length; i++) {
          dataDay = new Date(data[i].day)
          day = dataDay.getDate();
          placeClass = (data[i].place_id == 1) ? 'arany' : 'kristof';
          if (data[i].status_en == 'Open') {
            $('.'+placeClass+' .calendar .day'+day).attr('data-time',(data[i].open_hour + ' - ' + data[i].close_hour));
            $('.'+placeClass+' .calendar .day'+day).attr('data-tag', tagOpen);
            $('.'+placeClass+' .calendar .day'+day).attr('data-class','open special');
            $('.'+placeClass+' .calendar .day'+day).attr('class','day'+day+' open special');
          }
          if (data[i].status_en == 'Closed') {
            $('.'+placeClass+' .calendar .day'+day).attr('data-time','');
            $('.'+placeClass+' .calendar .day'+day).attr('data-tag',tagClosed);
            $('.'+placeClass+' .calendar .day'+day).attr('data-class','closed');
            $('.'+placeClass+' .calendar .day'+day).attr('class','day'+day+' closed');
          }
        } /// for

      } /// if data
      
      /// after load set todays info into header
      var t = new Date();
      var todayDiv = $('.calendar .day'+t.getDate());
      var divDateData = todayDiv.attr('data-date');
      var divDate = new Date(divDateData);
      /// show today info
      /// console.log(divDate.getMonth() +' / '+ t.getMonth());
      if (divDate.getMonth() == t.getMonth()) {
        $('.calendar .day'+t.getDate()).addClass('today');
        setDayInfo( $('.arany .calendar .day'+t.getDate()) );
        setDayInfo( $('.kristof .calendar .day'+t.getDate()) );
      }
      
      /// console.log(month);
      /// console.log(monthNames[Number(month)-1]);
      /// set calendar month header
      $('.calendar h3').html( monthNames[Number(month)-1] );
      $('.dayinfo').show();
      
      /// set interactions on days
      $('.calendar .week div').click(function() {
        /// console.log($(this))
        /// console.log($(this).attr('data-date'));
        fbq('trackCustom', 'Calendar-DayClick', { day: $(this).attr('data-date') });
        setDayInfo ($(this));
      });
      
    }); /// getJSON

  }  /// end of loadAndRenderData
  
  

  function fruccolaCaledar () {

    var t = new Date();
    var tm = ("0" + (t.getMonth()+1)).slice(-2);
    var tmn = ("0" + (t.getMonth()+2)).slice(-2);
    var ty = t.getFullYear();
    var tyn = t.getFullYear();
    
    var fruccolaAPI = "http://fruccola.hu/admin/api/open";

    // load normal opening hours       
    $.getJSON( fruccolaAPI ).done(function( data ) {
      //console.log('data opening hours');
      //console.log(data);
      //console.log(data[1]);
      // if load complete and we have data

      if(data[1] !== undefined) normalHours.arany = data[1];
      if(data[2] !== undefined) normalHours.kristof = data[2];
      if(data[3] !== undefined) normalHours.mom = data[3];
      
      //only build calendar after we have basic "normal opening hours" data
      buildLayout (ty, tm);
      loadAndRenderSpecialCalendarData (ty, tm);
      
    }); /// getJSON normal opening hours   
  

    $('.changeMonth').click(function() {

      if ($(this).hasClass('next')) {
          if (Number(tm) == 12) {
            tyn = ty+1
            tmn = 1;
          }
          buildLayout (tyn, tmn);
          loadAndRenderSpecialCalendarData (tyn, tmn);
      } else {
          buildLayout (ty, tm);
          loadAndRenderSpecialCalendarData (ty, tm);
      }

      $('.changeMonth').toggleClass('next');

    });

  } /// end of fruccolaCaledar

  
  fruccolaCaledar();

});