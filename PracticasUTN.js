//Crea un programa que tome un número como argumento y devuelva "par" si el número es par o "impar" si el número es impar.

// function paroimpar(numero){
//     if (numero % 2 === 0) {
//         return "par"; //puede ser return o console.log.
//     } 
//     else {
//         return "impar";
//     }
// }

//---------------------------------------------------------------------o--------------------------------------------------------------------

//Crea un programa que tome un número como argumento y devuelva "positivo" si el número es mayor que cero o "negativo" si el número es menor que cero.

// function positivoonegativo(numero){
//     if (numero > 0){
//         return "positivo"
//     } else{
//         return "negativo";
//     }
// }

//---------------------------------------------------------------------o----------------------------------------------------------------------

//Crea un programa que tome un string como argumento y devuelva "largo" si el string tiene más de 10 caracteres o "corto" si el string tiene 10 caracteres o menos.

// function largoocorto(string){
//     if (string.length > 10){
//         return "largo";
//     } else {
//         return "corto";
//     }
// }

//---------------------------------------------------------------------o----------------------------------------------------------------------

//Crea un array con los números del 1 al 10 y muestra cada uno de los elementos en la consola.

// var numeros = [1,2,3,4,5,6,7,8,9,10]

// for (var i= 0; i < numeros.length; i++){
//     console.log(numeros[i])
// }

//------------------------------------------------------------------------o---------------------------------------------------------------------

//Crea un array con los nombres de tus tres mejores amigos y muestra cada uno de ellos en una lista en tu página web

// <!DOCTYPE html>
// <html>
// <head>
//   <title>Lista de Amigos</title>
// </head>
// <body>
//   <h1>Lista de Amigos</h1>
//   <ul id="amigos-lista"></ul>

//   <script src="script.js"></script>
// </body>
// </html>

// var amigos = [Agus,Jano,Lucas]
// var lista = document.getElementById("lista-amigos");

// for (var i = 0; i < amigos.length; i++){
//     var amigo = document.createElement("li");
//     amigo.textContent = amigos[i]
//     lista.appendChild(amigo);
// }

//---------------------------------------------------------------------o------------------------------------------------------------------------

//Crea un array con las edades de tus familiares y amigos cercanos y calcula la edad promedio.

// var edadfamilia = [43,54,68,85,19,18,15,20];
// var sumaedades = 0;

// for (var i = 0; i < edades.length; i++){
//     sumaedades += edades[i];
// }

// var edadpromedio = sumaedades / edades.length;

// console.log("Edades", edades)
// console.log("Edad promedio", edadpromedio)

//----------------------------------------------------------------------o--------------------------------------------------------------------------

//Crea un array con los nombres de tus cinco colores favoritos y muestra cada uno de ellos en la consola.

// var coloresfav = ["negro", "amarillo", "verde", "celeste", "rojo"];

// for (var i = 0; i < coloresfav.length; i++){
//     console.log(coloresfav[i])
// }

//-----------------------------------------------------------------------o---------------------------------------------------------------------------

//Crea un array con los nombres de tus cinco frutas favoritas y muestra cada uno de ellos en una lista en tu página web.

// <!DOCTYPE html>
// <html>
// <head>
//   <title>Lista de Frutas Favoritas</title>
// </head>
// <body>
//   <h1>Lista de Frutas Favoritas</h1>
//   <ul id="frutas-lista"></ul>

//   <script src="script.js"></script>
// </body>
// </html>


// var frutasFavoritas = ["manzana", "plátano", "sandía", "mango", "fresa"];
// var lista = document.getElementById("frutas-lista");

// // Recorrer el array y agregar cada fruta a la lista
// for (var i = 0; i < frutasFavoritas.length; i++) {
//   var fruta = document.createElement("li");
//   fruta.textContent = frutasFavoritas[i];
//   lista.appendChild(fruta);
// }

//-------------------------------------------------------------------------o--------------------------------------------------------------------------

//A partir del array a continuación: [1, 4, 6, 7, 20, 18] crea un programa que los ordena de menor a mayor recorriendolos. (No usar sort). Pista: for anidado.

// var array = [1, 4, 6, 7, 20, 18];
// var longitud = array.length;

// // Bucle for anidado para ordenar los elementos
// for (var i = 0; i < longitud; i++) {
//   for (var j = 0; j < longitud - 1; j++) {
//     if (array[j] > array[j + 1]) {
//       // Intercambiar los elementos
//       var temp = array[j];
//       array[j] = array[j + 1];
//       array[j + 1] = temp;
//     }
//   }
// }

//console.log(array); // Imprime el array ordenado de menor a mayor



//-------------------------------------------------------------------------o---------------------------------------------------------------------------

//Suma de números pares: Escribe una función llamada sumarNumerosPares que reciba un número entero n y devuelva la suma de todos los números pares desde 1 
//hasta n. Por ejemplo, si se llama a la función con el argumento 6, debería devolver 12 (2 + 4 + 6).

// function sumarNumerosPares(n) {
//     var suma = 0;
//     for (var i = 2; i <= n; i += 2) {
//       suma += i;
//     }
//     return suma;
//   }

//----------------------------------------------------------------------------o--------------------------------------------------------------------------

//Calculadora de impuestos: Escribe una función llamada calcularImpuestos que calcule la cantidad de impuestos a pagar dada una cantidad de dinero monto.
//La función debe aplicar un impuesto del 20% a los montos mayores o iguales a 1000 y un impuesto del 10% a los montos menores a 1000. Por ejemplo, si se 
//llama a la función con el argumento 1500, debería devolver 300 (20% de 1500).

// function calcularImpuestos(monto) {
//     if (monto >= 1000) {
//       return monto * 0.2; // Impuesto del 20% para montos mayores o iguales a 1000
//     } else {
//       return monto * 0.1; // Impuesto del 10% para montos menores a 1000
//     }
//   }

//----------------------------------------------------------------------------o----------------------------------------------------------------------------

//Contador de vocales: Escribe una función llamada contarVocales que reciba una cadena de texto y cuente la cantidad de vocales que contiene. La función debe
//devolver el número total de vocales encontradas. Puedes asumir que la cadena de texto solo contiene letras en minúsculas y sin caracteres especiales. 
//Por ejemplo, si se llama a la función con el argumento 'javascript', debería devolver 3.

// function contarVocales(texto) {
//     var contador = 0;
//     var vocales = ['a', 'e', 'i', 'o', 'u'];
  
//     for (var i = 0; i < texto.length; i++) {
//       if (vocales.includes(texto[i])) {
//         contador++;
//       }
//     }
  
//     return contador;
//   }

//-------------------------------------------------------------------------o-----------------------------------------------------------------------------------

//Generador de contraseñas: Escribe una función llamada generarContraseña que genere una contraseña aleatoria de longitud n. La contraseña debe contener una
//combinación de letras mayúsculas, letras minúsculas, números y caracteres especiales. Puedes usar la función Math.random() para generar valores aleatorios y
//el método String.fromCharCode() para convertir códigos de caracteres en caracteres reales. Por ejemplo, si se llama a la función con el argumento 8, podría devolver
//'A2$bF9z%

// function generarContraseña(n) {
//     var caracteres = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789!@#$%^&*()';
//     var contraseña = '';
  
//     for (var i = 0; i < n; i++) {
//       var indiceAleatorio = Math.floor(Math.random() * caracteres.length);
//       contraseña += caracteres.charAt(indiceAleatorio);
//     }
  
//     return contraseña;
//   }
  
