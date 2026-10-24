# language: es
@HU-03
Característica: Arriesgar una letra incorrecta y descontar intentos
  Como jugador
  Quiero arriesgar una letra que no pertenece a la palabra
  Para saber que fallé y ver cuántos intentos me quedan

  Escenario: Adivinar una letra que no está en la palabra
    Dado que inicio una nueva partida con la palabra "GATO"
    Cuando arriesgo la letra "Z"
    Entonces debería ver la palabra "_ _ _ _"
    Y debería ver que me quedan 5 intentos
