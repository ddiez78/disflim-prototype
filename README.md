# Disflim — prototipo de captación

Landing de una sola página, en español, pensada primero para móvil (~375 px). Vanilla HTML, CSS y JS. Sin npm ni build. Copy cerrada.

## Cómo abrirla

1. Entra en la carpeta del prototipo:

   ```bash
   cd /workspace/disflim-prototype
   ```

2. Abre `index.html` en el navegador. Opciones:

   - Doble clic en el archivo, o
   - Desde la terminal:

     ```bash
     # macOS
     open index.html

     # Linux
     xdg-open index.html
     ```

   - O sirve la carpeta con cualquier servidor estático, por ejemplo:

     ```bash
     python3 -m http.server 8080
     ```

     y visita `http://localhost:8080`.

No hace falta instalar dependencias. Manrope se carga desde Google Fonts; si no hay red, el sistema usará una fuente de respaldo.

## Qué incluye

- Cabecera fija: marca, WhatsApp y menú (Soluciones, Pack, Propuesta).
- Hero, dolor, tres puertas, pack web + voz.
- Formulario `#contacto` (solo front: éxito o error).
- Prueba social, FAQ y pie.

WhatsApp usa el marcador `https://wa.me/34678610527`. Email de pie: `hola@disflim.com`.
