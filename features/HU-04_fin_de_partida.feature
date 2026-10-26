# language: es
@HU-04
Característica: Fin de partida (ganar y perder)
  Como jugador
  Quiero saber cuándo he ganado o perdido la partida
  Para conocer el resultado de mi juego

  Escenario: Ganar la partida al adivinar todas las letras
    Dado que inicio una nueva partida con la palabra "SOL"
    Cuando arriesgo la letra "S"
    Y arriesgo la letra "O"
    Y arriesgo la letra "L"
    Entonces debería ver la palabra "S O L"
    Y debería ver el mensaje "¡Ganaste!"
