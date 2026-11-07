export class Ahorcado {
  private static readonly PALABRAS_POR_DEFECTO = ['GATO', 'SOL', 'PERRO'];
  private palabraSecreta: string;
  private letrasAdivinadas = new Set<string>();
  private intentosRestantes: number;
  private indicePalabra = 0;
  private usaListaPredefinida = false;

  constructor(palabra?: string, intentosMaximos = 6) {
    if (palabra) {
      this.palabraSecreta = palabra.trim().toUpperCase();
    } else {
      this.usaListaPredefinida = true;
      this.palabraSecreta = Ahorcado.PALABRAS_POR_DEFECTO[0];
    }
    this.intentosRestantes = intentosMaximos;
  }

  obtenerPalabraEnmascarada(): string {
    return Array.from(this.palabraSecreta, letra =>
      this.letrasAdivinadas.has(letra) ? letra : '_',
    ).join(' ');
  }

  adivinar(letra: string): void {
    const letraMayuscula = letra.toUpperCase();
    if (this.letrasAdivinadas.has(letraMayuscula)) {
      return;
    }
    if (!this.palabraSecreta.includes(letraMayuscula)) {
      this.intentosRestantes--;
    }
    this.letrasAdivinadas.add(letraMayuscula);
  }

  obtenerIntentosRestantes(): number {
    return this.intentosRestantes;
  }

  reiniciar(): void {
    this.intentosRestantes = 6;
    this.letrasAdivinadas.clear();
    if (this.usaListaPredefinida) {
      this.indicePalabra = (this.indicePalabra + 1) % Ahorcado.PALABRAS_POR_DEFECTO.length;
      this.palabraSecreta = Ahorcado.PALABRAS_POR_DEFECTO[this.indicePalabra];
    }
  }

  estaGanado(): boolean {
    return Array.from(this.palabraSecreta).every(letra => this.letrasAdivinadas.has(letra));
  }

  estaPerdido(): boolean {
    return this.intentosRestantes === 0;
  }

  obtenerLetrasArriesgadas(): string[] {
    return Array.from(this.letrasAdivinadas);
  }
}
