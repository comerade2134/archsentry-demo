# archsentry-demo

A tiny sample repo that shows [ArchSentry](https://github.com/comerade2134/archsentry)
catching an architectural violation in seconds.

## See it right now — no install, no app

```bash
npx archsentry@latest scan --config archsentry.yml --path .
```

You'll get a report flagging `src/services/checkout.service.ts`:

- **no-direct-sql** — it calls `db.query("INSERT INTO ...")` from a service instead
  of the repository layer.
- **no-hardcoded-secret** — it embeds an `sk-` secret in source.

(When the Semgrep CLI is installed, the AST-aware `services-use-repositories` rule
also fires on the same file.)

## Get PR comments — zero infrastructure

This repo already has `.github/workflows/archsentry.yml`. Push a PR that touches
`src/services/checkout.service.ts` and ArchSentry posts the violations as a comment
— no GitHub App registration required. Self-host the App instead if you want
top-level PR comments on any repo.

## What's in here

- `src/db.ts` — a fake db with a `.query()` method.
- `src/repositories/user.repository.ts` — **compliant**: it's allowed to talk to the
  db directly (that's its job).
- `src/services/checkout.service.ts` — **VIOLATION**: talks to the db from a service
  and embeds a secret.
- `src/services/order.service.ts` — **compliant**: goes through the repository.
- `archsentry.yml` — the rules (including the Semgrep `services-use-repositories` rule).

Detection is deterministic and free; explanations use a free LLM tier when configured.
