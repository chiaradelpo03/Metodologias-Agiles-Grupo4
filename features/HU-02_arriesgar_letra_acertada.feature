# language: es
@HU-02
Característica: Arriesgar una letra acertada
  Como jugador
  Quiero arriesgar una letra
  Para descubrir las posiciones donde aparece en la palabra

  Escenario: Adivinar una letra presente en la palabra
    Dado que inicio una nueva partida con la palabra "GATO"
    Cuando arriesgo la letra "A"
    Entonces debería ver la palabra "_ A _ _"
