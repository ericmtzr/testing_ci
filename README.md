
# SISGEC – Base project (Django + React TS) with GitHub Actions

This scaffold matches the **Integradora 1** document: React (TypeScript) frontend and Django backend, plus CI pipelines for both.Features included:
- Django REST API with JWT auth, OpenAPI docs, and a minimal Patients CRUD.
- React TS app with a simple page that calls `/api/status/`.
- Two GitHub Actions: backend test+image build; frontend build+artifact.

## Quickstart

### Backend
```bash
cd backend
python -m venv .venv && source .venv/bin/activate   # Windows: .venv\Scripts\activate
pip install -r requirements.txt
cp example.env .env  # adjust secrets
python manage.py migrate
python manage.py runserver 0.0.0.0:8000
```
OpenAPI docs: http://localhost:8000/api/docs/

### Frontend
```bash
cd frontend
npm install
npm run dev
```
Open http://localhost:5173 and click Ping API.

## CI (GitHub Actions)
- `.github/workflows/ci-backend.yml` – installs deps, runs migrations & tests, builds a Docker image (no push).
- `.github/workflows/ci-frontend.yml` – installs Node deps, builds, and uploads `dist` as an artifact.

## Notes
- DB is SQLite for dev; swap to Postgres in `DATABASES` when needed.
- JWT endpoints: `/api/auth/token/`, `/api/auth/refresh/`.
- Patients CRUD: `/api/patients/` (auth required).
