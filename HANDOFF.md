# SkipTheWait NZ — Launch Handoff

See `/Users/agent/skipthewait-au/HANDOFF.md` for the full handoff (covers both AU + NZ).

NZ-specific quick reference:
- Live: https://skipthewait-nz.vercel.app
- Repo: https://github.com/testbotdon-beep/skipthewait-nz
- Admin: https://skipthewait-nz.vercel.app/admin · password `skipthewait-nz-2026`
- Local dev: `npm run dev` → http://localhost:3008
- Currency: NZD, A$29 → NZ$29
- 18 seed providers in `data/nz-paediatricians.json`
- Redis prefix: `skipthewait:nz:` (separate namespace from AU)

The NZ app is the AU app with: data file swap, currency swap, region list swap, copy localised for Aotearoa context, Privacy Act 2020 + Consumer Guarantees Act references.
