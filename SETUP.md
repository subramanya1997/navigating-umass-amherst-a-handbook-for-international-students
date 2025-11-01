# Setup Instructions for "Navigating UMass Amherst: A Handbook for International Students"

This project is powered by Honkit, a fork of GitBook, and automatically deploys to GitHub Pages using GitHub Actions.

## Prerequisites

You need to have the following installed on your machine:

- [Node.js](https://nodejs.org/en/download/)
- [npm](https://www.npmjs.com/get-npm) (comes with Node.js)

## Steps

### Cloning the repository and setting up the project

1. Clone the repository:
```bash
git clone https://github.com/subramanya1997/navigating-umass-amherst-a-handbook-for-international-students
```

2. Navigate to the project directory:
```bash
cd navigating-umass-amherst-a-handbook-for-international-students
```

3. Install the dependencies:
```bash
npm install
```

### Running the project locally

1. Start the development server:
```bash
npm run serve
```

The book should now be available at `http://localhost:4000`. Any changes you make to the Markdown files will be automatically reflected in the browser.

### Contributing changes

1. Make your changes to the Markdown files in the repository

2. Commit your changes:
```bash
git add .
git commit -m "Your commit message"
```

3. Push the changes:
```bash
git push
```

4. Submit a pull request on GitHub

**That's it!** 🎉 GitHub Actions will automatically:
- Build the Honkit project
- Inject Google Analytics and LinkedIn tracking
- Deploy to GitHub Pages

No need to manually build or run scripts - everything is automated!

### Manual build (optional)

If you want to build and test the final output locally:

```bash
npm run build
node scripts/inject-tags.js
```

The built files will be in the `_book` directory.

## Deployment

The project automatically deploys to GitHub Pages when changes are pushed to the `master` branch. The deployment is handled by GitHub Actions (see `.github/workflows/deploy.yml`).
