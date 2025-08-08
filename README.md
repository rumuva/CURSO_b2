
# Curso_B2 – Publicación en GitHub Pages

Este paquete está listo para subirlo a **GitHub Pages** como un sitio web estático.

## Pasos rápidos
1. Crea un repositorio en GitHub llamado, por ejemplo, `curso-b2`.
2. Sube **todo el contenido** de esta carpeta al repositorio (incluyendo `index.html`, `modulo1`, `modulo2` y `assets`).
3. Ve a **Settings → Pages** y selecciona:
   - Source: **Deploy from a branch**
   - Branch: **main** y carpeta **/(root)**
4. Guarda. La web estará disponible en unos segundos/minutos en la URL que te indica GitHub.

## Estructura
- `index.html` → Portada del curso con menú lateral.
- `modulo1/` → Introducción + Test diagnóstico con listening (incluye transcript para repaso).
- `modulo2/` → Gramática B2 con ejemplos, audios (TTS del navegador) y ejercicios.
- `assets/` → CSS, JS, imágenes, audios/vídeos (placeholders).

## Audios y vídeo
- La página integra **voz nativa británica** mediante el **Web Speech API** del navegador (no requiere MP3).
- Los botones **Play (en-GB)** leen en voz alta con un acento británico si el navegador lo soporta.
- Si quieres sustituir por MP3 propios, coloca los archivos en `assets/audio/` y cambia las etiquetas `<audio>` en las páginas.

## Exportar a PDF
Cada página incluye estilos de impresión. Pulsa **Ctrl/Cmd + P** y elige **Guardar como PDF**.

## Autor y branding
- Autor: **Rubén Muñoz**
- Paleta: azul/blanco profesional.
- Logotipo editable en `assets/img/logo.svg`.

---
Generado el 2025-08-08.
