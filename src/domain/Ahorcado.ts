export class Ahorcado {
  private palabraSecreta: string;
  private letrasAdivinadas = new Set<string>();
  private intentosRestantes: number;

  constructor(palabra: string, intentosMaximos = 6) {
    this.palabraSecreta = palabra.trim().toUpperCase();
    this.intentosRestantes = intentosMaximos;
  }

  obtenerPalabraEnmascarada(): string {
    return Array.from(this.palabraSecreta, letra =>
      this.letrasAdivinadas.has(letra) ? letra : '_',
    ).join(' ');
  }

  adivinar(letra: string): void {
    const letraMayuscula = letra.toUpperCase();
    if (!this.palabraSecreta.includes(letraMayuscula)) {
      this.intentosRestantes--;
    }
    this.letrasAdivinadas.add(letraMayuscula);
  }

  obtenerIntentosRestantes(): number {
    return this.intentosRestantes;
  }

  estaGanado(): boolean {
    return Array.from(this.palabraSecreta).every(letra => this.letrasAdivinadas.has(letra));
  }
}

