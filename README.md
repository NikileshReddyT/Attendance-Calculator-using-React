
# Attendance Calculator

## Overview

The **Attendance Calculator** is a simple web application that helps students calculate their current attendance percentage based on the number of classes attended and conducted. It also provides insights on how many additional classes need to be attended to achieve a desired attendance percentage or how many classes can be missed while maintaining a certain percentage.

## Features

- **Calculate Attendance Percentage:** Input the number of classes conducted and attended to calculate the current attendance percentage.
- **Set Desired Percentage:** Determine the number of classes needed to achieve a specific attendance percentage.
- **Bunk Planning:** Find out how many classes you can skip while maintaining your desired attendance percentage.

## Getting Started

### Prerequisites

Ensure you have the following installed:

- **Node.js**: [Download and install Node.js](https://nodejs.org/)
- **npm**: Comes with Node.js, used for managing project dependencies.

### Installation

1. **Clone the repository:**

   ```bash
   git clone https://github.com/NikileshReddyT/Attendance-Calculator-using-React.git
   cd attendance-calculator
   ```

2. **Install dependencies:**

   ```bash
   npm install
   ```

3. **Run the development server:**

   ```bash
   npm run dev
   ```

   The app should now be running on `http://localhost:5173/`.

## Usage

1. **Enter the desired attendance percentage** in the first input field.
2. **Input the number of classes conducted** (separated by spaces) in the second input field.
3. **Input the number of classes attended** (separated by spaces) in the third input field.
4. Click on the **Calculate** button to see the results.

### Example

- **Desired Attendance Percentage:** 75
- **Number of Classes Conducted:** 5 5 5 5
- **Number of Classes Attended:** 4 4 4 4

## Files

- **`src/components/AttendanceCalculator.jsx`**: The main React component handling the attendance calculations and rendering the UI.
- **`src/styles.css`**: The CSS file containing the styling for the app.
- **`src/assets/changed2.svg`**: The logo used in the app.

## Deployment

To build the app for production, run:

```bash
npm run build
```

The output will be in the `dist/` directory. You can then serve the contents of this directory using any static file server.

## Contributing

If you'd like to contribute, please fork the repository and use a feature branch. Pull requests are warmly welcome.

## Acknowledgements

- **React** - A JavaScript library for building user interfaces.
- **Vite** - A fast build tool for modern web projects.

---



### Steps Included:
- **Overview**: Brief introduction to the project.
- **Features**: Highlighted key functionalities.
- **Getting Started**: Instructions on how to set up the project.
- **Usage**: Guide on how to use the application.
- **Files**: Overview of important files in the project.
- **Deployment**: Instructions for deploying the app.
- **License**: Information about the licensing.
- **Contributing**: Encouragement for contributing to the project.
- **Acknowledgements**: Shoutouts to the libraries and tools used.

