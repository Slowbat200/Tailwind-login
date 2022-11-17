let height = prompt("Zadej cislo pro nastaveni pater");
console.log(height);
let pyramida = document.getElementById("pyramida");
let bricksInRow = 1;
let count = 0;
for(let h = 0; h < height; h++){
for(let i = 0; i < bricksInRow; i++){
let brick = document.createElement("div");
brick.innerText = ++count;
pyramida.appendChild(brick);
}
bricksInRow++;
pyramida.appendChild(document.createElement("br"));
}