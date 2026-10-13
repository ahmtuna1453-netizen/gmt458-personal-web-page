# GMT 458 – Web GIS Assignment 1: Personal Web Page

A responsive personal portfolio website for Tuna Türker, a fourth-year Geomatics Engineering student at Hacettepe University. Built with HTML, CSS, JavaScript, OpenLayers, and Leaflet.

## Pages
- `index.html` — home page and introduction
- `about.html` — profile, tools, and a table with visual symbols
- `projects.html` — OpenLayers and Leaflet interactive maps
- `style.css` — shared responsive styles and CSS animations
- `maps.js` — map setup, marker zoom threshold, and world-repeat settings

## Run locally
Open `index.html` in a browser. The interactive maps are on `projects.html`. An internet connection is required because the map libraries, fonts, and OpenStreetMap tiles are loaded from external CDNs/services.

For a local development server, you can use the VS Code Live Server extension.

## Assignment features
- Three separate HTML pages with navigation
- CSS animation (floating map pins and profile icon entrance)
- Table of technologies with visual symbols
- OpenLayers map
- Leaflet map
- Sample markers appear at zoom level 11 and above
- OpenLayers tile source uses `wrapX: false` and its view uses `multiWorld: false`
- Leaflet tile layer uses `noWrap: true` and geographic bounds
- Git and GitHub Pages publishing steps must be completed by the student

## Before submitting
1. Review the personal introduction and make sure every detail is accurate.
2. Test both maps and every navigation link.
3. Publish using GitHub Pages and add the public URL here.
4. The assignment asks for at least three Git commits on different days. This requirement has not been completed; do not create misleading or backdated commits.
5. Keep a brief record of your actual AI use and update the section below honestly.

## AI use record (complete honestly)
- Specific issue learned/resolved with AI: I learned how a map zoom-level threshold can be used to hide markers when zoomed out and show them when zoomed in, and how tile-layer settings can help prevent the world from repeating.
- Estimated total AI usage: This website was created with substantial AI assistance. Enter a realistic estimate of the time spent using AI before submitting.
