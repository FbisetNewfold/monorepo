# @repo/django

Basic [Django](https://www.djangoproject.com/) app in the [monorepo](../../README.md).

## Prerequisites

- Python 3.11+ (3.13 tested)

## Install

```bash
cd apps/django
python3 -m venv .venv
source .venv/bin/activate
pip install -r requirements.txt
python manage.py migrate
```

## Scripts

| Command | Description |
| --- | --- |
| `python manage.py runserver 8000` | Dev server at http://127.0.0.1:8000/ |
| `python manage.py check` | Django system checks |

With npm (from monorepo root, after `npm install`):

```bash
npm start -w @repo/django
npm run build -w @repo/django
```

## License

MIT — see [LICENSE](./LICENSE).
