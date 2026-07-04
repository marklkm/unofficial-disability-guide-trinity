# The Unofficial Disability Guide to Trinity College Dublin

Static GitHub Pages version of the Unofficial Disability Guide.

## Files

- `index.html` — page content and structure
- `assets/css/styles.css` — main visual design
- `assets/css/bootstrap-print.min.css` — project print stylesheet
- `assets/js/scripts.js` — small project JavaScript file

## Bootstrap

This project currently uses Bootstrap 5.3.8 from the jsDelivr CDN in `index.html`.

Bootstrap 5.3 does not include a separate `bootstrap-print.min.css` file. The file included here is a project-specific print stylesheet using that name because it is useful for print/PDF output.

If you need Bootstrap stored locally instead of using the CDN, download the compiled Bootstrap distribution and place the relevant files here:

- `assets/vendor/bootstrap/css/bootstrap.min.css`
- `assets/vendor/bootstrap/js/bootstrap.bundle.min.js`

Then update the links in `index.html`.

## GitHub Pages setup

1. Create a new GitHub repository.
2. Upload the files in this folder to the root of the repository.
3. Go to **Settings > Pages**.
4. Under **Build and deployment**, choose **Deploy from a branch**.
5. Select the `main` branch and the root folder `/`.
6. Save. GitHub Pages will publish the site after the workflow finishes.

## Accessibility notes

This layout includes:

- skip-to-main-content link
- semantic landmarks and headings
- high-contrast focus styles
- responsive layout
- reduced-motion support
- print stylesheet
- simple GOV.UK-style visual design
