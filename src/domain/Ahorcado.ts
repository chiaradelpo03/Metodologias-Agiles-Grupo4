export class Ahorcado {
  private palabraSecreta: string;

  constructor(palabra: string) {
    this.palabraSecreta = palabra.trim().toUpperCase();
  }

  obtenerPalabraEnmascarada(): string {
    return Array.from({ length: this.palabraSecreta.length }, () => '_').join(' ');
  }
}
