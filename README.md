<picture>
  <source media="(prefers-color-scheme: dark)" srcset="screenshots/02-dashboard.png">
  <img src="screenshots/02-dashboard.png" alt="Convenios Dashboard" width="100%">
</picture>

# Convenios — Gestión Institucional

Sistema de gestión, seguimiento y analítica de convenios interinstitucionales. Diseñado para instituciones educativas que administran cientos de acuerdos con entidades externas.

---

## Características

- **Carga masiva Excel** — Subí archivos `.xlsx` y el sistema procesa, valida e inserta cada registro automáticamente
- **Alertas de vencimiento** — Dashboard con KPIs de convenios vigentes, por vencer y vencidos. Alertas visuales automáticas
- **Analíticas en tiempo real** — Distribución por facultad, estado, y línea de tiempo. Gráficos interactivos
- **3 niveles de acceso** — Superadmin, Supervisor y Visitor con permisos granulares
- **Exportación** — Descarga de reportes en Excel, PDF y DOCX
- **Búsqueda y filtros** — Búsqueda full-text, filtros por facultad, estado, entidad y sede

---

## Diseño

El sistema sigue una filosofía de diseño **Kenya Hara** (Muji): calma visual, vacío intencional, calidez táctil. La información respira.

### Design Tokens

| Token | Valor |
|-------|-------|
| Background | `#FEFCF9` — blanco cálido |
| Foreground | `#2D2A26` — carbón |
| Primary | `#C04A1A` — coral |
| Border | `#E6E2DD` — stone |
| Radius | `12px` — suave, orgánico |

### Tipografía

| Rol | Fuente |
|-----|--------|
| Display | **Playfair Display** — serif, autoridad |
| Body | **Inter** — limpia, legible |
| Data | **JetBrains Mono** — precisión numérica |

---

## Pantallas

### Login
<img src="screenshots/01-login.png" alt="Login" width="100%">

*Split layout institucional. Panel izquierdo con identidad de marca y features. Formulario derecho minimal sin ruido visual.*

### Panel de Control
<img src="screenshots/02-dashboard.png" alt="Dashboard" width="100%">

*Hero KPI con número total. Stats secundarios sin saturación cromática. Gráficos de distribución por estado y facultad. Lista de próximos vencimientos con acceso rápido al detalle.*

### Gestión de Convenios
<img src="screenshots/03-convenios.png" alt="Convenios" width="100%">

*Vista completa con búsqueda, filtros múltiples, carga de Excel drag & drop, y cards de convenios con información clave. Sidebar minimal con navegación tipográfica.*

### Analítica
<img src="screenshots/04-analitica.png" alt="Analítica" width="100%">

*Dashboard de datos con distribución por facultad, estado, y evolución temporal. Paleta cromática natural derivada de los design tokens.*

---

## Stack

| Capa | Tecnología |
|------|-----------|
| Framework | Next.js 16 (App Router) |
| UI | React 19 + Tailwind CSS v4 + shadcn/ui |
| Base de datos | PostgreSQL 14 + Prisma |
| Tipografía | Playfair Display + Inter + JetBrains Mono |
| Gráficos | Recharts |
| Validación | Zod |
| Despliegue | Cloudflare Tunnel + HTTPS |

---

## Principios de diseño

- **Bordes sobre sombras** — Definición visual sin elevación artificial
- **Un acento, no cinco** — Coral `#C04A1A` como único color de acción
- **Tipografía como identidad** — Playfair Display da carácter institucional sin logos
- **Vacío intencional** — La información importante tiene espacio para respirar
- **Sin decoración** — Cada elemento gana su lugar. Cero iconos de relleno

---

## Licencia

MIT
