/*GUÍA 1*/
/*programa que calcule el índice de masa corporal de una persona*/
    /*ENTRADA DE DATOS*/

    let pesoPersona = parseFloat(prompt("Ingrese el peso de la persona en kilogramos"));
    let estaturaPersona  = parseFloat(prompt("Ingrese la estatura de la persona"));

    /*PROCESO*/

    let indiceMasaCorporal =  pesoPersona / estaturaPersona**2

    /*SALIDA DE DATOS*/
    
    console.log("El índice de masa corporal de la persona es: " + indiceMasaCorporal)
