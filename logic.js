document.addEventListener('DOMContentLoaded', function () {
    // ... (código existente)

    // Objeto para almacenar placas existentes
    var placasExistentes = {};

    formulario.addEventListener('submit', function (event) {
        event.preventDefault();

        // Obtener los valores de los campos del formulario
        var nombre = document.getElementById('nombre').value;
        var modelo = document.getElementById('modelo').value;
        var placa = document.getElementById('placa').value;
        var horaEntrada = document.getElementById('horaEntrada').value;
        var horaSalida = document.getElementById('horaSalida').value;
        var lugarEstacionamiento = document.getElementById('lugarEstacionamiento').value;

        // Validar si los campos están llenos
        if (!nombre || !modelo || !placa || !horaEntrada || !horaSalida || !lugarEstacionamiento) {
            alert('Por favor, llene todos los campos.');
            return;
        }

        // Validar si la placa ya existe en el objeto placasExistentes
        if (placasExistentes[placa]) {
            alert('La placa ya existe en la tabla. Por favor, ingrese una placa diferente.');
            return;
        }

        // Crear una nueva fila en la tabla
        var newRow = tablaCarros.insertRow(-1);

        // Insertar celdas con los datos
        newRow.insertCell(0).textContent = lugarEstacionamiento;
        newRow.insertCell(1).textContent = nombre;
        newRow.insertCell(2).textContent = modelo;
        newRow.insertCell(3).textContent = placa;
        newRow.insertCell(4).textContent = horaEntrada;
        newRow.insertCell(5).textContent = horaSalida;

        // Crear celda para el botón de borrado
        var cellAcciones = newRow.insertCell(6);

        // Crear botón de borrado
        var btnBorrar = document.createElement('button');
        btnBorrar.textContent = 'Borrar';
        btnBorrar.className = 'btn btn-outline-danger btnBorrar'; // Clase para dar estilo al botón
        btnBorrar.addEventListener('click', function () {
            // Lógica para borrar la fila
            newRow.remove();
            // Eliminar la placa del objeto placasExistentes
            delete placasExistentes[placa];
        });

        // Agregar el botón de borrado a la celda de acciones
        cellAcciones.appendChild(btnBorrar);

        // Agregar la placa al objeto placasExistentes
        placasExistentes[placa] = true;

        // Limpiar los campos del formulario
        formulario.reset();
    });

    // ... (código existente)
});