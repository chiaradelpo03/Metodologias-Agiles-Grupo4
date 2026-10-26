import './style.css';
import { Ahorcado } from './domain/Ahorcado';

function iniciarAplicacion() {
  const urlParams = new URLSearchParams(window.location.search);
  const palabra = urlParams.get('palabra') || 'AHORCADO';

  const juego = new Ahorcado(palabra);

  const palabraOcultaEl = document.getElementById('palabra-oculta');
  const intentosRestantesEl = document.getElementById('intentos-restantes');
  const estadoJuegoEl = document.getElementById('estado-juego');

  const actualizarPantalla = () => {
    if (palabraOcultaEl) {
      palabraOcultaEl.textContent = juego.obtenerPalabraEnmascarada();
    }
    if (intentosRestantesEl) {
      intentosRestantesEl.textContent = juego.obtenerIntentosRestantes().toString();
    }
    if (estadoJuegoEl && juego.estaGanado()) {
      estadoJuegoEl.textContent = '¡Ganaste!';
    }
  };

  actualizarPantalla();

  const formulario = document.getElementById('formulario-letra') as HTMLFormElement;
  const inputLetra = document.getElementById('letra') as HTMLInputElement;

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
