$(document).ready(function(){

$('#snsStopwatch').click(function(){
  $('#valuecontainer').stopwatch().stopwatch('toggle');
});
$('#clearStopwatch').click(function(){
  $('#valuecontainer').stopwatch().stopwatch('destroy');
  $('#valuecontainer').text('00:00:00');
});

function makeDate() {

  var fulldate = new Date();

  // weekday
  var dayarray = new Array(7);
  dayarray[0]=  "Sunday";
  dayarray[1] = "Monday";
  dayarray[2] = "Tuesday";
  dayarray[3] = "Wednesday";
  dayarray[4] = "Thursday";
  dayarray[5] = "Friday";
  dayarray[6] = "Saturday";
  var weekday = dayarray[fulldate.getDay()];

  // month
  var montharray = new Array(7);
  montharray[0]=  "January";
  montharray[1] = "February";
  montharray[2] = "March";
  montharray[3] = "April";
  montharray[4] = "May";
  montharray[5] = "June";
  montharray[6] = "July";
  montharray[7] = "August";
  montharray[8] = "September";
  montharray[9] = "October";
  montharray[10] = "November";
  montharray[11] = "December";
  var month = montharray[fulldate.getMonth()];

  // monthday
  var monthday = fulldate.getDate();
  switch (monthday){
    case 1:
      monthday = monthday + 'st';
      break;
    case 2:
      monthday = monthday + 'nd';
      break
    case 3:
      monthday = monthday + 'rd';
      break
    case 21:
      monthday = monthday + 'st';
      break
    case 22:
      monthday = monthday + 'nd';
      break
    case 23:
      monthday = monthday + 'rd';
      break
    case 31:
      monthday = monthday + 'st';
      break
    default:
      monthday = monthday + 'th';
      break;
  }

  var parseddate = weekday + ', ' + month + ' ' + monthday;
  return parseddate;
}


function timerDefault() {

  var fulldate = new Date();
  var minutes = fulldate.getMinutes();
  var hours = fulldate.getHours();

  var time = ('0' + hours).slice(-2)+':'+('0'  + minutes).slice(-2);
  var parseddate = makeDate();

  $('.time').html(time);
  $('.date').html(parseddate);
}


function timerAmpm() {

  var fulldate = new Date();
  var minutes = fulldate.getMinutes();
  var hours = fulldate.getHours();

  var mid = 'AM';
  if (hours == 12){
    mid = 'PM';
  }
  if (hours == 0){
    hours = 12;
    mid = 'AM';
  }
  if (hours > 12){
    hours = hours % 12;
    mid = 'PM';
  }

  minutes = ('0'  + minutes).slice(-2);

  time = hours + ':' + minutes + ' ' + mid;
  var parseddate = makeDate();

  $('.timeAmpm').html(time);
  $('.date').html(parseddate);

}

timerDefault();
timerAmpm();
setInterval(timerDefault, 30000);
setInterval(timerAmpm, 30000);


});