# 📋 Tarea 3 — [Transversal] CI con GitHub Actions + diagrama de arquitectura

**Capa:** ninguna (transversal) · **Dificultad:** baja · **Estado:** pendiente

## Objetivo

Preparar la integración continua y el material de defensa del proyecto.

## Checklist

- [ ] Crear `.github/workflows/ci.yml` que en cada push y pull request ejecute: `pnpm install` → `pnpm build` → `pnpm test` → `pnpm run test:e2e` (Node 22 + pnpm)
- [ ] Agregar el badge del estado del CI al `README.md`
- [ ] Crear un diagrama de la arquitectura (capas concéntricas + secuencia de emisión/verificación) como imagen en `docs/` y referenciarlo desde el `README.md` — los diagramas Mermaid del [documento de diseño](../Analisis-y-Diseno-CertiChain.md) sirven de base
- [ ] Preparar el guion de defensa: por qué este caso amerita Onion (secciones 1.1 y 5.1 del documento de diseño)

## Nota para la integración

Cuando las Tareas 1 y 2 abran sus Pull Requests, el CI de esta tarea será quien confirme automáticamente que nada se rompió. El único archivo donde ambas ramas pueden chocar es `src/app.module.ts` (composition root) — conflicto esperado y fácil de resolver.
