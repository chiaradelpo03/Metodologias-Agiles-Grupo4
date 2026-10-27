# language: es
@HU-06
Característica: Reiniciar la partida
  Como jugador
  Quiero reiniciar una partida terminada
  Para comenzar a jugar de nuevo

  Escenario: Reiniciar una partida perdida
    Dado que inicio una nueva partida con la palabra "SOL"
    Cuando arriesgo la letra "A"
    Y arriesgo la letra "E"
    Y arriesgo la letra "I"
    Y arriesgo la letra "U"
    Y arriesgo la letra "M"
    Y arriesgo la letra "P"
    Cuando hago clic en el botón "Jugar de nuevo"
    Entonces debería ver que me quedan 6 intentos
    Y la palabra enmascarada debería estar oculta o limpia
