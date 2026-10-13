# Ahorcado Web — Metodologías Ágiles (Grupo 4)

Aplicación web del juego del Ahorcado construida siguiendo las prácticas técnicas de desarrollo ágil: **TDD** para el dominio, **ATDD** (Outside-In) con Gherkin/Cucumber para el comportamiento de la UI, y pipeline de **CI/CD** continuo.

---

## 👥 Integrantes del Grupo
- Integrante 1 (GitHub: `@...`)
- Integrante 2 (GitHub: `@...`)
- Integrante 3 (GitHub: `@...`)
- Integrante 4 (GitHub: `@...`)

---

## 🔗 Enlaces Importantes
- **Producción (Deploy continuo)**: *[URL pública de la app]*
- **Tablero / Story Map**: *[Link a GitHub Projects o tablero del grupo]*
- **Última corrida de CI/CD**: [GitHub Actions](../../actions)
- **Análisis de Calidad (SonarQube Cloud)**: *[Link al dashboard público]*

---

## 🛠️ Stack Tecnológico
- **Lenguaje**: TypeScript
- **Bundler / Dev Server**: Vite
- **Unit Testing & TDD**: Vitest (con cobertura `@vitest/coverage-v8`, umbral mínimo del 90% en dominio)
- **Acceptance Testing & ATDD**: Playwright + `playwright-bdd` (Cucumber / Gherkin)
- **CI/CD**: GitHub Actions

---

## 🚀 Comandos del Proyecto

### Instalación de dependencias
```bash
npm install
```

### Ejecutar en modo desarrollo
```bash
npm run dev
```

### Ejecutar Unit Tests (TDD - Dominio)
```bash
npm run test:unit
```

### Medir Cobertura del Dominio (debe ser ≥ 90%)
```bash
npm run test:coverage
```

### Ejecutar Acceptance Tests (ATDD - E2E)
```bash
npm run test:at
```

### Compilar para producción
```bash
npm run build
```

---

## 📋 Proceso y Metodología
Ver [NOTES.md](./NOTES.md) para la matriz completa de trazabilidad entre Historias de Usuario, Acceptance Tests y Unit Tests, así como el registro de rotación de autores.
