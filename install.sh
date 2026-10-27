#!/bin/zsh
# Создаёт профиль Firefox «Calm» и кладёт в него тему.
set -e
HERE="${0:A:h}"
FF="/Applications/Firefox.app/Contents/MacOS/firefox"
ROOT="$HOME/Library/Application Support/Firefox/Profiles"
DIR="$ROOT/calm.Calm"

if ! grep -q "Path=Profiles/calm.Calm" "$HOME/Library/Application Support/Firefox/profiles.ini" 2>/dev/null; then
  "$FF" -CreateProfile "Calm $DIR"
fi
mkdir -p "$DIR/chrome"
cp "$HERE/user.js" "$DIR/user.js"
cp "$HERE/chrome/"*.css "$DIR/chrome/"
echo "Готово: $DIR"
echo "Запуск: $FF -P Calm --no-remote"
