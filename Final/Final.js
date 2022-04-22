fetch('https://www.themealdb.com/api/json/v1/1/search.php?f=a')
.then(res=>res.json())
.then(data=> displayFoods(data))

const displayFoods = foods =>{
const foodsDiv = document.createElement('food-items');

foods.forEach(meals=>{
    const foodDiv = document.createElement('div');

    foodDiv.className = 'meals';
    const foodInfo = `
    <h3>${meals.strMeal}</h3>

    `;
    foodDiv.innerHTML = foodInfo;
    foodsDiv.appendChild(foodDiv);
});
}


var text = '';
function findMeal (){
    text = document.getElementById('meal-search').value;
    connectMeal(text)
}


function connectMeal (text) {
    fetch(`https://www.themealdb.com/api/json/v1/1/search.php?s=${text}`)
    .then(res=> res.json() )
    .then(data=> loadMeal(data));

}

connectMeal();

function loadMeal (data){

  console.table(data.meals[0]);

  var container = document.getElementById('main-container');

     var imgLink = data.meals[0].strMealThumb;
     var cat = data.meals[0].strCategory;
     var title = data.meals[0].strMeal;

    // var newDiv = document.createElement("div");

     container.innerHTML = `<p><b> ${title} </b></p>
                         <img src="${imgLink}" <br/>
                         <p> Category: ${cat} </p>`;

   

    container.appendChild(newDiv);

}