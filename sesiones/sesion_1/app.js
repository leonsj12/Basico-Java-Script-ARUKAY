// 1. Variable con el nombre del hobby
    let hobby = "Dibujar";

    // 2. Variable con la descripción
    let descripcion = "Me gusta dibujar porque es divertido y puedo crear lo que imagino.";

    // 3. Arreglo con los materiales
    let materiales = ["Lápiz", "Cuaderno", "Borrador", "Colores", "Sacapuntas"];


    // 4. Función que se ejecuta al hacer clic
    function mostrarHobby() {

        // Crear un texto inicial
        let texto = "<h2>Mi hobby es: " + hobby + "</h2>";
        texto += "<p>" + descripcion + "</p>";

        texto += "<h3>Materiales:</h3>";
        texto += "<ul>";

        // Recorrer el arreglo
        for (let i = 0; i < materiales.length; i++) {
            texto += "<li>" + materiales[i] + "</li>";
        }

        texto += "</ul>";

        // Mostrar en la página
        document.getElementById("resultado").innerHTML = texto;
    }
