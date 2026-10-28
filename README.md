# Content branching Bug Bash

This is a smoke test, not exhaustive edge-case coverage.

## Before the session

Complete setup before the session:

- `git clone git@github.com:payloadcms/test-content-branching.git` - clones this repo
- `cd test-content-branching`
- `pnpm install`
- Run `pnpm dev` and keep the server running throughout the session. Development
  runs queued jobs every minute. A deployed session needs its own jobs runner;
  the development runner is disabled outside development.
- Open `/admin`
- Create a new user account
- Click **_Seed your database_**

Thank you for testing and reporting on any findings!
