import './style.css';
import { Ahorcado } from './domain/Ahorcado';

function iniciarAplicacion() {
  const urlParams = new URLSearchParams(window.location.search);
  const palabra = urlParams.get('palabra') || 'AHORCADO';

  const juego = new Ahorcado(palabra);

  const palabraOcultaEl = document.getElementById('palabra-oculta');
  if (palabraOcultaEl) {
    palabraOcultaEl.textContent = juego.obtenerPalabraEnmascarada();
  }

  const formulario = document.getElementById('formulario-letra') as HTMLFormElement;
  const inputLetra = document.getElementById('letra') as HTMLInputElement;

  formulario.onsubmit = (evento) => {
    evento.preventDefault();
    juego.adivinar(inputLetra.value);
    if (palabraOcultaEl) {
      palabraOcultaEl.textContent = juego.obtenerPalabraEnmascarada();
    }
  };
}

document.addEventListener('DOMContentLoaded', iniciarAplicacion);
iniciarAplicacion();
