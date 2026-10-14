export class Ahorcado {
  private palabraSecreta: string;
  private letrasAdivinadas = new Set<string>();

  constructor(palabra: string) {
    this.palabraSecreta = palabra.trim().toUpperCase();
  }

  obtenerPalabraEnmascarada(): string {
    return Array.from(this.palabraSecreta, letra =>
      this.letrasAdivinadas.has(letra) ? letra : '_',
    ).join(' ');
  }

  adivinar(letra: string): void {
    this.letrasAdivinadas.add(letra.toUpperCase());
  }
}
