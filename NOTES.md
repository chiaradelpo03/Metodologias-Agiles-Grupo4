# NOTES.md — Trazabilidad y Registro de Decisiones

Este documento registra la trazabilidad entre **Historias de Usuario**, **Criterios de Aceptación**, **Acceptance Tests (ATDD)** y **Unit Tests (TDD)** del dominio, cumpliendo con los requisitos de la consigna (§3.3.1 y §5).

---

## 1. Integrantes del Equipo y Rotación
*Nota: Cada integrante debe comenzar al menos 3 tests (al menos 3 commits `RED:` propios).*

| Integrante | GitHub Username | Email en Git | Commits RED iniciados |
|------------|-----------------|--------------|-----------------------|
| Tomás Gigli | tomiingm | tomasgigli@yahoo.com.ar | 2 (completados con GREEN) |
| Isabella Andriollo | isabellaand | isabellaandriollo30@gmail.com | 3 (HU-02, completados con GREEN) |
| Luis Sosa | lusosa280 | luis.ant.sosa@gmail.com | 3 (HU-03, completados con GREEN) |
| Chiara Del Po | chiaradelpo03 | chiaradelpo@gmail.com | 0 |

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
| **HU-04** | Ganar / Perder partida | `features/HU-04_fin_de_partida.feature` | *Por definir* | *Por definir* | Pendiente |

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
  3. Segundo test en `RED:` con un caso distinto que invalida la solución fake (triangulación real).
  4. Paso a `GREEN:` generalizando la lógica de dominio.
  5. Opcional: `REFACTOR:` si requiere limpieza de diseño.
- **Higiene de Commits**:
  - Un test nuevo **nunca** se clasifica como `REFACTOR:`, sino siempre como `RED:`. Los refactors solo reorganizan código existente sin alterar pruebas ni comportamiento.

