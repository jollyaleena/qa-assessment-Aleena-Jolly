This repository contains a QA assessment project using Playwright using TypeScript. It demonstrates a structured testing framework using the Page Object Model (POM) design pattern, organized test scripts, and utilities for reusable code.


# Project Structure
tests/ – Contains all test scripts and screenshots<br>
pages/ – Page Object Model files for reusable page interactions<br>
reports/ – Stores test execution reports.<br>


# Features
Playwright + TypeScript: End-to-end testing framework<br>
Page Object Model: Maintainable and reusable code structure<br>
Reports: Test execution results saved in reports/.

# Setup Instructions
To execute playwright test:<br>

// To execute all tests<br>
npx playwright test<br>


// To execute particular test<br>
npx playwright test .spec.ts<br>


// To execute particular test and view visually<br>
npx playwright test .spec.ts --headed


// To execute a particular test case in the test<br>
npx playwright test .spec.ts -g "test case name"
