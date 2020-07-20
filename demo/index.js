class Character {
  constructor(name) {
    this.name = name;
  }

  sayName() {
    console.log(this.name);
  }
}

function createBlueCrystal(ingredients) {
  if (!ingredents) {
    throw new Error('I cant cook a batch with no ingredients Pinkman!');
  }

  return doSomeScience(ingredients);
}

function doSomeScience(ingredients) {
  return ingredents.map((ingredient) => ingredient.toLowerCase());
}
