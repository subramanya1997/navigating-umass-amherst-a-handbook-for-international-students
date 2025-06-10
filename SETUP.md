# Setup Instructions for "Navigating UMass Amherst: A Handbook for International Students"

This project is powered by Honkit, a fork of GitBook. Follow these steps to set up the project locally.

## Prerequisites

You need to have the following installed on your machine:

- [Node.js](https://nodejs.org/en/download/)
- [npm](https://www.npmjs.com/get-npm) (comes with Node.js)

## Steps

### Cloning the repository and setting up the project

1. Clone the repository:
```
git clone https://github.com/subramanya1997/navigating-umass-amherst-a-handbook-for-international-students
```

2. Navigate to the project directory:
```
cd navigating-umass-amherst-a-handbook-for-international-students
```

3. Install the dependencies:
```
npm install
```

### Running the project

1. Run the project:
```
npm run serve
```

The book should now be available at `http://localhost:4000`. Any changes you make to the Markdown files will be automatically reflected in the browser.

### Building the project and submitting a pull request
1. Build the project:
```
npm run build
```

2. Commit the changes:
```
git add .
git commit -m "Your commit message"
```

3. Open ga_tag.ipynb and run the cells to add Google Analytics tracking to the HTML files.

4. Push the changes:
```
git push
```

5. Submit a pull request on GitHub.
