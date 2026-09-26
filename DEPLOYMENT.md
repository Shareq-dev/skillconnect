# Deploy SkillConnect to Vercel

The capstone is a static HTML/CSS/JavaScript application. `vercel.json` explicitly selects **Other** (`framework: null`), runs `npm run build`, and publishes `dist/`. Only `index.html`, `styles.css`, and `app.js` are copied to that directory.

1. Push the contents of this folder to a GitHub repository. Keep `package-lock.json` and `vercel.json` in the same directory as `package.json`.
2. In [Vercel New Project](https://vercel.com/new), import the repository.
3. If this project is in a multi-project repository, set **Root Directory** to `TASK_06_Production_Capstone_Project`. If this folder itself is the repository root, leave Root Directory at `./`.
4. Select **Other** as the framework preset. Use build command `npm run build` and output directory `dist` (these are also specified in `vercel.json`).
5. Deploy. If a previous deployment detected Express, confirm the Vercel **Framework Preset** is **Other**, then redeploy the latest Git commit (without reusing the old build cache if needed).
6. Open the live URL and test registration, incorrect login, catalog View all, shortlist, booking request, and service CRUD. Refresh and check that this browser retains its demo state.

Run `npm run build` locally to inspect the exact published output. No server, database, payment provider, or secret keys are deployed. The app's data persists only in the visitor's browser.

## Mentor submission

```text
GitHub repository: https://github.com/Shareq-dev/<repository-name>
Live deployment: https://<your-vercel-project>.vercel.app
```

Replace placeholders with the actual URLs after the deployment has succeeded.
