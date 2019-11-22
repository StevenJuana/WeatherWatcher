let temperatureDescription = document.querySelector('.temperature-description');
let temperatureDegree = document.querySelector('.temperature-degree');
let locationTimezone = document.querySelector('.location-timezone');
let temperatureSection = document.querySelector('.temperature')
const temperatureSpan = document.querySelector('.temperature span');
const eventSection = document.querySelector('.event-section');
var backButton = document.querySelector('.back');

function getWeatherData(lat, long) {
    const proxy = 'https://cors-anywhere.herokuapp.com/';
    const api = `${proxy}https://api.darksky.net/forecast/9e10408280cdfd5b875ccd455dfa3fc9/${lat},${long}`;

    fetch(api)
    .then(response =>{
        return response.json();
    })
    .then(data =>{
        const {temperature, summary, icon} = data.currently;
        //set DOM Elements from the API
        temperatureDegree.textContent = temperature;
        localStorage.setItem('temp', temperature);
        temperatureDescription.textContent = summary;
        var body = document.getElementById('body');
        //Change background based on weather
        window.localStorage.setItem('rainStatus', false);
        if (summary.includes('Cloudy') || summary.includes('Overcast') || summary.includes('Foggy')) {
            body.style.backgroundImage = 'linear-gradient( rgb(148, 160, 179), rgb(51, 105, 204))';
        } else if (summary.includes('Clear')){
            body.style.backgroundImage = 'linear-gradient( rgb(132, 237, 241), rgb(89, 175, 201))'
        } else if (summary.includes('Rain') || summary.includes('Drizzle')){
            window.localStorage.setItem('rainStatus', true);
            body.style.backgroundImage = 'linear-gradient( rgb(109, 133, 199), rgb(82, 117, 161))'
        }
        if (window.localStorage.getItem('own') == 'true'){
            locationTimezone.textContent = data.timezone;
        }else {locationTimezone.textContent = window.localStorage.getItem('name')};
                //Formula for Celsius
                let celsius = (temperature - 32) * (5 / 9);
            //Set Icon
            setIcons(icon, document.querySelector('.icon'))

            //Change temperature to Celsius/Farenheit
            temperatureSection.addEventListener('click', () =>{
                if(temperatureSpan.textContent === '°F'){
                    temperatureSpan.textContent = '°C';
                    temperatureDegree.textContent = Math.floor(celsius);
                } else {
                    temperatureSpan.textContent = '°F';
                    temperatureDegree.textContent = temperature;
            }
            })
    });
    backButton.addEventListener('click', () => {
        if (window.localStorage.getItem('own') == 'true') {
            window.location.href = 'index.html';
        } else {
            window.location.href = 'location-finder.html';
        };
    });
    eventSection.addEventListener('click', () => {
        let secondData = document.getElementById('2data');
        let firstData = document.getElementById('1data');
        firstData.style.opacity = '0.1';
        firstData.style.zIndex = '1';
        secondData.style.opacity = '1';
        eventSection.style.opacity = '0';
        solo.addEventListener('click', () => {
            console.log('solo');
            window.localStorage.setItem('groupSize', 'solo');
            window.location.href = 'event-list.html';
        });
        party.addEventListener('click', () => {
            console.log('party');
            window.localStorage.setItem('groupSize', 'party');
            window.location.href = 'event-list.html';
        });
    });

    function setIcons(icon, iconID){
        const skycons = new Skycons({color: 'white'});
        const currentIcon = icon.replace(/-/g, '_').toUpperCase();
        skycons.play();
        return skycons.set(iconID, Skycons[currentIcon]);
    }
};