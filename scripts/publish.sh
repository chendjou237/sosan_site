#!/usr/bin/env bash
#
# Publishes out/ to the orphan `deploy` branch, whose root IS the site root.
# Hostinger's hPanel Git integration clones that branch into public_html/ — it
# does not run npm, so the built files have to be what's in the branch.
#
# Run via `npm run deploy` (which builds first).
set -euo pipefail
cd "$(dirname "$0")/.."

if [ ! -f out/index.html ]; then
  echo "publish: out/index.html missing — run 'npm run build' first." >&2
  exit 1
fi

SHA="$(git rev-parse --short HEAD)"
SUBJECT="$(git log -1 --pretty=%s)"

cleanup() { git worktree remove .deploy --force 2>/dev/null || true; }
trap cleanup EXIT

cleanup
git fetch origin deploy 2>/dev/null || true

if git worktree add -B deploy .deploy origin/deploy 2>/dev/null; then
  :
else
  # First run: start a true orphan. Branching off HEAD instead would drag the
  # whole source history — and every blob ever committed — into the clone that
  # Hostinger pulls down into public_html/.
  git worktree add --detach -q .deploy
  git -C .deploy checkout -q --orphan deploy
  git -C .deploy rm -rq --cached . 2>/dev/null || true
fi

rsync -a --delete --exclude .git out/ .deploy/

git -C .deploy add -A
if git -C .deploy diff --cached --quiet; then
  echo "publish: no changes since last deploy."
else
  git -C .deploy commit -q -m "deploy: ${SHA} — ${SUBJECT}"
  git -C .deploy push -q -u origin deploy
  echo "publish: pushed build of ${SHA} to origin/deploy."
fi
