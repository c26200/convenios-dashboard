# Convenios — Gestión institucional de convenios

Interfaz y sistema de diseño de una plataforma privada para administrar convenios
interinstitucionales en una institución educativa. El código de la aplicación pertenece al
cliente; este repositorio documenta el producto y sus decisiones de diseño.

![Panel de control](screenshots/02-dashboard.png)

## Contexto

Una institución educativa administra cientos de convenios con entidades externas: empresas,
alcaldías y universidades. El seguimiento vivía en hojas de cálculo separadas, sin una vista
consolidada de vencimientos y sin control sobre quién podía editar qué.

La plataforma reemplaza ese proceso con un panel único: carga masiva desde Excel, alertas de
vencimiento, analítica por facultad y tres niveles de acceso.

## Qué hace

- **Carga masiva desde Excel** — procesa, valida e inserta cada registro sin captura manual
- **Alertas de vencimiento** — KPIs de convenios vigentes, por vencer y vencidos, con aviso visual
- **Analítica** — distribución por facultad, estado y línea de tiempo
- **Tres niveles de acceso** — superadmin, supervisor y visitante, con permisos granulares
- **Exportación** — reportes en Excel, PDF y DOCX
- **Búsqueda y filtros** — texto completo y filtros por facultad, estado, entidad y sede

## Capturas

### Inicio de sesión

![Inicio de sesión](screenshots/01-login.png)

Layout dividido: identidad institucional a la izquierda, formulario minimal a la derecha.

### Panel de control

![Panel de control](screenshots/02-dashboard.png)

KPI principal, métricas secundarias, distribución por estado y listado de próximos
vencimientos.

### Gestión de convenios

![Gestión de convenios](screenshots/03-convenios.png)

Tabla con búsqueda, filtros múltiples, carga por arrastre y detalle de cada convenio.

### Analítica

![Analítica](screenshots/04-analitica.png)

Distribución por facultad y estado, y evolución temporal.

## Sistema de diseño

La interfaz sigue la línea de Kenya Hara y Muji: calma visual, vacío intencional, bordes en
lugar de sombras y un solo color de acción.

### Tokens

| Token | Valor |
|---|---|
| Fondo | `#FEFCF9` — blanco cálido |
| Texto | `#2D2A26` — carbón |
| Acento | `#C04A1A` — coral |
| Borde | `#E6E2DD` — piedra |
| Radio | `12px` |

### Tipografía

| Rol | Fuente |
|---|---|
| Títulos | Playfair Display |
| Texto | Inter |
| Datos | JetBrains Mono |

### Principios

- **Bordes sobre sombras** — jerarquía sin elevación artificial
- **Un acento, no cinco** — el coral es el único color de acción
- **Tipografía como identidad** — Playfair Display da carácter institucional sin logos
- **Vacío intencional** — la información importante respira
- **Sin decoración** — cada elemento se gana su lugar

## Stack

| Capa | Tecnología |
|---|---|
| Framework | Next.js 16 (App Router) |
| UI | React 19, Tailwind CSS v4, shadcn/ui |
| Datos | PostgreSQL 14, Prisma, Zod |
| Gráficos | Recharts |
| Despliegue | Cloudflare Tunnel + HTTPS |

## Alcance de este repositorio

Este repositorio es una vitrina, no la aplicación. Incluye capturas y documentación del
sistema de diseño; el código, el esquema de base de datos y las credenciales pertenecen al
cliente y no se publican.

No hay demo pública por confidencialidad del proyecto. Si necesitas una revisión del
producto terminado, escríbeme desde [mi perfil](https://github.com/c26200).
