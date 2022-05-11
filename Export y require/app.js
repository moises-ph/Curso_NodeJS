const {frutas, dinero} = require("./frutas");

frutas.forEach((fruta) => {
  console.count(fruta);
});

console.log('mi dinero actual: ' + dinero);