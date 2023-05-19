async function ApiFindElements (){
    const url = 'https://api.api-ninjas.com/v1/cocktail?name=' + randomCocktail();
    console.log(url)
    const options = {
        method: 'GET',
        headers: { 'X-Api-Key': 'riYvZgGkC76ZcX+fWUCh9A==Kwu7qtxEbP8L6NuT'},
        contentType: 'application/json',
    };

    try {
        const response = await fetch(url, options);
        const result = await response.json();
        insertInDom(result)
    } catch (error) {
        console.error(error);

    }
}
function SearchElements (){
    searchInput = document.querySelector('form');
    searchInput.addEventListener('submit', handleFormSubmit);
    searchElement = document.querySelector("#search-wrapper");
    searchElement.classList.remove(".open")
}
async function handleFormSubmit(event){
    event.preventDefault();
    searchInput = document.querySelector('input');
    searchResult = searchInput.value;
    const url = 'https://api.api-ninjas.com/v1/cocktail?name=' + searchResult;
    const options = {
        method: 'GET',
        headers: { 'X-Api-Key': 'riYvZgGkC76ZcX+fWUCh9A==Kwu7qtxEbP8L6NuT'},
        contentType: 'application/json',
    };
    
    try {
        const response = await fetch(url, options);
        const result = await response.json();
        console.log(result.length)
        if(result.length === 0){
            SearchError(result);  
        }else{
            location.href = "#the-menu";
            return insertAllInDom(result);
        }
        
    } catch {
        SearchError();
        console.error("Not find your request");
    }

}
function SearchError(result){
    errorElement = document.querySelector("#error-form");
    // if(){
    //     errorElement.textContent = "Sorry, we did not find your request";
    //     errorElement.removeAttribute('hidden');
    //     setTimeout(() => {
    //         errorElement.setAttribute('hidden', "");
    
    //     }, 3000)
    // }
    if(result.length === 0){
        errorElement.textContent = "Sorry, we did not find your request";
        errorElement.removeAttribute('hidden');
        setTimeout(() => {
            errorElement.setAttribute('hidden', "");
    
        }, 3000)
    }else{
        return;
    }
}
function insertAllInDom(data){
    // console.log(data)
    if (data.lenght === 0) {
        return console.error(error)

    } else {
        
        removeInDom()
        data.forEach(key => {
            containerElement = document.querySelector("#container-cocktail")
            searchElement = document.querySelector('#search-wrapper');
    
            nameElement             = document.createElement('h3');
            ingredientElement       = document.createElement('h4');
            UlElement               = document.createElement('ul');
            instructionTitleElement = document.createElement('h4');
            instructionElement      = document.createElement('p');
    
            containerElement.appendChild(nameElement);
            containerElement.appendChild(ingredientElement);
            UlElement = containerElement.appendChild(UlElement);
            containerElement.appendChild(instructionTitleElement);
            containerElement.appendChild(instructionElement);
    
            nameElement.classList.add('theme-accent-color');
            UlElement.classList.add('list-unstyled');
            searchElement.classList.remove('open');
    
            nameElement.textContent = key.name;
            instructionElement.textContent = key.instructions;
            ingredientElement.textContent = "Ingrédients";
            instructionTitleElement.textContent = "Instructions";
            
            key.ingredients.forEach(ingredients => {
                lElement = document.createElement('li');
                UlElement.appendChild(lElement);
                lElement.textContent = ingredients;

            });
        });

    }
}
function insertInDom(data){
    containerElement = document.querySelector("#container-cocktail")
    searchElement = document.querySelector('#search-wrapper');

    nameElement             = document.createElement('h3');
    ingredientElement       = document.createElement('h4');
    UlElement               = document.createElement('ul');
    instructionTitleElement = document.createElement('h4');
    instructionElement      = document.createElement('p');

    containerElement.appendChild(nameElement);
    containerElement.appendChild(ingredientElement);
    UlElement = containerElement.appendChild(UlElement);
    containerElement.appendChild(instructionTitleElement);
    containerElement.appendChild(instructionElement);

    nameElement.classList.add('theme-accent-color', 'fs-1');
    UlElement.classList.add('list-unstyled');
    searchElement.classList.remove('open');

    nameElement.textContent = data[0].name;
    instructionElement.textContent = data[0].instructions;
    ingredientElement.textContent = "Ingrédients";
    instructionTitleElement.textContent = "Instructions";
    console.log(data)
    data[0].ingredients.forEach(ingredients => {
        lElement = document.createElement('li');
        UlElement.appendChild(lElement);
        lElement.textContent = ingredients;

    });
}
function removeInDom(){
    containerElement = document.querySelector("#container-cocktail");
    while(containerElement.firstChild){;
        containerElement.removeChild(containerElement.lastChild);
    };

}
function randomCocktail(){
    const cocktailArray = [
        "Adios Motherfucker",
        "Alaska",
        "Alexander",
        "Americano",
        "B-52",
        "Batida",
        "Bijou",
        "Black Russian",,
        "Bloody Mary",
        "Blue Lagoon",
        "Bronx",
        "Caesar",
        "Columbia",
        "Cosmopolitan",
        "Daiquiri",
        "Embuscade",
        "French Connection",
        "Gibson",
        "Grasshopper",
        "Grog",
        "Harvey Wallbanger",
        "Horse's Neck",
        "Irish Coffee",
        "Jack Rose",
        "Karaoudjan",
        "Mai Tai",
        "Manhattan",
        "Margarita",
        "Martini",
        "Mimosa",
        "Mojito",
        "Monkey gland",
        "Negroni",
        "Nixon",
        "Old fashioned",
        "Paradise",
        "Piña colada",
        "Pink Lady",
        "Pisco sour",
        "Porto Flip",
        "Presidente",
        "Punch",
        "Rose",
        "Sangria",
        "Sake Bomb",
        "Sazerac",
        "Screwdriver",
        "Stinger",
        "Suissesse",
        "Tamagozake",
        "Tango",
        "Tequila Sunrise",
        "Tinto de Verano",
        "Vesper",
        "Vodka",
        "Whisky",
        "White Russian",
        "Zombie",
    ]
    const randomNumber = Math.floor(Math.random() * 56);
    const randomCoktail = cocktailArray[randomNumber];
    console.log(randomCoktail)
    return randomCoktail;
}
ApiFindElements();
SearchElements ();