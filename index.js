 // Initialize the map centered on Kenya
 var map = L.map('map').setView([-1.286389, 36.817223], 6);

 // Add a tile layer to the map
 L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
     maxZoom: 18,
     attribution: '© OpenStreetMap contributors'
 }).addTo(map);

 // Generate random data for various cities in Kenya
 var cities = [
     { name: "Nairobi", coordinates: [-1.2921, 36.8219] },
     { name: "Mombasa", coordinates: [-4.0435, 39.6682] },
     { name: "Kisumu", coordinates: [-0.0917, 34.7679] },
     { name: "Nakuru", coordinates: [-0.3031, 36.0800] },
     { name: "Eldoret", coordinates: [0.5143, 35.2698] },
     { name: "Thika", coordinates: [-1.0322, 37.0693] },
     { name: "Nyeri", coordinates: [-0.4167, 36.9500] },
     { name: "Garissa", coordinates: [-0.4532, 39.6460] },
     { name: "Malindi", coordinates: [-3.2177, 40.1167] },
     { name: "Kitale", coordinates: [1.0214, 35.0025] }
 ];

 var heatData = cities.map(city => {
     var intensity = Math.random(); // Generate a random intensity between 0 and 1
     return [city.coordinates[0], city.coordinates[1], intensity];
 });

 // Adding the heatmap layer
 var heat = L.heatLayer(heatData, {
     radius: 25,
     blur: 100,
     maxZoom: 5,
     gradient: {
         0.0: 'red',    // Low intensity
         0.5: 'lime',    // Medium intensity
         0.7: 'yellow',  // Higher intensity
         1.0: 'blue'     // Maximum intensity
     }
 }).addTo(map);

 cities.forEach(city => {
     var marker = L.marker(city.coordinates).addTo(map);
     marker.bindPopup(`<b>${city.name}</b><br>Intensity: ${city.intensity.toFixed(2)}`);
 });