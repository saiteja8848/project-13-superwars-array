const PLAYERS = [
    "Spiderman",
    "Captain America",
    "Wonderwoman",
    "Popcorn",
    "Gemwoman",
    "Bolt",
    "Antwoman",
    "Mask",
    "Tiger",
    "Captain",
    "Catwoman",
    "Fish",
    "Hulk",
    "Ninja",
    "Black Cat",
    "Volverine",
    "Thor",
    "Slayer",
    "Vader",
    "Slingo"
];
// initialize players with image and strength
const initPlayers = (players) => {
    let detailedPlayers = '';

    // Instead of forloop use Map method
    // Code here
    var data = players.map(
        function (name, index) {

            if (index % 2 == 0) {
                var obj = {
                    name: name,
                    strength: getRandomStrength(),
                    image: "./images/super-" + (index + 1) + ".png",
                    type: "hero"
                };
                return obj;
            }
            else {
                var obj = {
                    name: name,
                    strength: getRandomStrength(),
                    image: "./images/super-" + (index + 1) + ".png",
                    type: "villain"
                };
                return obj;
            }
            //console.log("name:", name);
            //console.log("Index:", index);
        }
    );
    //console.log(data.toString());
    return data;
}

// getting random strength
const getRandomStrength = () => {
    return Math.ceil(Math.random() * 100);
}

// Build player template
const buildPlayers = (players, type) => {
    let fragment = '';

    // Instead of using for loop
    // Use chaining of Array methods - filter, map and join
    // Type your code here

    var data = players.map(
        function (player, index) {
            fragment += `<div class="player">
            <img src="${player.image}" alt="">
            <div class="name">${player.name}</div>
            <div class="strength">${player.strength}</div>
            </div>`
        }
    );

    return fragment;
}

// Display players in HTML
const viewPlayers = (players) => {
    document.getElementById('heroes').innerHTML = buildPlayers(players, 'hero');
    document.getElementById('villains').innerHTML = buildPlayers(players, 'villain');
}


window.onload = () => {
    viewPlayers(initPlayers(PLAYERS));
}
