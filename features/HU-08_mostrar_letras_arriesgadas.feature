# language: es
@HU-08
Característica: Mostrar lista de letras ya arriesgadas
  Como jugador
  Quiero ver las letras que ya arriesgué en la partida
  Para evitar repeticiones involuntarias y planificar mis próximos intentos

  Escenario: Mostrar las letras arriesgadas en la interfaz
    Dado que inicio una nueva partida con la palabra "GATO"
    Cuando arriesgo la letra "A"
    Y arriesgo la letra "Z"
    Entonces debería ver las letras arriesgadas "A, Z"
