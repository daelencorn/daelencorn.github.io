var locations = [
      ['<div id="content">'+ '<h1>Dev Bootcamp SF</h1>'+
      ' <a href="http://devbootcamp.com/">www.devbootcamp.com</a>'+
           '</div>', 37.784646, -122.397435, 25],


      ['<div id="content">'+ '<h1>gSchool SoMa</h1>'+
      ' <a href="http://www.galvanize.com/courses/#main">www.galvanize.com</a>'+
           '</div>', 37.787560, -122.396584, 24],


      ['<div id="content">'+ '<h1>Hack Reactor</h1>'+
      ' <a href="http://www.hackreactor.com/">www.hackreactor.com</a>'+
           '</div>', 37.783697, -122.408999, 23],


      ['<div id="content">'+ '<h1>MakerSquare</h1>'+
      ' <a href="http://www.makersquare.com/">www.makersquare.com</a>'+
           '</div>', 37.787488, -122.399900, 22],


      ['<div id="content">'+ '<h1>Sabio</h1>'+
      ' <a href="http://sabio.la/">www.sabio.la</a>'+
           '</div>', 33.988523, -118.384711, 21],


      ['<div id="content">'+ '<h1>gSchool Boulder</h1>'+
      ' <a href="http://www.galvanize.com/courses/#main">www.galvanize.com</a>'+
           '</div>', 40.017780, -105.281960, 20],


      ['<div id="content">'+ '<h1>Turing School of Software and Design</h1>'+
      ' <a href="http://turing.io/">www.turing.io</a>'+
           '</div>', 39.749648, -105.000127, 19],


      ['<div id="content">'+ '<h1>The Iron Yard at Orlando</h1>'+
      ' <a href="http://theironyard.com/">www.theironyard.com</a>'+
           '</div>', 28.540928, -81.381216, 18],


      ['<div id="content">'+ '<h1>General Assembly at Atlanta</h1>'+
      ' <a href="https://generalassemb.ly/education?where=atlanta">www.generalassemb.ly</a>'+
           '</div>', 33.772282, -84.365940, 17],


      ['<div id="content">'+ '<h1>The Iron Yard at Atlanta</h1>'+
      ' <a href="http://theironyard.com/">www.theironyard.com</a>'+
           '</div>', 33.848719, -84.373340, 16],


      ['<div id="content">'+ '<h1>Dev Bootcamp Chicago</h1>'+
      ' <a href="http://devbootcamp.com/">devbootcamp.com</a>'+
           '</div>', 41.889729, -87.637772, 15],


      ['<div id="content">'+ '<h1>The Starter League</h1>'+
      ' <a href="http://www.starterleague.com/">www.starterleague.com</a>'+
           '</div>', 41.882662, -87.657021, 14],


      ['<div id="content">'+ '<h1>Dev Bootcamp NYC</h1>'+
      ' <a href="http://devbootcamp.com/">devbootcamp.com</a>'+
           '</div>', 40.706367, -74.009091, 13],


      ['<div id="content">'+ '<h1>The Flatiron School</h1>'+
      ' <a href="http://flatironschool.com/">www.flatironschool.com</a>'+
           '</div>', 40.705349, -74.013991, 12],


      ['<div id="content">'+ '<h1>The Iron Yard at Raleigh-Durham</h1>'+
      ' <a href="http://theironyard.com/locations/durham/">www.theironyard.com</a>'+
           '</div>', 35.993074, -78.904603, 11],


      ['<div id="content">'+ '<h1>Code Fellows Portland</h1>'+
      ' <a href="https://www.codefellows.org/blog/code-fellows-is-coming-to-portland-this-fall">www.codefellows.org</a>'+
           '</div>', 45.516230, -122.675907, 10],


      ['<div id="content">'+ '<h1>Epicodus</h1>'+
      ' <a href="http://www.epicodus.com/">www.epicodus.com</a>'+
           '</div>', 45.521872, -122.675646, 9],


      ['<div id="content">'+ '<h1>PDX Code Guild</h1>'+
      ' <a href="https://pdxcodeguild.com/">www.pdxcodeguild.com</a>'+
           '</div>', 45.503863, -122.675140, 8],


      ['<div id="content">'+ '<h1>Portland Code School</h1>'+
      ' <a href="http://www.portlandcodeschool.com/">www.portlandcodeschool.com</a>'+
           '</div>', 45.533135, -122.689282, 7],


      ['<div id="content">'+ '<h1>The Iron Yard at Charleston</h1>'+
      ' <a href="http://theironyard.com/">www.theironyard.com</a>'+
           '</div>', 32.793023, -79.877967, 6],


      ['<div id="content">'+ '<h1>The Iron Yard at Greenville</h1>'+
      ' <a href="http://theironyard.com/locations/greenville/">www.theironyard.com</a>'+
           '</div>', 34.840273, -82.398268,5],


      ['<div id="content">'+ '<h1>The Iron Yard at Houston</h1>'+
      ' <a href="http://theironyard.com/locations/houston/">www.theironyard.com</a>'+
           '</div>', 29.746305, -95.350369, 4],


      ['<div id="content">'+ '<h1>MakerSquare Texas</h1>'+
      ' <a href="http://www.makersquare.com/">www.makersquare.com</a>'+
           '</div>', 30.269767, -97.742665, 3],


      ['<div id="content">'+ '<h1>General Assembly at Seattle</h1>'+
      ' <a href="https://generalassemb.ly/education?where=seattle">www.generalassemb.ly</a>'+
           '</div>', 47.623358, -122.330101, 2],


      ['<div id="content">'+ '<h1>codefellows</h1>'+
      ' <a href="https://www.codefellows.org/">www.codefellows.org</a>'+
           '</div>', 47.623569, -122.336048, 1],
    ];
    var geocoder;
    var map;
    function initialize() {
  geocoder = new google.maps.Geocoder();
  }
  function codeAddress() {
  var address = document.getElementById('address').value;
  geocoder.geocode( { 'address': address}, function(results, status) {
    if (status == google.maps.GeocoderStatus.OK) {
      map.setZoom(6);
      map.setCenter(results[0].geometry.location);
    } else {
      alert('Geocode was not successful for the following reason: ' + status);
    }
  });
}

    var map = new google.maps.Map(document.getElementById('map'), {
      zoom: 6,
      center: new google.maps.LatLng(40.707437, -99.592151),
      mapTypeId: google.maps.MapTypeId.ROADMAP,
      disableDefaultUI: true
    });

    var infowindow = new google.maps.InfoWindow();

    var marker, i;

    for (i = 0; i < locations.length; i++) {  
      marker = new google.maps.Marker({
        position: new google.maps.LatLng(locations[i][1], locations[i][2]),
        map: map
      });

      google.maps.event.addListener(marker, 'click', (function(marker, i) {
        return function() {
          infowindow.setContent(locations[i][0]);
          infowindow.open(map, marker);
        }
      })(marker, i));
    }

    google.maps.event.addDomListener(window, 'load', initialize);
