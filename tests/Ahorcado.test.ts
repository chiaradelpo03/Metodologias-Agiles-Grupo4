import { describe, expect, it } from 'vitest';
import { Ahorcado } from '../src/domain/Ahorcado';

describe('Ahorcado', () => {
  it('muestra la letra acertada en la palabra enmascarada', () => {
    const juego = new Ahorcado('GATO');

    juego.adivinar('A');

    expect(juego.obtenerPalabraEnmascarada()).toBe('_ A _ _');
  });
});
