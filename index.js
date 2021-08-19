// Import stylesheets
import './style.css';

// Write Javascript code!
const appDiv = document.getElementById('app');
appDiv.innerHTML = `<h1>JS Starter</h1>`;

//Reto1
/*
Dado un mes como un número entero de 1 a 12, devuelva a qué trimestre del año pertenece como un número entero.

Por ejemplo: el mes 2 (febrero), es parte del primer trimestre; el mes 6 (junio), es parte del segundo trimestre; y el mes 11 (noviembre), es parte del cuarto trimestre.
*/
const quarterOf = (month) => {
  if (month <= 3) {
    return 1
  } else if (month <= 6) {
    return 2
  } else if (month <= 9) {
    return 3
  } else if (month <= 12) {
    return 4
  }
  
}


//Reto 2

/*     
Complete el método que toma un valor booleano y devuelve una "Yes"cadena para trueo una "No"cadena para false.
*/

function boolToWord( bool ){
  //...
  if (bool === true){
    return "Yes";
  }else {
    return "No"
  }
  
}

//Reto 3

/*

Escribe una función para convertir un nombre en iniciales. Este kata toma estrictamente dos palabras con un espacio entre ellas.

La salida debe ser de dos letras mayúsculas con un punto que las separe.

Debe tener un aspecto como este:

Sam Harris => S.H

Patrick Feeney => P.F
*/


function abbrevName(name){
    
  return (name[0]+'.'+name[name.indexOf(' ')+1]).toUpperCase();

}

//Reto 4

/*
Estás escribiendo código para controlar los semáforos de tu ciudad. Necesita una función para manejar cada cambio de green, a yellow, a redy luego a de greennuevo.

Complete la función que toma una cadena como argumento que representa el estado actual de la luz y devuelve una cadena que representa el estado al que debería cambiar la luz.

Por ejemplo, update_light('green')debería volver 'yellow'.

*/

function updateLight(current) {
  
  //your code here!
if (current === "green"){
    return"yellow"
   
}else if(current === "yellow"){
    return "red"
    
  
}else {
  return "green";
  
}
}

//Reto 5

/*

Ácido desoxirribonucleico, el ADN es la principal molécula de almacenamiento de información en los sistemas biológicos. Está compuesto por cuatro bases de ácido nucleico: guanina ('G'), citosina ('C'), adenina ('A') y timina ('T').

El ácido ribonucleico, ARN, es la molécula mensajera principal en las células. El ARN difiere ligeramente del ADN en su estructura química y no contiene timina. En el ARN, la timina se reemplaza por otro ácido nucleico, el uracilo ('U').

Cree una función que traduzca una cadena de ADN determinada en ARN.


*/

function DNAtoRNA(dna) {
  // create a function which returns an RNA sequence from the given DNA sequence
  for (var i = 0; i < dna.length; i++)
  {
    dna = dna.replace('T', 'U');
  }
  
  return dna;
}
