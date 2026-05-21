# EV Car Comparison BC Canada 🚗⚡

A filterable, side-by-side EV comparison tool for BC Canada shoppers. All pricing in CAD with real confirmed monthly payments from manufacturer build tools.

## Assumptions
- $5,000 down payment
- $8,000 trade-in value
- 60 month loan term
- BC taxes included

## Features
- Filter by make, drivetrain, sunroof, federal rebate eligibility
- Sort by monthly payment, range, MSRP, or APR
- Side-by-side compare up to 4 cars
- Finance calculator with 3/4/5/6/7 year terms
- Expert + owner review summaries per car
- All data in `src/data/cars.js` — easy to update

## Stack
- React + Vite
- Tailwind CSS v3
- Deployed on Vercel

## Adding a new car
Edit `src/data/cars.js` and add an entry following the existing schema. Run `vercel --prod` to redeploy.

## Local dev
```bash
npm install
npm run dev
```

## Deploy
```bash
vercel --prod
```
