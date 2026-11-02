#!/usr/bin/env bash
# Builds the site and uploads it to the VPS as a new release, then switches
# the "current" symlink to it. Old releases are kept for instant rollback.
#
#   DEPLOY_HOST=user@1.2.3.4 ./scripts/deploy.sh
#
# Optional: DEPLOY_PATH (default /var/www/mustafacanpalaz.com), KEEP_RELEASES (default 5).
# Nginx should serve $DEPLOY_PATH/current for "/" and keep its existing
# locations for /cmd/, /tdr/ and /isItWetAPI/ (see README.md).
set -euo pipefail

: "${DEPLOY_HOST:?Set DEPLOY_HOST, for example user@1.2.3.4}"
DEPLOY_PATH="${DEPLOY_PATH:-/var/www/mustafacanpalaz.com}"
KEEP_RELEASES="${KEEP_RELEASES:-5}"
RELEASE="$(date +%Y%m%d%H%M%S)"

cd "$(dirname "$0")/.."
npm run build

tar -C dist -czf - . |
  ssh "$DEPLOY_HOST" "set -e
    mkdir -p '$DEPLOY_PATH/releases/$RELEASE'
    tar -xzf - -C '$DEPLOY_PATH/releases/$RELEASE'
    ln -sfn '$DEPLOY_PATH/releases/$RELEASE' '$DEPLOY_PATH/current.tmp'
    mv -T '$DEPLOY_PATH/current.tmp' '$DEPLOY_PATH/current'
    cd '$DEPLOY_PATH/releases' && ls -1 | sort | head -n -$KEEP_RELEASES | xargs -r rm -rf"

echo "Deployed release $RELEASE to $DEPLOY_HOST:$DEPLOY_PATH/current"
