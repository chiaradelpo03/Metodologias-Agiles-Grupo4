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
});

