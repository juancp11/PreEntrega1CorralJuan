function getHamburgerIngredients() {
    let name = document.getElementById("burger-name").value;
    let ingredients = [];
  
    let checkboxes = document.querySelectorAll('input[type="checkbox"]:checked');
    for (let i = 0; i < checkboxes.length; i++) {
      ingredients.push(checkboxes[i].value);
    }
  
    if (name === "" || ingredients.length === 0) {
      alert("Seleccione sus ingredientes y nombre su hamburguesa.");
    } else {
      let ingredientsString = ingredients.join(", ");
      alert("Tu hamburguesa es \"" + name + "\" y sus ingredientes son: " + ingredientsString + ".");
    }
  }
  