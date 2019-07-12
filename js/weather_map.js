$(document).ready(function(){
    $.get("https://cors-anywhere.herokuapp.com/https://api.darksky.net/forecast/" + weatherBox +  "/29.4241,-98.4936").done(function(source) {
        console.log(source);
        $('#insertData').html(buildHtml(source));

        function buildHtml(data) {
            var weather = "";
            // data.forEach(function(data){
                weather += '<div class="text-dark col-4">';
                weather += '<img src="img/">';
                weather += '<div>' + 'high ' + data.daily.data[0].apparentTemperatureHigh + '/' + 'Low ' + data.daily.data[0].apparentTemperatureLow + '</div>';
                weather += '<div>' + data.currently.summary + '</div>';
                weather += '<div>' + "Current Temperature: " +  data.currently.temperature + '</div>';
                weather += '<div>' + 'Wind: ' + data.currently.windSpeed + '</div>';
                weather += '<div>' + 'humidity: ' + data.currently.humidity + '</div>';
                weather += '</div>';
                console.log(weather);
            // });
            return weather;
        }

        $('#getCoords').on('click',function(e) {
            e.preventDefault();
            var lat = $('#lati').val();
            var long = $('#long').val();
            function reverseGeocode(coordinates, token) {
                var baseUrl = 'https://api.mapbox.com';
                var endPoint = '/geocoding/v5/mapbox.places/';
                return fetch(baseUrl + endPoint + long + "," + lat + '.json' + "?" + 'access_token=' + token)
                    .then(function (res) {
                        return res.json(    )
                .then(function(data) {
                    return data.features[0].place_name;
                    });
                });
            }
        });

        mapboxgl.accessToken = mapboxtoken;
        var map = new mapboxgl.Map({
            container: 'map',
            style: 'mapbox://styles/mapbox/streets-v9',
            zoom: 10,
            center: [-98.4916, 29.4252]

        });


        function reverseGeocode(coordinates, token) {
            var baseUrl = 'https://api.mapbox.com';
            var endPoint = '/geocoding/v5/mapbox.places/';
            return fetch(baseUrl + endPoint + coordinates.lng + "," + coordinates.lat + '.json' + "?" + 'access_token=' + token)
                .then(function(res) {
                    return res.json();
                })
                // to get all the data from the request, comment out the following three lines...
                .then(function(data) {
                    return data.features[0].place_name;
                });
        }
    });

        // var dateObject = new Date(data.currently.time * 1000);
        // console.log(dateObject);
});
