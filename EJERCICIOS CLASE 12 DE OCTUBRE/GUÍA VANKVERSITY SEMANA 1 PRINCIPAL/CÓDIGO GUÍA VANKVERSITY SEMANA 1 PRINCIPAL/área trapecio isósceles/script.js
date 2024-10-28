/*GUÍA 1*/
/*programa que calcule el área de un trapecio isósceles*/
    
/*ENTRADA DE DATOS*/

let ladoParaleloA = parseFloat(prompt("Ingrese la base inferior (lado A) del trapecio isósceles"));
let ladoParaleloB = parseFloat(prompt("Ingrese la base superior (lado B) del trapecio isósceles"));
let altura = parseFloat(prompt("Ingrese la altura del trapecio isósceles"));

/*PROCESO*/

let area = altura*((ladoParaleloA + ladoParaleloB) / 2)

/*SALIDA DE DATOS*/

console.log("El área del trapecio isósceles es: " + area)