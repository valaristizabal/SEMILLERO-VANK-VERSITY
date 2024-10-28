/*GUÍA 1*/
/*Realizar un algoritmo para determinar la distancia de dos puntos en el espacio bidimensional*/
    /*ENTRADA DE DATOS*/

     coordenada_x1 = parseFloat(prompt("Ingrese la coordenada x1"));
     coordenada_x2 = parseFloat(prompt("Ingrese la coordenada x2"));
     coordenada_y1 = parseFloat(prompt("Ingrese la coordenada y1"));
     coordenada_y2 = parseFloat(prompt("Ingrese la coordenada y2"));

    /*PROCESO*/

     distancia = Math.sqrt((coordenada_x2 - coordenada_x1)**2 + (coordenada_y2 - coordenada_y1)**2);

    /*SALIDA DE DATOS*/
    console.log("La distancia entre los puntos es: " + distancia)
