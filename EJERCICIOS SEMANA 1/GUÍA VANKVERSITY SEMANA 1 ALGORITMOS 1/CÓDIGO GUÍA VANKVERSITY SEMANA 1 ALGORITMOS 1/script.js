/*EJERCICIOS VARIABLES*/

/*Cree un programa que declare e inicialice
una variable para almacenar los 48.5
dólares que cuesta FIFA18, una variable
para almacenar la letra z y otra para
almacenar un estado booleano verdadero.
Imprima cada una de las variables. Haga
código.*/

let precioFifa18 = 48.5
let letraZ = "z"
let esBooleano = true

console.log(precioFifa18, letraZ, esBooleano)

/*EJERCICIO CONSTANTES*/

/*Cree un programa que declare e
inicialice una constante que
almacene el número pi y otra que
almacena la URL de Google. Imprima
cada una de las variables. Haga
código.*/

const PI = 3.1416
const URL = 'https://www.google.com/?hl=es'
console.log(PI, URL)

/*EJERCICIOS FINALES*/
/*Cree un programa que declare e inicialice una variable
con el valor 50, e imprima tal variable cuatro veces.*/
let valor = 50
console.log(valor)
console.log(valor)
console.log(valor)
console.log(valor)

/*Cree un programa que pida al usuario el valor de la
gravedad terrestre en m, guarde tal valor en una
constante y a continuación imprima un mensaje al
usuario confirmando el valor de la gravedad introducida*/
const GRAVEDAD_TERRESTRE = parseFloat(prompt("Ingrese el valor de la gravedad terrestre"));
console.log("La gravedad introducida es: " + GRAVEDAD_TERRESTRE);

/*Cree un programa que pida al usuario su edad, domicilio
y estado civil, a continuación, confirme al usuario los
valores introducidos por éste.*/

let edad = prompt("Ingrese la edad:");
let domicilio = prompt("Ingrese el domicilio:")
let estadoCivil = prompt("Ingrese el estado civil:");

console.log("La edad es: " + edad, "El domicio es: " + domicilio, "y el estado civil es: " + estadoCivil)