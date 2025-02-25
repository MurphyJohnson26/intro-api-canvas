var canvas = document.getElementById("canvas");
var ctx = canvas.getContext("2d");

// Función para limpiar el canvas
function clearCanvas() {
    ctx.clearRect(0, 0, canvas.width, canvas.height);
}

// Función para dibujar un rectángulo por defecto al cargar la página
function initCanvas() {
    clearCanvas();
    drawRectangle();  // Dibuja un rectángulo azul por defecto
}

// Llamamos a la función al cargar la página
document.addEventListener("DOMContentLoaded", initCanvas);
