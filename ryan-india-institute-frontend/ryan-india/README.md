# Ryan India Institute website (frontend)
- `npm install` then `npm run dev` to run locally, `npm run build` to build.
- Edit **src/data.js** to change contact details, destinations, universities and courses.
- Deploy: push to `main`, then in GitHub go to Settings > Pages > Source: GitHub Actions.
- Custom domain: add a file `public/CNAME` containing only your domain, and set the domain in Settings > Pages.
- Login is UI only (`src/pages/Login.jsx`). Connect it to the backend later and add protected routes in `src/App.jsx`.
