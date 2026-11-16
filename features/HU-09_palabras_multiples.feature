# language: es
@HU-09
Característica: Palabras múltiples en el juego
  Como jugador
  Quiero que cada partida use una palabra de una lista predefinida
  Para que el juego sea variado y desafiante

  Escenario: Al iniciar sin especificar palabra, se muestra una palabra de la lista
    Dado que inicio el juego sin especificar una palabra
    Entonces la palabra enmascarada debería mostrar solo guiones bajos

  Escenario: Al reiniciar, la nueva palabra viene de la lista predefinida y puede ser diferente
    Dado que inicio el juego sin especificar una palabra
    Y completo la partida adivina todas las letras de la primera palabra
    Cuando hago clic en el botón "Jugar de nuevo"
    Entonces la palabra enmascarada debería tener "_ _ _" guiones
