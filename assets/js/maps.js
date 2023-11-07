function initMap() {
        var map = new google.maps.Map(document.getElementById("map"), {
                zoom: 3,
                center: {
                    lat: 46.619261,
                    lng: -33.134766
                }
            });
            var labels = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";

            var location = [
                { lat: 40.785091, lng: -73.968285 },
                { lat: 40.785091, lng: -73.968285 },
                { lat: 40.785091, lng: -73.968285 },
            ];

            var markers = location.map(function(location, i) {
                return new google.map.Marker({
                    position: location,
                    label: labels[i % labels.length]
                });
            });

            var markerCluster = markerClusterer(map, markers, {imagePath: 'https://developers.google.com/maps/documentation/javascript/examples/markerclusterer/m'});
        };