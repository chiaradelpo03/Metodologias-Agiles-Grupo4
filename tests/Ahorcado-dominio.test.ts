import { describe, it, expect } from 'vitest';
import { Ahorcado } from '../src/domain/Ahorcado';

describe('Ahorcado - Dominio', () => {
  it('debería mostrar un guión por cada letra separada por espacios al iniciar', () => {
    const juego = new Ahorcado('AGIL');
    expect(juego.obtenerPalabraEnmascarada()).toBe('_ _ _ _');
  });

  it('debería soportar palabras de diferente longitud', () => {
    const juego = new Ahorcado('REACT');
    expect(juego.obtenerPalabraEnmascarada()).toBe('_ _ _ _ _');
  });
});
