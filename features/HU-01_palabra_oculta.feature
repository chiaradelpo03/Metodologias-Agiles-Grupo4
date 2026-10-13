# language: es
@HU-01
Característica: Visualización de la palabra oculta al iniciar
  Como jugador
  Quiero ver guiones bajos por cada letra de la palabra
  Para conocer su longitud al iniciar el juego

  Escenario: Iniciar partida muestra los guiones según la palabra secreta
    Dado que inicio una nueva partida con la palabra "AGIL"
    Cuando observo la palabra en juego
    Entonces debería ver los guiones "_ _ _ _"
