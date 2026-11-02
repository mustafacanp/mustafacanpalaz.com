# mustafacanpalaz.com

Personal website built with [Arwes](https://arwes.dev) (`@arwes/react` 1.0.0-next), React 18 and Vite.

## Development

```bash
npm install
npm run dev       # http://localhost:5173
npm run build     # type-check + production build into dist/
npm run preview   # serve dist/ on http://localhost:4173
```

- All copy lives in `src/content.ts`.
- Add `?motion=off` to any URL to preview the reduced-motion version.
- UI sounds are synthesized by `node scripts/gen-sounds.mjs` into `public/sounds/`. Sound is off by
  default and toggled from the navigation bar.

## Deploy (VPS + nginx)

```bash
DEPLOY_HOST=user@server ./scripts/deploy.sh
```

Each deploy goes to `/var/www/mustafacanpalaz.com/releases/<timestamp>` and `current` is switched
atomically. Roll back by pointing `current` at an older release.

Nginx (the existing sub-projects keep their own locations):

```nginx
server {
    server_name mustafacanpalaz.com www.mustafacanpalaz.com;
    root /var/www/mustafacanpalaz.com/current;
    index index.html;

    # Existing apps stay where they are today.
    location /cmd/        { alias /path/to/old-site/cmd/; try_files $uri $uri/ /cmd/index.html; }
    location /tdr/        { alias /path/to/old-site/tdr/; }
    location /isItWetAPI/ { alias /path/to/old-site/isItWetAPI/; }  # or the existing PHP/proxy block

    location /assets/ {
        add_header Cache-Control "public, max-age=31536000, immutable";
    }

    location / {
        try_files $uri $uri/ =404;
    }
}
```

Arwes frames use `eval` internally, so a Content-Security-Policy header would need `'unsafe-eval'`
in `script-src`.
