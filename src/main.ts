import './style.css';
import { Ahorcado } from './domain/Ahorcado';

function iniciarAplicacion() {
  const urlParams = new URLSearchParams(window.location.search);
  const palabra = urlParams.get('palabra') || 'AHORCADO';

  const juego = new Ahorcado(palabra);

  const palabraOcultaEl = document.getElementById('palabra-oculta');
  const intentosRestantesEl = document.getElementById('intentos-restantes');
  const letrasArriesgadasEl = document.getElementById('letras-arriesgadas');
  const estadoJuegoEl = document.getElementById('estado-juego');
  const botonReiniciar = document.getElementById('btn-reiniciar') as HTMLButtonElement;

  const actualizarPantalla = () => {
    if (palabraOcultaEl) {
      palabraOcultaEl.textContent = juego.obtenerPalabraEnmascarada();
    }
    if (intentosRestantesEl) {
      intentosRestantesEl.textContent = juego.obtenerIntentosRestantes().toString();
    }
    if (letrasArriesgadasEl) {
      letrasArriesgadasEl.textContent = juego.obtenerLetrasArriesgadas().join(', ');
    }
    if (estadoJuegoEl) {
      if (juego.estaGanado()) {
        estadoJuegoEl.textContent = '¡Ganaste!';
      } else if (juego.estaPerdido()) {
        estadoJuegoEl.textContent = '¡Perdiste!';
      } else {
        estadoJuegoEl.textContent = '';
      }
    }
    botonReiniciar.hidden = !juego.estaGanado() && !juego.estaPerdido();
  };

  actualizarPantalla();

  const formulario = document.getElementById('formulario-letra') as HTMLFormElement;
  const inputLetra = document.getElementById('letra') as HTMLInputElement;

  botonReiniciar.addEventListener('click', () => {
    juego.reiniciar();
    inputLetra.value = '';
    actualizarPantalla();
  });

  formulario.onsubmit = (evento) => {
    evento.preventDefault();
    if (inputLetra.value) {
      juego.adivinar(inputLetra.value);
      inputLetra.value = '';
      actualizarPantalla();
    }
  };
}

document.addEventListener('DOMContentLoaded', iniciarAplicacion);
iniciarAplicacion();
