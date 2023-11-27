var boton = document.getElementById('enviar');

boton.addEventListener('click', function(){
    var resultado = document.getElementById('resultado');

    resultado.textContent = "Reserva realizada correctamente";
})

const galeriaImagenes = document.getElementById('galeria');
const images = document.getElementById('images');
const anterior = document.getElementById('anterior');
const siguiente = document.getElementById('siguiente');
const imagenes = [
    "./img/ZJXNYIMDYZBSHKORKOZ6Y34OQU.jpg",
    "./img/f.elconfidencial.com_original_4fd_1f2_bb5_4fd1f2bb55f477155f4cb4e416d20ff1.jpg",
    "./img/ferrarif2007_brasil_001.jpg",
    "./img/16462085607045.jpg"
];

var nombre = document.getElementById('nombreCoches');

var nombres = [
    "Ferrari 125",
    "Ferrari 412 T2",
    "Ferrari F2007",
    "Ferrari SF-23"
];

let i = 0;

function mostrarImagen(i){
    images.src = imagenes[i];
    nombre.textContent = nombres[i];
}

function mostrarSiguiente(){
    i = (i + 1) % imagenes.length;

    mostrarImagen(i);
}

function mostrarAnterior(){
    i = (i - 1 + imagenes.length) % imagenes.length;

    mostrarImagen(i);
}

mostrarImagen(i);

siguiente.addEventListener('click', mostrarSiguiente);
anterior.addEventListener('click', mostrarAnterior);

 