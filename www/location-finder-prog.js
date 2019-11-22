function getUrl(searchResult) {
    searchResult = searchResult.replace(' +', '+');
    const basicUrl = `https://us1.locationiq.com/v1/search.php?key=292d9d6f831a80&q=${searchResult}&format=json`;
    return basicUrl;
};

function processForm(e) {
    if (e.preventDefault) e.preventDefault();

    const Http = new XMLHttpRequest();
    const url = getUrl(searchTerm.value);
    
    Http.open('GET', url);
    Http.send();


    Http.onreadystatechange = (e) => {
        data = Http.responseText;
        jsonObj = JSON.parse(data);
        long = jsonObj[0].lon;
        lat = jsonObj[0].lat;
        console.log(jsonObj);
        fullName = jsonObj[0].display_name;
        console.log(fullName[0]);
        var name = '';
        var rest = true;
        for (index in fullName) {
            if (fullName[index] != ','){
                name += fullName[index]
            }else{break}
        };
        var inUSA = false;
        if (fullName.slice(-3,) == 'USA' || fullName.slice(-24,) == 'United States of America') {
            inUSA = true;
        };
        window.localStorage.setItem('inUSA', inUSA);
        window.localStorage.setItem('name', name);
        window.localStorage.setItem('long', long);
        window.localStorage.setItem('lat', lat);
        window.location.href = "owntemp.html";
    };

    return false;
};
const submitButton = document.getElementById('submit');
const searchTerm = document.querySelector('.search-bar');
submitButton.addEventListener('click', processForm);



