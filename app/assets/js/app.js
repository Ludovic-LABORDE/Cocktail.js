async function ApiFindElements (){
    const url = 'https://api.api-ninjas.com/v1/cocktail?name=rhum';
    const options = {
        method: 'GET',
        headers: { 'X-Api-Key': 'riYvZgGkC76ZcX+fWUCh9A==Kwu7qtxEbP8L6NuT'},
        contentType: 'application/json',
    };

    try {
        const response = await fetch(url, options);
        const result = await response.json();
        // insertInDom(result);
        // console.log(result);
    } catch (error) {
        console.error(error);
    }
}
function SearchElements (){
    searchInput = document.querySelector('form');
    searchInput.addEventListener('submit', handleFormSubmit);
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
        insertInDom(result);
        location.href = "#the-menu"
    } catch (error) {
        console.error(error);
    }

}
function insertInDom(data){
    console.log(data)
    if (data.lenght === 0) {

        return console.error(error)

    } else {

        data.forEach(key => {
            containerElement = document.querySelector("#container-cocktail")
            searchElement = document.querySelector('#search-wrapper')
    
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
    
            UlElement.classList.add('list-unstyled')
            searchElement.classList.remove('open')
    
            nameElement.textContent = key.name
            instructionElement.textContent = key.instructions;
            ingredientElement.textContent = "Ingrédient"
            instructionTitleElement.textContent = "Instructions"
            
            key.ingredients.forEach(ingredients => {
                lElement = document.createElement('li');
                UlElement.appendChild(lElement);
                lElement.textContent = ingredients;
                
            });
            
        });

    }
}
ApiFindElements()
SearchElements ()