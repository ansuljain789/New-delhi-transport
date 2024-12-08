// Initialize and add the map
function initMap() {
    // The location to center the map on (example: New York City)
    const location = { lat: 20.243760, lng: 85.717095 };

    // The map, centered at the specified location
    const map = new google.maps.Map(document.getElementById("map"), {
        zoom: 12,            
        center: location,
    });

    // Adding a marker at the center location
    const marker = new google.maps.Marker({
        position: location,
        map: map,
        title: "Hello, New York!",
    });
}
