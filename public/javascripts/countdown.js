$(function() {
  var now = new Date();
  var currentDate = Date.now(),
      endDate = new Date((now.getFullYear()) + '/10/30');

  var $days = $('.days'),
      $hours = $('.hours'),
      $mins = $('.minutes'),
      $secs = $('.seconds');

  function format(v) {
    return (v.toString().length == 1) ? '0' + v : v;
  }

  setInterval(function() {

    currentDate = Date.now();
    if (currentDate < endDate) {

      var time = endDate - currentDate;

      var seconds = Math.floor((time / 1000) % 60);
      var minutes = Math.floor((time / 60000) % 60);
      var hours = Math.floor((time / 3600000) % 24);
      var days = Math.floor((time / 86400000)) + ' days until graduation on October 29, 2015.';

      $secs.text( format(seconds) );
      $mins.text( format(minutes) );
      $hours.text( format(hours) );
      $days.text( days );

   }

  }, 100);

});
