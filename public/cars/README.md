# Car images

Only commit real image files (`.jpg`, `.png`, `.webp`). Do not save HTML error pages from manufacturer URLs — they can contain third-party API keys and will trigger GitHub secret scanning.

Most cards use CDN renders via `src/utils/carImage.js` (imagin.studio, `customer=carwow` — no center watermark; small plate logo only). Paint and trim come from `src/data/imagePaint.js` and `src/data/imageConfig.js`. Optional local overrides are listed in `CarImage.jsx`.
