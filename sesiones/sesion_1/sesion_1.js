/*
    Archivo: sesion_1.js
    Versión robusta y validada
    -----------------------------------------
    Mejora:
    - Validación de campos vacíos
    - Validación de números positivos
    - Validación de división por cero
    - Mensajes más claros
    - Código más estructurado
*/

function calcular() {

    // Obtener referencias a los elementos
    const inputPersonas = document.getElementById("personas");
    const inputCupo = document.getElementById("cupo");
    const inputVeces = document.getElementById("veces");
    const resultado = document.getElementById("resultado");

    // Convertir valores a número entero
    const personas = Number(inputPersonas.value);
    const cupo = Number(inputCupo.value);
    const veces = Number(inputVeces.value);

    // 1️⃣ Validación: campos vacíos
    if (inputPersonas.value.trim() === "" ||
        inputCupo.value.trim() === "" ||
        inputVeces.value.trim() === "") {

        resultado.textContent = "⚠️ Todos los campos son obligatorios.";
        return;
    }

    // 2️⃣ Validación: deben ser números
    if (isNaN(personas) || isNaN(cupo) || isNaN(veces)) {
        resultado.textContent = "⚠️ Debe ingresar solo valores numéricos.";
        return;
    }

    // 3️⃣ Validación: números positivos mayores que 0
    if (personas <= 0 || cupo <= 0 || veces <= 0) {
        resultado.textContent = "⚠️ Los valores deben ser mayores que cero.";
        return;
    }

    // 4️⃣ Cálculo lógico del problema
    const totalEntradas = personas * veces;

    // Protección adicional contra división inválida
    if (cupo === 0) {
        resultado.textContent = "⚠️ El cupo no puede ser cero.";
        return;
    }

    const turnos = Math.ceil(totalEntradas / cupo);

    // 5️⃣ Mostrar resultado detallado
    resultado.innerHTML = `
        Total de entradas necesarias: <strong>${totalEntradas}</strong><br>
        Turnos necesarios: <strong>${turnos}</strong>
    `;
}