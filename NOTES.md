# NOTES.md — Trazabilidad y Registro de Decisiones

Este documento registra la trazabilidad entre **Historias de Usuario**, **Criterios de Aceptación**, **Acceptance Tests (ATDD)** y **Unit Tests (TDD)** del dominio, cumpliendo con los requisitos de la consigna (§3.3.1 y §5).

---

## 1. Integrantes del Equipo y Rotación
*Nota: Cada integrante debe comenzar al menos 3 tests (al menos 3 commits `RED:` propios).*

| Integrante | GitHub Username | Email en Git | Commits RED iniciados |
|------------|-----------------|--------------|-----------------------|
| Tomás Gigli | tomiingm | tomasgigli@yahoo.com.ar | 5 (HU-01 y HU-04, completados con GREEN) |
| Isabella Andriollo | isabellaand | isabellaandriollo30@gmail.com | 4 (HU-02 y HU-06, completados con GREEN) |
| Luis Sosa | lusosa280 | luis.ant.sosa@gmail.com | 3 (HU-03, completados con GREEN) |
| Chiara Del Po | chiaradelpo03 | chiaradelpopolo@hotmail.com | 3 (HU-05, completados con GREEN) |

---

## 2. Enlaces del Proyecto
- **Repositorio**: [GitHub Repository](https://github.com/chiaradelpo03/Metodologias-Agiles-Grupo4)
- **Tablero / Story Map**: *[Pegar aquí el link a GitHub Projects / Trello]*
- **Aplicación en Producción**: [https://chiaradelpo03.github.io/Metodologias-Agiles-Grupo4/](https://chiaradelpo03.github.io/Metodologias-Agiles-Grupo4/)
- **Dashboard de Calidad (SonarQube Cloud)**: [https://sonarcloud.io/project/overview?id=lusosa280_Metodologias-Agiles-Grupo4](https://sonarcloud.io/project/overview?id=lusosa280_Metodologias-Agiles-Grupo4)

---

## 3. Matriz de Trazabilidad: Historia -> AT -> Unit Tests

| ID Historia | Título / Criterio de Aceptación | Acceptance Test (Gherkin / Feature) | Unit Tests de Dominio (TDD) | Responsable (Autor RED) | Estado |
|-------------|---------------------------------|--------------------------------------|-----------------------------|--------------------------|--------|
| **HU-01** | Mostrar guiones según la palabra secreta | `features/HU-01_palabra_oculta.feature` | `src/domain/Ahorcado.test.ts` (enmascarado inicial) | Tomás Gigli (tomiingm) | Terminada (AT y UT verdes) |
| **HU-02** | Arriesgar letra acertada | `features/HU-02_arriesgar_letra_acertada.feature` | `tests/Ahorcado.test.ts` (letra acertada) | Isabella Andriollo (isabellaand) | Terminada (AT y UT verdes) |
| **HU-03** | Arriesgar letra errónea y descontar intentos | `features/HU-03_arriesgar_letra_incorrecta.feature` | `tests/Ahorcado.test.ts` (descontar intentos y triangulación) | Luis Sosa (lusosa280) | Terminada (AT y UT verdes) |
| **HU-04** | Ganar partida al adivinar todas las letras | `features/HU-04_fin_de_partida.feature` | `tests/Ahorcado.test.ts` (victoria y triangulación) | Tomás Gigli (tomiingm) | Terminada (AT y UT verdes) |
| **HU-05** | Perder partida al agotar los 6 intentos | `features/HU-05_perder_partida.feature` | `tests/Ahorcado.test.ts` (derrota y triangulación) | Chiara Del Po (chiaradelpo03) | Terminada (AT y UT verdes) |
| **HU-06** | Reiniciar partida con botón "Jugar de nuevo" | `features/HU-06_reiniciar_partida.feature` | `tests/Ahorcado.test.ts (reiniciar intentos, limpiar palabra y triangulación)` | Isabella Andriollo (isabellaand) | Terminada (AT y UT verdes) |

---

## 4. Convenciones de Trabajo
- **Commits**:
  - `RED: [ID-HU] descripción del test que falla` (primero el test)
  - `GREEN: [ID-HU] código mínimo para pasar el test`
  - `REFACTOR: [ID-HU] limpieza o refactorización sin cambiar comportamiento`
  - `CHORE: [tema] configuración, dependencias o pipeline`
- **Regla del doble loop outside-in**:
  1. Escribir el Acceptance Test (`.feature` + step definitions) -> Falla (`RED:`).
  2. Identificar la lógica de dominio requerida en `src/domain/`.
  3. Loop TDD interno: Unit Test falla (`RED:`), código mínimo pasa (`GREEN:`), refactor opcional (`REFACTOR:`).
  4. Conectar el dominio con la UI en `src/ui/`.
  5. El Acceptance Test pasa (`GREEN:`).
- **Higiene de rama principal**: No se pushea a `main` con tests en rojo ni con cobertura menor al 90%.

---

## 5. Registro de Ajustes y Lecciones Aprendidas (Feedback Docente)
- **Triangulación rigurosa y Fake It**:
  1. Primer test en `RED:` que expone la nueva necesidad.
  2. Paso a `GREEN:` con la solución mínima o hardcodeada (*Fake It*).
  3. Segundo test en `RED:` con un caso distinto que invalida la solución fake (triangulación real contradiciendo el fake con el caso opuesto).
  4. Paso a `GREEN:` generalizando la lógica de dominio.
  5. Opcional: `REFACTOR:` si requiere limpieza de diseño.
- **El RED debe fallar en el assert (Stubs iniciales obligatorios)**:
  - El test en fase RED debe fallar específicamente en la aserción (`AssertionError` en el `expect`), y no por error de compilación o runtime (`TypeError: ... is not a function`).
  - Cuando un test invoque un método nuevo que aún no existe, se debe incluir en el **mismo commit del RED** un *stub* en la clase de dominio con el comportamiento neutro o por defecto (ej. `return 6` para intentos restantes iniciales o `return false` para verificar victoria), forzando el fallo legítimo en el assert.
- **Higiene de Commits**:
  - Un test nuevo **nunca** se clasifica como `REFACTOR:`, sino siempre como `RED:`. Los refactors solo reorganizan código existente sin alterar pruebas ni comportamiento.
- **Flujo de Integración Continua (CI/CD) y Merge por PR**:
  - Toda HU terminada debe integrarse a `main` mediante un Pull Request con el pipeline de 6 etapas en verde.
  - Ninguna rama de feature debe alojar commits de la siguiente HU; el inicio de una nueva HU (commit `RED: [HU-XX]`) debe comenzar en una rama propia una vez integrada la anterior.
  - Cada merge en `main` dispara automáticamente la etapa de deploy a GitHub Pages, garantizando entrega continua en producción.
- **Cumplimiento total de rotación de integrantes**:
  - Tomás (5 REDs), Isabella (4 REDs), Luis (3 REDs) y Chiara (3 REDs en HU-05) cumplieron con la consigna de al menos 3 commits RED propios.
  - El equipo completó el 100% de la rotación requerida por la cátedra para la aprobación del TP.
