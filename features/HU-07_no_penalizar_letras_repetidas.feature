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
