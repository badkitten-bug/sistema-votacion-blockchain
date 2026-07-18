# 📋 Tarea 2 — [Presentation] Validación de requests + documentación Swagger

**Capa:** `src/presentation/` · **Dificultad:** media-baja · **Estado:** pendiente

## Objetivo

Endurecer la capa más externa: validar los datos que llegan por HTTP **antes** de que toquen los casos de uso, y publicar la documentación interactiva de la API con Swagger.

## Contexto de arquitectura (leer antes de empezar)

Esta tarea vive 100% en `src/presentation/` (más `src/main.ts`) — **no se toca `src/domain/` ni `src/application/`**. La validación HTTP (campos requeridos, formatos) es responsabilidad de la capa externa; las reglas de negocio (RN-01..RN-10 del documento de diseño) ya viven en el dominio y no se duplican aquí.

Archivos de partida:

- [`src/presentation/dtos/requests.dto.ts`](../../src/presentation/dtos/requests.dto.ts) → DTOs a decorar con class-validator
- [`src/presentation/controllers/institutions.controller.ts`](../../src/presentation/controllers/institutions.controller.ts)
- [`src/presentation/controllers/certificates.controller.ts`](../../src/presentation/controllers/certificates.controller.ts)
- [`src/presentation/controllers/blockchain.controller.ts`](../../src/presentation/controllers/blockchain.controller.ts)

## Checklist

- [ ] `pnpm add class-validator class-transformer @nestjs/swagger`
- [ ] Decorar los DTOs de `requests.dto.ts` (`@IsString`, `@IsNotEmpty`, `@Length`, `@IsUUID`, etc.)
- [ ] Activar `app.useGlobalPipes(new ValidationPipe({ whitelist: true }))` en `src/main.ts`
- [ ] Configurar Swagger en `src/main.ts` → UI disponible en `/api`
- [ ] Decorar controladores con `@ApiOperation` / `@ApiResponse` para que la documentación explique cada endpoint
- [ ] Crear `docs/requests.http` con ejemplos de todos los endpoints (flujo completo: registrar institución → emitir → verificar → revocar → verificar de nuevo → auditar) para la demo en vivo
- [ ] Agregar una prueba e2e: request con body inválido responde `400`
- [ ] Verificar que `pnpm test` y `pnpm run test:e2e` siguen pasando

## Criterio de aceptación

- `POST /certificates` con body vacío responde `400` (validación HTTP), no `500`.
- La UI de Swagger en `http://localhost:3000/api` documenta los 8 endpoints.
- Las reglas de negocio siguen respondiendo sus códigos actuales (`404`, `403`, `409`, `422`) — no duplicar reglas de negocio en la validación.

## Flujo de trabajo

```bash
git checkout -b feature/presentation-validacion-swagger
# ... trabajar ...
git push -u origin feature/presentation-validacion-swagger
# abrir Pull Request hacia main
```
