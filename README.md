# Yong Liang Portfolio

Personal portfolio site for Yong Liang, built with Next.js, React, Tailwind CSS, and Framer Motion.

## Overview

This portfolio presents selected product, UX, visual storytelling, data visualization, and interactive technology projects. It includes:

- Home introduction
- Work gallery with interactive project cards
- Case study pages for selected projects
- Study page for Musashino Art University work
- About page with experience, education, certifications, skills, and languages
- Custom cursor interactions for selected links and project experiences

## Tech Stack

- Next.js 15
- React 19
- TypeScript
- Tailwind CSS
- Framer Motion

## Getting Started

Install dependencies:

```bash
npm install
```

Run the development server:

```bash
npm run dev
```

Open:

```text
http://localhost:3000
```

## Quality Checks

Run TypeScript and Next.js route type checks:

```bash
npm run typecheck
```

Build for production:

```bash
npm run build
```

## Project Structure

```text
app/                 Next.js app routes
components/          Shared UI components
lib/                 Project data
public/assets/       Static images and case study assets
```

## Deployment

The project is configured for GitHub Pages deployment from the `main` branch using GitHub Actions.

Production URL:

```text
https://yuzuleung.github.io/portfolio/
```

The workflow lives at:

```text
.github/workflows/deploy.yml
```

On every push to `main`, GitHub Actions runs:

```bash
GITHUB_PAGES=true npm run build
```

The generated static site in `out/` is uploaded to GitHub Pages.
