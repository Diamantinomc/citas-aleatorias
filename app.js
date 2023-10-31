const botonElem = document.getElementById('boton');
const citaElem = document.getElementById('cita');
const autorElem = document.getElementById('autor');

function numRand(min, max) {
  return Math.floor(Math.random() * (max - min) + min);
}

function cambiarCita() {
  let indiceRand = numRand(0, citas.length);
  citaElem.innerText = `"${citas[indiceRand].texto}"`;
  autorElem.innerText = citas[indiceRand].autor;
}

cambiarCita();

botonElem.addEventListener('click', cambiarCita);


