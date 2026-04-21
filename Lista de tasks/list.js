// ─── Estado ───────────────────────────────────────────────────────────────────
// Aquí vive toda la información de la app.
// 'tareas' es un array de objetos: { id, texto, hecha }
// 'filtroActivo' controla qué tareas se muestran

let tareas = cargarDesdStorage();
let filtroActivo = 'todas';

// ─── Referencias al DOM ────────────────────────────────────────────────────────
const inputTarea   = document.getElementById('input-tarea');
const btnAgregar   = document.getElementById('btn-agregar');
const listaTareas  = document.getElementById('lista-tareas');
const mensajeVacio = document.getElementById('mensaje-vacio');
const textoVacio   = document.getElementById('texto-vacio');
const cntTotal     = document.getElementById('cnt-total');
const cntPend      = document.getElementById('cnt-pend');
const cntDone      = document.getElementById('cnt-done');

// ─── Eventos ──────────────────────────────────────────────────────────────────
btnAgregar.addEventListener('click', agregarTarea);

// Agregar con Enter
inputTarea.addEventListener('keydown', function(e) {
    if (e.key === 'Enter') agregarTarea();
});

// Filtros: buscamos todos los botones con clase .filtro
document.querySelectorAll('.filtro').forEach(function(btn) {
    btn.addEventListener('click', function() {
        filtroActivo = btn.dataset.filtro;

        // Quitamos .activo de todos y se lo ponemos al clickeado
        document.querySelectorAll('.filtro').forEach(b => b.classList.remove('activo'));
        btn.classList.add('activo');

        renderizar();
    });
});

// ─── Función principal: agregar tarea ─────────────────────────────────────────
function agregarTarea() {
    const texto = inputTarea.value.trim();

    if (texto === '') return; // No agregar si está vacío

    const nuevaTarea = {
        id: Date.now(),       // ID único basado en el tiempo
        texto: texto,
        hecha: false
    };

    tareas.unshift(nuevaTarea); // unshift agrega al inicio del array
    inputTarea.value = '';

    guardarEnStorage();
    renderizar();
}

// ─── Marcar/desmarcar tarea ───────────────────────────────────────────────────
function toggleTarea(id) {
    // Encontramos la tarea por su id y le cambiamos el estado
    const tarea = tareas.find(t => t.id === id);
    if (tarea) {
        tarea.hecha = !tarea.hecha;
        guardarEnStorage();
        renderizar();
    }
}

// ─── Eliminar tarea ───────────────────────────────────────────────────────────
function eliminarTarea(id) {
    // filter devuelve un nuevo array sin la tarea eliminada
    tareas = tareas.filter(t => t.id !== id);
    guardarEnStorage();
    renderizar();
}

// ─── Renderizar: actualiza el DOM según el estado ─────────────────────────────
function renderizar() {
    // 1. Filtrar según la vista activa
    let tareasFiltradas;
    if (filtroActivo === 'pendientes') {
        tareasFiltradas = tareas.filter(t => !t.hecha);
    } else if (filtroActivo === 'hechas') {
        tareasFiltradas = tareas.filter(t => t.hecha);
    } else {
        tareasFiltradas = tareas; // todas
    }

    // 2. Actualizar contadores
    const total     = tareas.length;
    const pendientes = tareas.filter(t => !t.hecha).length;
    const hechas    = tareas.filter(t => t.hecha).length;

    cntTotal.textContent = total + ' total';
    cntPend.textContent  = pendientes + ' pendientes';
    cntDone.textContent  = hechas + ' hechas';

    // 3. Mostrar mensaje vacío o la lista
    if (tareasFiltradas.length === 0) {
        listaTareas.innerHTML = '';
        mensajeVacio.classList.remove('oculto');

        // Mensaje distinto según el filtro
        if (filtroActivo === 'hechas')     textoVacio.textContent = '// sin tareas completadas';
        else if (filtroActivo === 'pendientes') textoVacio.textContent = '// todo al día!';
        else textoVacio.textContent = '// agrega tu primera tarea';

        return;
    }

    mensajeVacio.classList.add('oculto');

    // 4. Construir el HTML de cada tarea
    listaTareas.innerHTML = tareasFiltradas.map(function(tarea) {
        return `
            <li class="tarea ${tarea.hecha ? 'hecha' : ''}" data-id="${tarea.id}">
                <div class="check ${tarea.hecha ? 'marcado' : ''}" onclick="toggleTarea(${tarea.id})"></div>
                <span class="tarea-texto">${escaparHTML(tarea.texto)}</span>
                <button class="btn-eliminar" onclick="eliminarTarea(${tarea.id})">✕</button>
            </li>
        `;
    }).join('');
}

// ─── LocalStorage: guardar y cargar ──────────────────────────────────────────
// localStorage guarda datos en el navegador — persisten aunque cierres la pestaña

function guardarEnStorage() {
    // JSON.stringify convierte el array a texto para guardarlo
    localStorage.setItem('mis-tareas', JSON.stringify(tareas));
}

function cargarDesdStorage() {
    const datos = localStorage.getItem('mis-tareas');
    // Si no hay datos guardados, empezamos con array vacío
    // JSON.parse convierte el texto de vuelta a array
    return datos ? JSON.parse(datos) : [];
}

// ─── Utilidad: evitar inyección de HTML ──────────────────────────────────────
function escaparHTML(texto) {
    return texto
        .replace(/&/g, '&amp;')
        .replace(/</g, '&lt;')
        .replace(/>/g, '&gt;');
}

// ─── Arrancar la app ──────────────────────────────────────────────────────────
renderizar();