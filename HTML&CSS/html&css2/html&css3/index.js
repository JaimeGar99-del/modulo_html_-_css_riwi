
const dragones = [
    {
        nombre: "Furia Nocturna",
        desc: "La cría maligna del rayo y la muerte misma.",
        info: "Es el dragón más rápido y audaz. Su inteligencia es superior y su ataque de plasma es letal.",
        img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQfNdIRnqsSSfTRF0s6QCVyWCEWI37-5nwVVA&s"
    },
    {
        nombre: "Furia Luminosa",
        desc: "Una variante rara y elegante de la Furia Nocturna.",
        info: "Muy ágil y sigilosa. Puede camuflarse y desaparecer en pleno vuelo.",
        img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQlightfuryexample&s"
    },
    {
        nombre: "Nadder Mortífero",
        desc: "Famoso por sus espinas venenosas.",
        info: "Su fuego es el más caliente. Puede lanzar espinas desde su cola con una puntería perfecta.",
        img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT5UE6Z_CDA0svw6uonPkL92Z42GoGtLA4hPg&s"
    },
    {
        nombre: "Gronckle",
        desc: "Duro como la piedra y muy leal.",
        info: "Se alimenta de rocas y produce 'Hierro de Gronckle'. Son excelentes compañeros.",
        img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRsxb-VWvr-rvWw6x_f5OhnpmNNXUpxRGJZAg&s"
    },
    {
        nombre: "Pesadilla Monstruosa",
        desc: "Envuelto en llamas durante el combate.",
        info: "Puede cubrir su cuerpo en fuego. Es muy agresivo pero también impresionante en batalla.",
        img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSmonstrous&s"
    },
    {
        nombre: "Zippelback Terrible",
        desc: "Dragón de dos cabezas con personalidades opuestas.",
        info: "Una cabeza produce gas y la otra lo enciende. Coordinación letal.",
        img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSzippelback&s"
    },
    {
        nombre: "Hideous Zippleback",
        desc: "Versión original en inglés del Zippelback.",
        info: "Muy estratégico en combate, usa distracción y explosiones.",
        img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSzippleback2&s"
    },
    {
        nombre: "Terrible Terror",
        desc: "Pequeño pero problemático.",
        info: "Rápido, escurridizo y suele robar comida. Ideal como mascota.",
        img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSterror&s"
    },
    {
        nombre: "Stormcutter",
        desc: "Majestuoso dragón de cuatro alas.",
        info: "Muy inteligente y protector. Puede volar con gran estabilidad.",
        img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSstormcutter&s"
    },
    {
        nombre: "Bewilderbeast",
        desc: "El rey de los dragones.",
        info: "Gigantesco y dominante. Puede controlar a otros dragones.",
        img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSbewilderbeast&s"
    },
    {
        nombre: "Death Song",
        desc: "Cazador con canto hipnótico.",
        info: "Atrae a sus presas con su voz y las atrapa con ámbar.",
        img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSdeathsong&s"
    },
    {
        nombre: "Skrill",
        desc: "Dragón de electricidad pura.",
        info: "Controla rayos y tormentas. Uno de los más peligrosos.",
        img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSskrill&s"
    },
    {
        nombre: "Timberjack",
        desc: "Dragón con alas afiladas como cuchillas.",
        info: "Puede cortar árboles enteros con sus alas.",
        img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcStimbers&s"
    },
    {
        nombre: "Rumblehorn",
        desc: "Fuerte y resistente.",
        info: "Tiene un gran sentido del olfato y es excelente rastreador.",
        img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSrumblehorn&s"
    },
    {
        nombre: "Changewing",
        desc: "Maestro del camuflaje.",
        info: "Puede volverse invisible y atacar por sorpresa.",
        img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSchangewing&s"
    }
];

function cargarCartas() {
    const contenedor = document.getElementById("dragon-grid");
    
    dragones.forEach((dragon) => {
        contenedor.innerHTML += `
            <div class="card">
                <img src="${dragon.img}" alt="${dragon.nombre}">
                <div class="card-body">
                    <h3 class="card-title">${dragon.nombre}</h3>
                    <p>${dragon.desc}</p>
                    <button class="btn-ver-mas" onclick="mostrarInfo(this)">Ver más</button>
                    <div class="info-extra">${dragon.info}</div>
                </div>
            </div>
        `;
    });
}

function mostrarInfo(boton) {
    let info = boton.nextElementSibling;
    info.classList.toggle("show");
    
    if (info.classList.contains("show")) {
        boton.innerText = "Ver menos";
        boton.style.backgroundColor = "#555";
    } else {
        boton.innerText = "Ver más";
        boton.style.backgroundColor = "#e63946";
    }
}

cargarCartas();
