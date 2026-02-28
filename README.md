# Generador de Horóscopo Diario Personalizado con IA

PWA que genera horóscopos personalizados según la fecha de nacimiento del usuario. MVP Fase 1 del plan de desarrollo.

## Características

- **Pantalla de bienvenida** con valor principal
- **Registro con fecha de nacimiento** (día, mes, año)
- **Cálculo automático del signo zodiacal**
- **Perfil astrológico** breve por signo
- **Horóscopo del día** personalizado (generado localmente, preparado para IA)
- **Historial** de últimos 7 días (gratuito)
- **Navegación**: Hoy, Historial, Educativo, Perfil
- **Diseño cósmico** con paleta inspirada en nebulosas (azul oscuro, púrpura, dorado)

## Inicio rápido

```bash
npm install
npm run dev
```

Abre [http://localhost:3000](http://localhost:3000) en el navegador.

## Estructura del proyecto

- `app/` - Páginas y layout Next.js
- `components/` - Componentes React
- `lib/` - Lógica de zodiaco, horóscopo y almacenamiento

## Próximos pasos (Fase 2+)

- Integración con API de OpenAI para horóscopos reales
- Efemérides para tránsitos planetarios
- Notificaciones push
- Suscripciones premium
- Carta astral
