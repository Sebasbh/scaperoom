const codigoCorrecto = ['rojo', 'negro', 'azul', 'amarillo'];

// Verificar si el código ingresado es correcto
function verificarCodigo() {
    const codigoIngresado = obtenerCodigoIngresado();

    if (codigoIngresado.length === codigoCorrecto.length && codigoIngresado.every((color, index) => color === codigoCorrecto[index])) {
        mostrarMensaje("¡Código correcto!");
    } else {
        mostrarMensaje("Código incorrecto. Intenta nuevamente.");
    }
}

// Obtener el código ingresado por los jugadores
function obtenerCodigoIngresado() {
    const codigoInput = document.getElementById('code-input').value;
    return codigoInput.split(' ');
}

// Mostrar mensaje en la pantalla
function mostrarMensaje(mensaje) {
    const mensajeElement = document.getElementById('mensaje');
    mensajeElement.textContent = mensaje;
}

// Evento al hacer clic en el botón de enviar
document.getElementById('submit-button').addEventListener('click', verificarCodigo);