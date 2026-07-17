# archsentry-demo

A throwaway target repo for ArchSentry (https://github.com/comerade2134/archsentry).

src/checkout.service.ts deliberately breaks two rules in archsentry.yml:

- no-direct-sql: it calls db.query("INSERT INTO ...") from a service instead of the repository layer.
- no-hardcoded-secret: it embeds a sk- secret in source.

## See it work

1. Install ArchSentry (https://github.com/comerade2134/archsentry) on this repo.
2. Open a PR that touches src/checkout.service.ts.
3. ArchSentry posts a comment listing the violations, and removes it once you fix them.

Detection is deterministic and free; the explanation is filled in by a free LLM tier when configured.