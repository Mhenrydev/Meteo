const APIKEY = 'dfa44c5687e9ac61b3e50839f06a4c44';


/*Appel à l'Api openWeather avec ville en paramètre de fonction*/
let apiCall = function(city){
    let url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${APIKEY}&units=metric&lang=fr`;

    fetch(url).then((response) => 
        response.json().then((data) => {
            console.log(data);
            document.querySelector('#city').innerHTML = data.name ;
            document.querySelector('#temp').innerHTML = 
            "<i class='fa-solid fa-temperature-three-quarters'></i>" + data.main.temp + '°';
            document.querySelector('#humidity').innerHTML = 
            "<i class='fa-solid fa-droplet'></i>"+ data.main.humidity + '%';
            document.querySelector('#wind').innerHTML = 
            "<i class='fa-solid fa-wind'></i>"+ data.wind.speed + 'km/h';
        })
    )
    .catch((err) => console.log('Erreur : ' + err)); 
}

/*Ecouteur d'évenement sur la soumission du formulaire*/
document.querySelector('form').addEventListener('submit', function(e) {
    e.preventDefault();
    let ville = document.querySelector('#inputCity').value;

    apiCall(ville);
});


/*Appel par défault au chargement de la page */
apiCall('Fréjus')