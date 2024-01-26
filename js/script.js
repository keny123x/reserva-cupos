function mostrarFormularioAlumnoNuevo() {
    // Mostrar el formulario del alumno nuevo
    var formularioAlumnoNuevo = document.getElementById("formulario-alumno-nuevo");
    formularioAlumnoNuevo.style.display = "block";

    // Ocultar la sección de colegios disponibles
    var colegiosDisponiblesSection = document.getElementById("colegios-disponibles");
    colegiosDisponiblesSection.style.display = "none";

    // Remover la clase "seleccionado" del botón de Alumno Antiguo si está presente
    var botonAlumnoAntiguo = document.querySelector('#botones button:last-child');
    botonAlumnoAntiguo.classList.remove('seleccionado');
}

function mostrarColegiosDisponibles() {
    // Mostrar la sección de colegios disponibles
    var colegiosDisponiblesSection = document.getElementById("colegios-disponibles");
    colegiosDisponiblesSection.style.display = "block";
    colegiosDisponiblesSection.scrollIntoView({ behavior: 'smooth' });

    // Ocultar el formulario del alumno nuevo
    var formularioAlumnoNuevo = document.getElementById("formulario-alumno-nuevo");
    formularioAlumnoNuevo.style.display = "none";

    // Verificar si se seleccionó "Alumno Antiguo"
    var botonAlumnoAntiguo = document.querySelector('#botones button:last-child');
    if (botonAlumnoAntiguo.classList.contains('seleccionado')) {
        // Solicitar número de RUDE solo si se selecciona "Alumno Antiguo"
        var numeroRude = prompt("Ingresa el número de RUDE del alumno antiguo:");
        if (numeroRude === null || numeroRude === "") {
            return; // Si el usuario cancela o no ingresa un número RUDE, no hacer nada
        }
        // Aquí va el código para manejar la reserva para el alumno antiguo
    }
}

// Función para marcar la opción seleccionada (Alumno Nuevo o Alumno Antiguo)
document.addEventListener("DOMContentLoaded", function() {
    var botones = document.querySelectorAll('#botones button');
    botones.forEach(function(boton) {
        boton.addEventListener('click', function() {
            botones.forEach(function(b) {
                b.classList.remove('seleccionado');
            });
            boton.classList.add('seleccionado');
        });
    });
});
