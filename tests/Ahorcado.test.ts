import { describe, expect, it } from 'vitest';
import { Ahorcado } from '../src/domain/Ahorcado';

describe('Ahorcado', () => {
  it('muestra la letra acertada en la palabra enmascarada', () => {
    const juego = new Ahorcado('GATO');

    juego.adivinar('A');

    expect(juego.obtenerPalabraEnmascarada()).toBe('_ A _ _');
  });

  it('muestra todas las apariciones de una letra acertada', () => {
    const juego = new Ahorcado('PERRO');

    juego.adivinar('R');

    expect(juego.obtenerPalabraEnmascarada()).toBe('_ _ R R _');
  });

  it('descuenta un intento al arriesgar una letra que no pertenece a la palabra', () => {
    const juego = new Ahorcado('GATO');

    juego.adivinar('Z');

    expect(juego.obtenerIntentosRestantes()).toBe(5);
  });

  it('no descuenta intentos si la letra arriesgada pertenece a la palabra', () => {
    const juego = new Ahorcado('GATO');

    juego.adivinar('A');

    expect(juego.obtenerIntentosRestantes()).toBe(6);
  });

  it('reinicia los intentos restantes a 6', () => {
    const juego = new Ahorcado('GATO');

    juego.adivinar('Z');
    juego.reiniciar();

    expect(juego.obtenerIntentosRestantes()).toBe(6);
  });

  it('limpia las letras adivinadas al reiniciar', () => {
    const juego = new Ahorcado('GATO');

    juego.adivinar('A');
    juego.reiniciar();

    expect(juego.obtenerPalabraEnmascarada()).toBe('_ _ _ _');
  });

  it('indica que la partida está ganada cuando se adivinan todas las letras', () => {
    const juego = new Ahorcado('SOL');

    juego.adivinar('S');
    juego.adivinar('O');
    juego.adivinar('L');

    expect(juego.estaGanado()).toBe(true);
  });

  it('no considera ganada la partida si aún quedan letras por adivinar', () => {
    const juego = new Ahorcado('SOL');

    juego.adivinar('S');

    expect(juego.estaGanado()).toBe(false);
  });

  it('indica que la partida está perdida cuando se agotan los intentos', () => {
    const juego = new Ahorcado('SOL');

    juego.adivinar('A');
    juego.adivinar('B');
    juego.adivinar('C');
    juego.adivinar('D');
    juego.adivinar('E');
    juego.adivinar('F');

    expect(juego.estaPerdido()).toBe(true);
  });

  it('no considera perdida la partida si todavía quedan intentos', () => {
    const juego = new Ahorcado('SOL');

    juego.adivinar('A');

    expect(juego.estaPerdido()).toBe(false);
  });

  it('no descuenta intentos si se arriesga nuevamente una letra incorrecta ya ingresada', () => {
    const juego = new Ahorcado('GATO');

    juego.adivinar('Z');
    juego.adivinar('Z');

    expect(juego.obtenerIntentosRestantes()).toBe(5);
  });

  it('no descuenta intentos al arriesgar repetidamente cualquier letra ya ingresada', () => {
    const juego = new Ahorcado('GATO');

    juego.adivinar('X');
    juego.adivinar('X');

    expect(juego.obtenerIntentosRestantes()).toBe(5);
  });
});



