/*Programe un algoritmo que pida un nombre y la nacionalidad y los muestre,
todo esto tantas veces como diga el usuario*/

let nombre = prompt("Ingrese el nombre")
let nacionalidad = prompt("Ingrese la nacionalidad")
const CANTIDAD_EJECUTAR = parseInt(prompt("Ingrese cuantas veces desea ver esta información"))

for (let index = 0; index < CANTIDAD_EJECUTAR; index++) {
console.log("El nombre es: " + nombre + " y la nacionalidad es: "+nacionalidad)
    
}