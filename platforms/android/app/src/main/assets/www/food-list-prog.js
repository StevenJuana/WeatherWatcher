const temp = parseFloat(localStorage.getItem('temp'));
console.log(temp);
let status;
if (temp <= 60) {status = 'cold'}
else if (temp >= 80) {status = 'hot'}
else {status = 'warm'}; 

const title = document.querySelector('.title');

let chosenTasks = [
    'American',
    'Pizza', 
    'Breakfast',
    'Sandwiches',
    'Sushi',
    'Italian',
    'Ramen',
    'Burgers',
    'Mexican',
    'Chinese',
    'Seafood',
    'Vegetarian',
    'Japanese',
    'Korean',
    'Vietnamese',
    'French',
    'Thai',
    'Mediterranean'
];

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
    if (['American', 'Italian', 'Mexican', 'Chinese', 'Japanese', 'Vietnamese', 'Korean', 'French', 'Thai', 'Mediterranean'].includes(element)) {
        elementInURL += '+Food';
    };
    if (localStorage.getItem('inUSA') == 'true') {
        listHTML += `<li><a href=\'https://www.yelp.com/search?find_desc=${elementInURL}&find_loc=${window.localStorage.getItem('name')}&ns=1\'> ` + element + '</a></li>';
    } else {
        listHTML += `<li>` + element + '</li>';
    };
});

document.getElementById('list').innerHTML = '<ul>' + listHTML + '</ul>';