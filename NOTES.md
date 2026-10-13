# NOTES.md — Trazabilidad y Registro de Decisiones

Este documento registra la trazabilidad entre **Historias de Usuario**, **Criterios de Aceptación**, **Acceptance Tests (ATDD)** y **Unit Tests (TDD)** del dominio, cumpliendo con los requisitos de la consigna (§3.3.1 y §5).

---

## 1. Integrantes del Equipo y Rotación
*Nota: Cada integrante debe comenzar al menos 3 tests (al menos 3 commits `RED:` propios).*

| Integrante | GitHub Username | Email en Git | Commits RED iniciados |
|------------|-----------------|--------------|-----------------------|
| Tomás Gigli | tomiingm | tomasgigli@yahoo.com.ar | 2 (completados con GREEN) |
| Integrante 2 | | | 0 |
| Integrante 3 | | | 0 |
| Integrante 4 | | | 0 |

---

## 2. Enlaces del Proyecto
- **Repositorio**: [GitHub Repository](https://github.com/chiaradelpo03/Metodologias-Agiles-Grupo4)
- **Tablero / Story Map**: *[Pegar aquí el link a GitHub Projects / Trello]*
- **Aplicación en Producción**: *[Pegar aquí la URL de producción]*
- **Dashboard de Calidad (SonarQube Cloud)**: *[Pegar aquí el link al proyecto en Sonar]*

---

## 3. Matriz de Trazabilidad: Historia -> AT -> Unit Tests

| ID Historia | Título / Criterio de Aceptación | Acceptance Test (Gherkin / Feature) | Unit Tests de Dominio (TDD) | Responsable (Autor RED) | Estado |
|-------------|---------------------------------|--------------------------------------|-----------------------------|--------------------------|--------|
| **HU-01** | Mostrar guiones según la palabra secreta | `features/HU-01_palabra_oculta.feature` | `src/domain/Ahorcado.test.ts` (enmascarado inicial) | Tomás Gigli (tomiingm) | Terminada (AT y UT verdes) |
| **HU-02** | Arriesgar letra acertada | `features/HU-02_arriesgar_letra_correcta.feature` | *Por definir* | *Por definir* | Pendiente |
| **HU-03** | Arriesgar letra errónea y descontar intentos | `features/HU-03_arriesgar_letra_incorrecta.feature` | *Por definir* | *Por definir* | Pendiente |
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
