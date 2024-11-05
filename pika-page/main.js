const pokemonImage = document.getElementById("js--pokeImage")
const catchButton = document.getElementById("js--catchbutton")
const pokemonText = document.getElementById("js--pokeText")
let running = false
let randomNumber = Math.floor(Math.random() * 1009 + 1);

let pokemon = fetch("https://pokeapi.co/api/v2/pokemon/" + randomNumber)
        .then(function (response) {
                return response.json();
        })
        .then(function (realData) {
                pokemonImage.src = realData.sprites.front_default
                pokemonImage.text = realData.name
                pokemonName = realData.name
                pokemonImageshiny = realData.sprites.front_shiny

                pokemonName = pokemonName.charAt(0).toUpperCase() + pokemonName.slice(1);
                pokemonText.innerText = "A wild " + pokemonName + " appeared"
                const shinychance = Math.floor(Math.random() * 9 + 1);

                if (shinychance === 1) {
                        pokemonImage.src = pokemonImageshiny
                        pokemonText.innerText = "A SHINY " + pokemonName + " appeared"
                }
        })

catchButton.onclick = function () {

        if (running === false) {
                let catchNumber = Math.floor(Math.random() * 2);
                if (catchNumber === 0) {
                        pokemonText.innerText = pokemonName + " fled"

                }
                else {
                        pokemonText.innerText = pokemonName + " was caught"

                }
                running = true
        }

};


const serie = document.getElementById("js--title")
const text = document.getElementById("js--text")
const randomNumber2 = Math.random();
const result = randomNumber2 < 0.5 ? 495 : 1505;

let film = fetch("https://api.tvmaze.com/shows/" + result)
        .then(function (response) {
                return response.json();
        })
        .then(function (realData) {
                serie.innerText = realData.name
                text.innerHTML = realData.summary
        })

const naam = document.getElementById("js--name")

const input = document.getElementById("js--input")

input.onkeyup = function (event) {
        if (event.keyCode === 13) {
                let name = input.value

                let age = fetch("https://api.agify.io?name=" + name)
                        .then(function (response) {
                                return response.json();
                        })
                        .then(function (data) {
                                naam.innerText = data.age;
                                input.style.display = "none";
                        });
        }
}



function getPokemon(){
        let normal = 0, fighting = 0, flying = 0, poison = 0, ground = 0, rock = 0, bug = 0,
        ghost = 0, steel = 0, fire = 0, water = 0, grass = 0, electric = 0, psychic = 0,
        ice = 0, dragon = 0, dark = 0, fairy = 0, unknown = 0, shadow = 0;

        const labels = ['normal', 'fighting', 'flying', 'poison', 'ground', 'rock',
         'bug', 'ghost', 'steel', 'fire', 'water', 'grass', 'electric', 'psychic',
          'ice', 'dragon', 'dark', 'fairy', 'unknown', 'shadow']

        for(i = 0; i < 10; i++){
        let randomNumber = Math.floor(Math.random() * 1009 + 1);
        let pokemonChart = fetch("https://pokeapi.co/api/v2/pokemon/" + randomNumber)
        .then(function (response) {
        return response.json();
        })
        .then( function(pokemonChart){
                switch(pokemonChart.types[0].type.name){
                        case 'normal':
                                normal = normal + 1
                                break;
                        case 'fighting':
                                fighting = fighting + 1;
                                break;
                        case 'flying':
                                flying = flying + 1
                                break;
                        case 'poison':
                                poison = poison + 1
                                break;
                        case 'ground':
                                ground = ground + 1
                                break;
                        case 'rock':
                                rock = rock + 1
                                break;
                        case 'bug':
                                bug = bug + 1
                                break;
                        case 'ghost':
                                ghost = ghost + 1
                                break;
                        case 'steel':
                                steel = steel + 1
                                break;
                        case 'fire':
                                fire = fire + 1
                                break;
                        case 'water':
                                water = water + 1
                                break;
                        case 'grass':
                                grass = grass + 1
                                break;
                        case 'electric':
                                electric = electric + 1
                                break;
                        case 'psychic':
                                psychic = psychic + 1
                                break;
                        case 'ice':
                                ice = ice + 1
                                break;
                        case 'dragon':
                                dragon = dragon + 1
                                break;
                        case 'dark':
                                dark = dark + 1
                                break;
                        case 'fairy':
                                fairy = fairy + 1
                                break;
                        case 'unknown':
                                unknown = unknown + 1
                                break;
                        case 'shadow':
                                shadow = shadow + 1
                                break;
                        }
                }).then(function(){
                        dataPokemon.datasets[0].data = [normal, fighting, flying, poison, ground, rock,
                                bug, ghost, steel, fire, water, grass, electric, psychic,
                                ice, dragon, dark, fairy, unknown, shadow];
                        graph.update();
                });
        }
        const dataPokemon = {
                labels: labels,
                datasets: [
                        {
                                labels:"Pokemon types",
                                data: [normal, fighting, flying, poison, ground, rock,
                                bug, ghost, steel, fire, water, grass, electric, psychic,
                                ice, dragon, dark, fairy, unknown, shadow],
                                backgroundColor: ['#FF6B6B', '#FFD93D', '#6BCB77', '#4D96FF', '#F473B8'],
                        }
                ]
        }
        const configPokemon = {
                type:'bar',
                data: dataPokemon,
        }

        const graph = new Chart(document.getElementById("chart--1"), configPokemon);
}

getPokemon();



function getPokemonchart2(){
        let normal = 0, fighting = 0, flying = 0, poison = 0, ground = 0, rock = 0, bug = 0,
        ghost = 0, steel = 0, fire = 0, water = 0, grass = 0, electric = 0, psychic = 0,
        ice = 0, dragon = 0, dark = 0, fairy = 0, unknown = 0, shadow = 0;

        const labels = ['normal', 'fighting', 'flying', 'poison', 'ground', 'rock',
         'bug', 'ghost', 'steel', 'fire', 'water', 'grass', 'electric', 'psychic',
          'ice', 'dragon', 'dark', 'fairy', 'unknown', 'shadow']

        for(i = 0; i < 10; i++){
        let randomNumber = Math.floor(Math.random() * 1009 + 1);
        let pokemonChart = fetch("https://pokeapi.co/api/v2/pokemon/" + randomNumber)
        .then(function (response) {
        return response.json();
        })
        .then( function(pokemonChart){
                switch(pokemonChart.types[0].type.name){
                        case 'normal':
                                normal = normal + 1
                                break;
                        case 'fighting':
                                fighting = fighting + 1;
                                break;
                        case 'flying':
                                flying = flying + 1
                                break;
                        case 'poison':
                                poison = poison + 1
                                break;
                        case 'ground':
                                ground = ground + 1
                                break;
                        case 'rock':
                                rock = rock + 1
                                break;
                        case 'bug':
                                bug = bug + 1
                                break;
                        case 'ghost':
                                ghost = ghost + 1
                                break;
                        case 'steel':
                                steel = steel + 1
                                break;
                        case 'fire':
                                fire = fire + 1
                                break;
                        case 'water':
                                water = water + 1
                                break;
                        case 'grass':
                                grass = grass + 1
                                break;
                        case 'electric':
                                electric = electric + 1
                                break;
                        case 'psychic':
                                psychic = psychic + 1
                                break;
                        case 'ice':
                                ice = ice + 1
                                break;
                        case 'dragon':
                                dragon = dragon + 1
                                break;
                        case 'dark':
                                dark = dark + 1
                                break;
                        case 'fairy':
                                fairy = fairy + 1
                                break;
                        case 'unknown':
                                unknown = unknown + 1
                                break;
                        case 'shadow':
                                shadow = shadow + 1
                                break;
                        }
                }).then(function(){
                        dataPokemon.datasets[0].data = [normal, fighting, flying, poison, ground, rock,
                                bug, ghost, steel, fire, water, grass, electric, psychic,
                                ice, dragon, dark, fairy, unknown, shadow];
                        graph.update();
                });
        }
        const dataPokemon = {
                labels: labels,
                datasets: [
                        {
                                labels:"Pokemon types",
                                data: [normal, fighting, flying, poison, ground, rock,
                                bug, ghost, steel, fire, water, grass, electric, psychic,
                                ice, dragon, dark, fairy, unknown, shadow],
                                backgroundColor: ['#FF6B6B', '#FFD93D', '#6BCB77', '#4D96FF', '#F473B8'],
                        }
                ]
        }
        const configPokemon = {
                type:'radar',
                data: dataPokemon,
        }

        const graph = new Chart(document.getElementById("chart--2"), configPokemon);
}

getPokemonchart2();




function getPokemonchart3(){
        let normal = 0, fighting = 0, flying = 0, poison = 0, ground = 0, rock = 0, bug = 0,
        ghost = 0, steel = 0, fire = 0, water = 0, grass = 0, electric = 0, psychic = 0,
        ice = 0, dragon = 0, dark = 0, fairy = 0, unknown = 0, shadow = 0;

        const labels = ['normal', 'fighting', 'flying', 'poison', 'ground', 'rock',
         'bug', 'ghost', 'steel', 'fire', 'water', 'grass', 'electric', 'psychic',
          'ice', 'dragon', 'dark', 'fairy', 'unknown', 'shadow']

        for(i = 0; i < 10; i++){
        let randomNumber = Math.floor(Math.random() * 1009 + 1);
        let pokemonChart = fetch("https://pokeapi.co/api/v2/pokemon/" + randomNumber)
        .then(function (response) {
        return response.json();
        })
        .then( function(pokemonChart){
                switch(pokemonChart.types[0].type.name){
                        case 'normal':
                                normal = normal + 1
                                break;
                        case 'fighting':
                                fighting = fighting + 1;
                                break;
                        case 'flying':
                                flying = flying + 1
                                break;
                        case 'poison':
                                poison = poison + 1
                                break;
                        case 'ground':
                                ground = ground + 1
                                break;
                        case 'rock':
                                rock = rock + 1
                                break;
                        case 'bug':
                                bug = bug + 1
                                break;
                        case 'ghost':
                                ghost = ghost + 1
                                break;
                        case 'steel':
                                steel = steel + 1
                                break;
                        case 'fire':
                                fire = fire + 1
                                break;
                        case 'water':
                                water = water + 1
                                break;
                        case 'grass':
                                grass = grass + 1
                                break;
                        case 'electric':
                                electric = electric + 1
                                break;
                        case 'psychic':
                                psychic = psychic + 1
                                break;
                        case 'ice':
                                ice = ice + 1
                                break;
                        case 'dragon':
                                dragon = dragon + 1
                                break;
                        case 'dark':
                                dark = dark + 1
                                break;
                        case 'fairy':
                                fairy = fairy + 1
                                break;
                        case 'unknown':
                                unknown = unknown + 1
                                break;
                        case 'shadow':
                                shadow = shadow + 1
                                break;
                        }
                }).then(function(){
                        dataPokemon.datasets[0].data = [normal, fighting, flying, poison, ground, rock,
                                bug, ghost, steel, fire, water, grass, electric, psychic,
                                ice, dragon, dark, fairy, unknown, shadow];
                        graph.update();
                });
        }
        const dataPokemon = {
                labels: labels,
                datasets: [
                        {
                                labels:"Pokemon types",
                                data: [normal, fighting, flying, poison, ground, rock,
                                bug, ghost, steel, fire, water, grass, electric, psychic,
                                ice, dragon, dark, fairy, unknown, shadow],
                                backgroundColor: ['#FF6B6B', '#FFD93D', '#6BCB77', '#4D96FF', '#F473B8'],
                        }
                ]
        }
        const configPokemon = {
                type:'line',
                data: dataPokemon,
        }

        const graph = new Chart(document.getElementById("chart--3"), configPokemon);
}

getPokemonchart3();