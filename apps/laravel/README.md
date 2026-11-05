# @repo/laravel

Basic [Laravel](https://laravel.com/) app in the [monorepo](../../README.md).

## Prerequisites

- PHP 8.2+ and [Composer](https://getcomposer.org/)

## Install

```bash
cd apps/laravel
composer install
cp .env.example .env   # skip if .env already exists
php artisan key:generate
touch database/database.sqlite
php artisan migrate
```

## Scripts

| Command | Description |
| --- | --- |
| `php artisan serve --port=8001` | Dev server at http://127.0.0.1:8001/ |
| `php artisan about` | App environment summary |

With npm (from monorepo root, after `npm install`):

```bash
npm start -w @repo/laravel
npm run build -w @repo/laravel
```

## License

MIT — see [LICENSE](./LICENSE).
