// make the map centered on Duluth
var map = L.map('map').setView([46.7867, -92.1005], 13);

// add the map background
L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
    attribution: 'Map data © OpenStreetMap'
}).addTo(map);

// icons for different types of places
var natureIcon = L.icon({
    iconUrl: 'https://cdn-icons-png.flaticon.com/512/684/684908.png',
    iconSize: [30, 30]
});

var cityIcon = L.icon({
    iconUrl: 'https://cdn-icons-png.flaticon.com/512/854/854878.png',
    iconSize: [30, 30]
});

// list of places
var attractions = [
    {
        name: "Canal Park",
        coords: [46.7809, -92.0965],
        description: "A popular waterfront district with shops, restaurants, and views of Lake Superior.",
        image: "https://upload.wikimedia.org/wikipedia/commons/5/5d/Canal_Park_Duluth.jpg",
        type: "city"
    },
    {
        name: "Aerial Lift Bridge",
        coords: [46.7797, -92.0920],
        description: "An iconic Duluth landmark that lifts to allow ships to pass.",
        image: "https://upload.wikimedia.org/wikipedia/commons/3/3d/Aerial_Lift_Bridge_Duluth.jpg",
        type: "city"
    },
    {
        name: "Enger Tower",
        coords: [46.7703, -92.1183],
        description: "A scenic stone tower offering panoramic views of Duluth and Lake Superior.",
        image: "https://upload.wikimedia.org/wikipedia/commons/0/0d/Enger_Tower.jpg",
        type: "nature"
    },
    {
        name: "Lakewalk",
        coords: [46.7860, -92.0880],
        description: "A lakeside walking and biking trail with beautiful views of Lake Superior.",
        image: "https://upload.wikimedia.org/wikipedia/commons/2/2c/Duluth_Lakewalk.jpg",
        type: "nature"
    },
    {
        name: "Great Lakes Aquarium",
        coords: [46.7833, -92.1010],
        description: "An aquarium featuring freshwater exhibits from the Great Lakes region.",
        image: "https://upload.wikimedia.org/wikipedia/commons/8/8c/Great_Lakes_Aquarium.jpg",
        type: "city"
    },
    {
        name: "Bentleyville Lights",
        coords: [46.7830, -92.1025],
        description: "A popular holiday light display located near the waterfront.",
        image: "https://upload.wikimedia.org/wikipedia/commons/6/6b/Bentleyville_Duluth.jpg",
        type: "city"
    },
    {
        name: "Spirit Mountain",
        coords: [46.7240, -92.2160],
        description: "A recreation area offering skiing in winter and biking in summer.",
        image: "https://upload.wikimedia.org/wikipedia/commons/4/4f/Spirit_Mountain.jpg",
        type: "nature"
    },
    {
        name: "Leif Erikson Park",
        coords: [46.7995, -92.0870],
        description: "A scenic park along Lake Superior featuring gardens and historic monuments.",
        image: "https://upload.wikimedia.org/wikipedia/commons/7/7e/Leif_Erikson_Park.jpg",
        type: "nature"
    },
    {
        name: "Glensheen Mansion",
        coords: [46.8150, -92.0470],
        description: "A historic mansion offering tours and lakefront views.",
        image: "https://upload.wikimedia.org/wikipedia/commons/5/55/Glensheen_Mansion.jpg",
        type: "city"
    },
    {
        name: "Hawk Ridge",
        coords: [46.8333, -92.0480],
        description: "A nature reserve known for birdwatching and scenic overlooks.",
        image: "https://upload.wikimedia.org/wikipedia/commons/1/1e/Hawk_Ridge.jpg",
        type: "nature"
    }
];

// loop through and add everything to the map
attractions.forEach(function(place) {

    var iconChoice;

    // pick icon based on type
    if (place.type === "nature") {
        iconChoice = natureIcon;
    } else {
        iconChoice = cityIcon;
    }

    // add marker
    var marker = L.marker(place.coords, {icon: iconChoice}).addTo(map);

    // popup when clicked
    marker.bindPopup(`
        <h3>${place.name}</h3>
        <img src="${place.image}" width="150"><br>
        <p>${place.description}</p>
    `);
});