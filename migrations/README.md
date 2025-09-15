This folder contains SQL/JS migrations for your Postgres database.

We recommend using node-pg-migrate. Example scripts are available in package.json:

  - npm run migrate:create  # create a new migration
  - npm run migrate:up      # apply migrations
  - npm run migrate:down    # rollback last migration

Migrations are stored in this folder and should be committed to git.
