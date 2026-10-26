# Alchemy Flip Solutions Restoration Ecosystem

A working Vite starter for Netlify with an optional Supabase intake connection.

## Run in Visual Studio Code
1. Open this folder.
2. Open Terminal > New Terminal.
3. Run `npm install`.
4. Copy `.env.example` to `.env.local` and add your Supabase URL and publishable key.
5. In Supabase SQL Editor, run `supabase/schema.sql`.
6. Run `npm run dev`.

## Deploy to Netlify
1. Push the folder to a Git repository or drag the folder into Netlify's project workflow.
2. Build command: `npm run build`.
3. Publish directory: `dist`.
4. Add `VITE_SUPABASE_URL` and `VITE_SUPABASE_PUBLISHABLE_KEY` under environment variables.
5. Deploy. Test `/api/health` after deployment.

## Important production work
- Replace broad authenticated read policy with staff roles before collecting sensitive data.
- Do not collect clinical, legal, emergency, or detailed trauma narratives in the public interest form.
- Add privacy policy, terms, consent language, accessibility testing, payment processor and trained professional review.
