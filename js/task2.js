const ingredients = [
  "Potatoes",
  "Mushrooms",
  "Garlic",
  "Tomatos",
  "Herbs",
  "Condiments",
];

// const liEl = document.createElement("li");
// liEl.textContent = "Potatoes";
// liEl.className = "item";
// console.log(liEl);

const ingredientsList = (ingredients) => {
  return ingredients.map((ingredient) => {
    const liEl = document.createElement("li");
    liEl.textContent = ingredient;
    liEl.className = "item";
    return liEl;
  });
};

const eashIngredient = ingredientsList(ingredients);

const ingredientsEL = document.querySelector("#ingredients");
ingredientsEL.append(...eashIngredient);
