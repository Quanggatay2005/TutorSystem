# Tutor Support System — Demonstration Version

## 1. Introduction

This application represents a demonstration of essential Minimum Viable Product (MVP) features within a tutor support system. The current implementation includes the following core functionalities:

- Students may view tutor profiles, follow tutors, and engage in a simplified chat feature for demonstration purposes.
- Authentication is supported through mock Single Sign-On (SSO) data, allowing only predefined user accounts to access the system.

---

## 2. Execution Guide

### 2.1. Installation and Web Deployment

- Clone the project repository from GitHub.
- Install all required dependencies by executing `npm install`.  
  Please verify installation logs for potential errors.
- Start the application using the command:  
  `npm run dev`
- Access the running application by Ctrl + clicking the localhost link shown in the console.
- Terminate the server process using `Ctrl + C`.

---

### 2.2. Authentication and System Testing

- At the login interface, use the credentials:
  - **Username:** `ngoc.nguyen`
  - **Password:** `123456`
- To experiment with additional user accounts, modify or extend the mock dataset located at:  
  `/src/data/mockData.js`  
  Within this file, usernames and corresponding passwords are stored in the **Students** object. You may use these credentials to authenticate additional test accounts.