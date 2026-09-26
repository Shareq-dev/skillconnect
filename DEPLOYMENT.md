# Deploying SkillConnect

SkillConnect is the static capstone demo I deploy on Vercel. The build copies `index.html`, `styles.css`, and `app.js` into `dist/`; those are the only files Vercel serves. The demo account, shortlist, bookings, and service listings live in the visitor's browser, so there is no API or database to configure for this deployment.

## Before deploying

From the project folder, check that the static build works:

```bash
npm install
npm run build
```

The `dist/` folder should contain only `index.html`, `styles.css`, and `app.js`. It is generated during the build and is ignored by Git. Commit the source files, `package.json`, `package-lock.json`, and `vercel.json` instead.

## Vercel setup

1. Push this project to a repository on GitHub, then import that repository from [Vercel's New Project page](https://vercel.com/new).
2. Check **Root Directory** before deploying. Use `TASK_06_Production_Capstone_Project` when the repository contains multiple task folders; use `./` when this project is the repository root.
3. Set **Framework Preset** to **Other**. The project settings are also recorded in `vercel.json`: build command `npm run build`, output directory `dist`.
4. Deploy and open the URL Vercel provides.

An earlier version of this project included an Express scaffold. If Vercel reports `No entrypoint found which imports express`, it is building an older commit or still using the old framework preset. Confirm the latest commit is selected, the Root Directory points to this folder, and the preset is **Other**. Then redeploy without the existing build cache.

## Check the live site

I use this quick pass before sharing the link:

- Open the homepage on desktop and mobile. Search, filter by category, and expand the catalog with **View all**.
- Create a demo account, log out, and confirm an incorrect password is rejected before logging in again.
- Save someone to **My studio → Shortlist**, then remove them.
- Submit a booking request and check it under **Bookings**.
- Create, edit, and delete a listing under **My services**. Refresh the page and confirm saved data persists in that browser.

The demo does not share accounts or data between devices. It does not process payments, and the reference database schema in the repository is not connected to the Vercel site.

## Mentor submission

Once the deployment passes the checks above, submit the actual links:

```text
GitHub repository: https://github.com/Shareq-dev/skillconnect
Live site: https://<vercel-project-name>.vercel.app
```
