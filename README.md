# SkillConnect

A responsive freelancer discovery and booking capstone. Browse a fictional catalog of 104 talent profiles, shortlist people, request services, and manage your own service listings. The interface is built with HTML, CSS, and vanilla JavaScript and is deployed as a **static Vercel site**.

## Features

- Four featured cards on the homepage, with **View all** revealing the full catalog.
- Search, category filtering, sorting, and saved shortlist.
- Demo registration and login, session persistence, duplicate-account and invalid-password checks.
- Add, view, edit, and delete service listings; submit and view booking requests.
- Responsive layouts, labeled forms, dialog controls, feedback, and empty states.

Demo profiles are fictional. Authentication, bookings, shortlist, and service CRUD use this browser's `localStorage`. Credentials and data are **not shared between devices**. This is an authentication simulation, not a secure production identity system; do not use a real password.

## Architecture

```text
Browser
  ├── index.html + styles.css + app.js (Vercel static assets)
  ├── Fictional seeded catalog in app.js
  └── localStorage (demo accounts, session, bookings, shortlist, user services)

npm run build → dist/ (only the three public assets above)
```

`database/schema.sql` is a reference PostgreSQL schema for a future server-backed implementation. The deployed app does not use it, and no backend API, payments, or third-party services are active.

## Project structure

```text
index.html          Page and dialogs
styles.css          Responsive visual design
app.js              Catalog and demo workflows
build.mjs           Copies only public assets to dist/
dev.mjs             Dependency-free local static preview
database/schema.sql Optional reference schema
package.json        Build and preview commands
vercel.json         Static deployment settings and headers
DEPLOYMENT.md       Vercel and submission guide
```

## Run locally

Requires Node.js 18 or later.

```bash
npm install
npm run dev
```

Open `http://localhost:3000`. `npm run dev` builds the static client and serves the exact assets that Vercel publishes. To inspect the deployment output without starting a server, run `npm run build`; the ignored `dist/` directory will contain only `index.html`, `styles.css`, and `app.js`.

## Test the capstone flow

1. Create a demo account, log out, then log in again with the registered credentials. Unknown emails and incorrect passwords must be rejected.
2. Search or filter the catalog, click **View all**, and save a person to **My studio → Shortlist**.
3. Book a service and find the request in **My studio → Bookings**.
4. Create, edit, and delete a listing in **My studio → My services**.
5. Refresh the page to confirm this browser retains its demo state.

## Deployment and submission

Follow [DEPLOYMENT.md](DEPLOYMENT.md) to import the GitHub repository into Vercel and verify the live URL. Submit both the GitHub repository URL and the Vercel URL to the mentor. No secret or server environment variables are needed for this static demo.

## Scope and next steps

Browser persistence is intended for a capstone simulation, not a multi-user marketplace. A production implementation would add an authenticated server, PostgreSQL persistence, authorization, verified payments, file storage, and server-side booking state transitions.
