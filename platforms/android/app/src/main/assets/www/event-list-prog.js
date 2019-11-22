const temp = parseFloat(localStorage.getItem('temp'));
console.log(temp);
let status;
if (temp <= 60) {status = 'cold'}
else if (temp >= 80) {status = 'hot'}
else {status = 'warm'}; 

const title = document.querySelector('.title');
if (localStorage.getItem('groupSize') == 'party') {
    if (window.localStorage.getItem('rainStatus') == 'true') {
        title.textContent = 'Possible Group Activities for a Rainy Day'
    } else {
        title.textContent = 'Possible Group Activities Based on Your Weather'
    };
} else {
    if (window.localStorage.getItem('rainStatus') == 'true') {
        title.textContent = 'Possible Solo Activities for a Rainy Day'
    } else {
        title.textContent = 'Possible Solo Activities Based on Your Weather'
    };
};
var tasks = {
    'Ice Skating' : ['party', 'cold', 'hot'],
    'Skiing' : ['solo', 'party', 'cold'],
    'Movie Theater' : ['solo', 'party', 'cold', 'warm', 'hot', 'rain'],
    'Spa' : ['solo', 'party', 'cold', 'warm'],
    'Beach' : ['solo', 'party', 'hot'],
    'Arcade' : ['solo', 'party', 'warm', 'hot', 'rain'],
    'Museum' : ['solo', 'party', 'cold', 'hot', 'warm', 'rain'],
    'Car Wash' : ['solo', 'warm', 'hot'],
    'Mall' : ['solo', 'party', 'cold', 'warm', 'hot'],
    'Laser Tag' : ['party', 'warm', 'rain'],
    'Thrift Shopping' : ['solo', 'party', 'warm'],
    'Park' : ['solo', 'party', 'warm'],
    'Virtual Reality' : ['solo', 'party', 'warm', 'hot', 'rain'],
    'Pool' : ['solo', 'party', 'warm', 'hot'],
    'Bowling' : ['party', 'cold', 'warm', 'hot', 'rain'],
    'Botanical Garden' : ['solo', 'party', 'warm', 'hot'],
    'Roller Skating' : ['party', 'cold', 'warm', 'hot', 'rain'],
    'Golf' : ['solo', 'party', 'cold', 'warm'],
    'Mini Golf' : ['party', 'cold', 'warm', 'hot'],
    'Hiking' : ['solo', 'party', 'warm'],
    'Escape Room' : ['party', 'warm', 'rain'],
    'Board Games' : ['party', 'cold', 'warm', 'hot', 'rain'],
    'Video Games' : ['solo', 'party', 'cold', 'warm', 'hot', 'rain'],
    'Gym' : ['solo', 'party', 'cold', 'warm', 'hot', 'rain'],
    'Basketball' : ['party', 'warm'],
    'Biking' : ['solo', 'party', 'warm', 'hot'],
    'Ice Cream' : ['solo', 'party', 'warm', 'hot'],
    'Snow Cones' : ['solo', 'party', 'hot'],
    'Ramen' : ['solo', 'party', 'cold', 'rain'],
    'Boba' : ['solo', 'party', 'cold', 'warm', 'hot', 'rain']
};

let chosenTasks = [];

if (window.localStorage.getItem('rainStatus') == 'true') {
    for (let task in tasks) {
        if (tasks[task].includes(localStorage.getItem('groupSize')) && tasks[task].includes(status) && tasks[task].includes('rain')) {
            chosenTasks.push(task);
        };
    };
} else {
    for (let task in tasks) {
        if (tasks[task].includes(localStorage.getItem('groupSize')) && tasks[task].includes(status)) {
            chosenTasks.push(task);
        };
    };
};
console.log(chosenTasks);
console.log(localStorage.getItem('inUSA'));

var listHTML = '';
chosenTasks.forEach(function(element) {
    let elementInURL = '';

    for (index in element) {
        if (element[index] != ' '){
            elementInURL += element[index];
        }else{elementInURL += '+'}
    };
    if (element == 'Board Games' || element == 'Video Games') {
        listHTML += `<li><a href=\'https://www.amazon.com/s?k=${elementInURL}'> ` + element + '</a></li>';
    } else if (localStorage.getItem('inUSA') == 'true') {
        listHTML += `<li><a href=\'https://www.yelp.com/search?find_desc=${elementInURL}&find_loc=${window.localStorage.getItem('name')}&ns=1\'> ` + element + '</a></li>';
    } else {
        listHTML += `<li>` + element + '</li>';
    };
});

document.getElementById('list').innerHTML = '<ul>' + listHTML + '</ul>';

