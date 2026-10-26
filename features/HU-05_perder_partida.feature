# language: es
@HU-05
Característica: Perder la partida
  Como jugador
  Quiero saber cuándo he perdido la partida por agotar mis intentos
  Para conocer el resultado de mi juego

  Escenario: Perder la partida al agotar los 6 intentos
    Dado que inicio una nueva partida con la palabra "SOL"
    Cuando arriesgo la letra "A"
    Y arriesgo la letra "E"
    Y arriesgo la letra "I"
    Y arriesgo la letra "U"
    Y arriesgo la letra "M"
    Y arriesgo la letra "P"
    Entonces debería ver que me quedan 0 intentos
    Y debería ver el mensaje "¡Perdiste!"
