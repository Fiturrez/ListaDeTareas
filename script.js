// Array para almacenar las tareas
let tareas = [];

// Función para agregar una nueva tarea
function agregarTarea(nombre, prioridad) {
    let tarea = {
        nombre: nombre,
        prioridad: prioridad
    };
    tareas.push(tarea);
}

// Función para listar todas las tareas
function listarTareas() {
    if (tareas.length === 0) {
        console.log("No hay tareas en la lista.");
        return;
    }

    console.log("Lista de tareas:");
    tareas.forEach(function(tarea, index) {
        console.log((index + 1) + ". " + tarea.nombre + " - Prioridad: " + tarea.prioridad);
    });
}

// Función para solicitar al usuario que agregue tareas
function solicitarTareas() {
    let continuar = true;

    while (continuar) {
        let nombre = prompt("Ingrese el nombre de la tarea:");
           let prioridad = prompt("Ingrese la prioridad de la tarea (Alta, Media, Baja):");

        if (nombre && prioridad) {
            agregarTarea(nombre, prioridad);
        } else {
            console.log("Nombre o prioridad inválidos. Inténtelo de nuevo.");
        }

        continuar = confirm("¿Desea agregar otra tarea?");
    }
}

// Función principal
function main() {
    solicitarTareas(); // Permite al usuario agregar tareas
    listarTareas();    // Muestra todas las tareas después de agregar
}

// Ejecutar el script
main();
