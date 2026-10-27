# language: es
@HU-07
Característica: No penalizar letras repetidas
  Como jugador
  Quiero que no se me descuenten intentos si repito una letra ya ingresada
  Para evitar perder intentos por equivocación al arriesgar la misma letra

  Escenario: Arriesgar una letra incorrecta repetida no descuenta intentos adicionales
    Dado que inicio una nueva partida con la palabra "GATO"
    Cuando arriesgo la letra "Z"
    Entonces debería ver que me quedan 5 intentos
    Cuando arriesgo la letra "Z"
    Entonces debería ver que me quedan 5 intentos

  Escenario: Arriesgar una letra acertada repetida mantiene la palabra y los intentos
    Dado que inicio una nueva partida con la palabra "GATO"
    Cuando arriesgo la letra "A"
    Entonces debería ver la palabra "_ A _ _"
    Y debería ver que me quedan 6 intentos
    Cuando arriesgo la letra "A"
    Entonces debería ver la palabra "_ A _ _"
    Y debería ver que me quedan 6 intentos
