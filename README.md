# Viole IPTV 🐾

Reproductor IPTV personal (listas M3U / M3U8) para Windows, Omarchy y Xiaomi Pad 6.
Funciona en el navegador y se puede instalar como app.

## Qué recuerda (en cada dispositivo)
- Listas M3U (IndexedDB) y si están activas o no
- Favoritos, últimos 30 canales vistos y último canal (se retoma al abrir)
- Skin, volumen, categoría, pestaña, panel abierto o cerrado, Viole on/off

Para pasar todo entre dispositivos: Ajustes → Exportar / Importar (.json).

## Archivos
| Archivo | Para qué |
|---|---|
| `index.html` | La app completa (HTML + CSS + JS) |
| `vendor/hls-1.7.4.min.js` | Motor de vídeo HLS, versión fija (licencia en `vendor/`) |
| `manifest.webmanifest` + `icons/` | Permiten instalarla como app |

## Atajos (teclado)
`↑ / ↓` cambiar canal · `F` pantalla completa · `M` silencio · `R` reconectar · `S` favorito · `/` buscar

## Límites conocidos (del navegador, no de la app)
- Canales `http://` no se reproducen en una web `https://`. Usa "Copiar enlace" → VLC / mpv.
- Algunos servidores bloquean la reproducción desde navegadores (CORS). Mismo remedio.
- Formatos como HEVC o audio AC3 pueden no sonar o no verse en Chrome.
