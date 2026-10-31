#!/usr/bin/env bash
# Pasa la beta a la versión principal: copia beta/ a la raíz ajustando las rutas.
# Uso: bash scripts/promover-beta.sh  (luego commit + push)
set -euo pipefail
cd "$(dirname "$0")/.."
sed -e 's#\.\./vendor/#vendor/#g' -e 's#\.\./icons/#icons/#g' beta/index.html > index.html
sed -e 's#\.\./icons/#icons/#g' -e 's/Viole IPTV β/Viole IPTV/' -e 's/"Viole β"/"Viole"/' \
    -e 's/Versión de prueba de Viole IPTV./Reproductor IPTV personal con listas M3U, favoritos y memoria./' \
    beta/manifest.webmanifest > manifest.webmanifest
echo "Beta promovida. Revisa con git diff y publica."
