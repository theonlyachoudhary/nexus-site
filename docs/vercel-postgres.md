Vercel Postgres setup for this project

Environment variables (set these in Vercel project settings):

- POSTGRES_URL (recommended) or DATABASE_URL: postgres://user:pass@host:5432/dbname
- PAYLOAD_SECRET: long random secret for Payload
- DB_MAX_POOL: optional (default: 10)
- DB_IDLE_TIMEOUT: optional (ms, default: 30000)
- DB_SSL: optional (true/false, default: true)
- PAYLOAD_MIGRATIONS_DIR: optional (default: migrations)
- PAYLOAD_MIGRATIONS_TABLE: optional (default: payload_migrations)
- SERVER_URL: optional, e.g. https://your-site.vercel.app

In Vercel:
1) Go to Project → Settings → Environment Variables.
2) Add `POSTGRES_URL` (set to the Vercel Postgres connection string) for Production and Preview.
3) Add `PAYLOAD_SECRET` and other envs.

Migrations:
- Use the npm scripts `npm run migrate:create` and `npm run migrate:up` (or configure CI step).
- Migrations folder is `./migrations` by default and should be committed to git.

Notes:
- Do not commit secrets to git.
- If you have existing sqlite data, you will need to migrate it to Postgres separately.
