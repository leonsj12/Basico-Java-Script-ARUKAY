// =====================================================
// ARCHIVO JAVASCRIPT
// =====================================================

/*
JavaScript es el lenguaje que da INTELIGENCIA a la página web.

Piensa así:

HTML = estructura (el cuerpo)
CSS = apariencia (la ropa)
JavaScript = cerebro (la inteligencia)

JavaScript puede:

✔ Guardar información
✔ Hacer cálculos
✔ Tomar decisiones
✔ Responder a clics
✔ Cambiar el contenido de la página

JavaScript funciona en el navegador (Chrome, Edge, etc.)
*/


// =====================================================
// 1. VARIABLES
// =====================================================

/*
Una variable es como una CAJA donde guardamos información.

Sintaxis:

let nombreVariable = valor;

let = crea la variable
= significa "guardar"
*/


// Guardamos la nota de matemáticas
let matematicas = 75;

// Guardamos la nota de lenguaje
let lenguaje = 70;

// Guardamos la nota de inglés
let ingles = 85;

// Guardamos la nota de biología
let biologia = 60;

// Guardamos la nota de sociales
let sociales = 72;

// Guardamos la nota de tecnología
let tecnologia = 90;



// =====================================================
// 2. FUNCIONES
// =====================================================

/*
Una función es un bloque de código que se ejecuta
cuando se llama.

Es como una máquina.

Sintaxis:

function nombreFuncion() {

    código

}

Esta función se ejecuta cuando el usuario hace clic
en el botón del HTML.
*/

function mostrarResultados() {

    // =================================================
    // 3. OPERADOR TERNARIO
    // =================================================

    /*
    El operador ternario sirve para tomar decisiones.

    Sintaxis:

    condicion ? valor_si_verdadero : valor_si_falso

    Ejemplo:

    matematicas >= 70

    significa:

    ¿la nota es mayor o igual a 70?
    */


    let resMat = matematicas >= 70 ? "✅ Aprueba" : "❌ No Aprueba";

    let resLen = lenguaje >= 70 ? "✅ Aprueba" : "❌ No Aprueba";

    let resIng = ingles >= 70 ? "✅ Aprueba" : "❌ No Aprueba";

    let resBio = biologia >= 70 ? "✅ Aprueba" : "❌ No Aprueba";

    let resSoc = sociales >= 70 ? "✅ Aprueba" : "❌ No Aprueba";

    let resTec = tecnologia >= 70 ? "✅ Aprueba" : "❌ No Aprueba";



    // =================================================
    // 4. CREAR TEXTO
    // =================================================

    /*
    Creamos una variable para construir el resultado.

    Usamos texto HTML dentro de JavaScript.
    */

    let texto = "<h2>Resultados del estudiante:</h2>";

    texto += "Matemáticas: " + resMat + "<br>";

    texto += "Lenguaje: " + resLen + "<br>";

    texto += "Inglés: " + resIng + "<br>";

    texto += "Biología: " + resBio + "<br>";

    texto += "Sociales: " + resSoc + "<br>";

    texto += "Tecnología: " + resTec + "<br>";



    // =================================================
    // 5. ACCEDER AL HTML DESDE JAVASCRIPT
    // =================================================

    /*
    document = representa toda la página web

    getElementById("resultado")
    significa:

    "buscar el elemento que tiene id resultado"

    innerHTML
    significa:

    "colocar contenido dentro del elemento"
    */

    document.getElementById("resultado").innerHTML = texto;

}


// =====================================================
// FIN DEL PROGRAMA
// =====================================================