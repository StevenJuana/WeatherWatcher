window.addEventListener('load', ()=> {
    const ownSection = document.querySelector('.own-section');
    const otherSection = document.querySelector('.other-section');

        
    //Choose Own Location
    ownSection.addEventListener('click', () =>{
        window.localStorage.setItem('own', true);
        window.location.href = "owntemp.html";
    });

    //Choose Other Location
    otherSection.addEventListener('click', () =>{
        window.localStorage.setItem('own', false);
        window.location.href = "location-finder.html";
    });
});