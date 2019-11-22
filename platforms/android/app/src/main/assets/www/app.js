window.addEventListener('load', ()=> {
    let long;
    let lat;

    if(navigator.geolocation && window.localStorage.getItem('own') == 'true'){ 
        navigator.geolocation.getCurrentPosition
        (position =>{
            long = position.coords.longitude;
            lat = position.coords.latitude;
            getWeatherData(lat, long);
        });
    }else{
        if (window.localStorage.getItem('own') == 'false') {
            getWeatherData(window.localStorage.getItem('lat'), window.localStorage.getItem('long'));
        } else{
            alert('It seems like Geolocation, which is required for this page, is not enabled in your browser.');
        }
    }

    
       

    
});