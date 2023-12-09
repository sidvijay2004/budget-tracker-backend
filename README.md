# Budget Tracker App (BackEnd)

Welcome to the Budget Tracker App! This application is designed to help users manage their budgets effectively by providing a guided step-by-step process to input financial data and receive budget analysis based on user-provided information using AI tools.

**To set up the FrontEnd, follow instructions in the read.me file for [this](https://github.com/sidvijay2004/budget-tracker-frontend/tree/master) repository.**

## Overview

Budget Prompter is a web-based application that offers users the ability to:
- Answer budget-related prompts to receive personalized feedback.
- Utilize OpenAI GPT-3.5 for text-based insights.
- Generate relevant images through DALL-E integration.
- Store and manage budget plans.
- View and delete saved plans.
  
## Architecture Overview

The application follows a client-server architecture:

### Frontend (Client)

- **React**: The frontend is developed using React to create an interactive user interface with a multi-step form structure.
- **React Router**: Utilizes React Router for managing different steps of the form and navigation within the application.
- **API Interaction**: Communicates with backend APIs for processing user data and displaying budget analysis and generated images.
- **State Management**: Utilizes React's state and hooks (e.g., useState) to manage user input data throughout the form flow.
- **PORT 3000**

### Backend (Server)

- **Node.js and Express**: The backend is built on Node.js, leveraging the Express framework to handle API requests and serve endpoints for processing user data.
- **OpenAI Integration**: Interacts with the OpenAI API for generating budget analysis based on user-provided financial details.
- **Image Generation**: Utilizes a separate API endpoint for generating images that visualize budget-related data.
- **Database Interaction**: Incorporates MongoDB to store and retrieve user plans and information for persistence.
- **PORT 3001**
  

## Prerequisites

- Node.js (v20.10.0) - [Install Node.js](https://nodejs.org/) or Yarn [Install Yarn](https://classic.yarnpkg.com/lang/en/docs/install/#windows-stable)
- MongoDB - [Follow Steps Below]

## Getting Started

1. Clone the backend repository:

    ```bash
    git clone https://github.com/your-username/budget-prompter-backend.git
    ```

2. Navigate to the backend directory:

    ```bash
    cd budget-tracker-backend
    ```

4. Install dependencies:

    ```bash
    npm install
    # OR using Yarn
    yarn install
    ```

5. Update OpenAI API key:

   - Locate the `index.js` file in the project.
   - Find the section where the OpenAI API key is required.
   - Replace `YOUR_OPENAI_API_KEY` with your actual OpenAI API key.
     If you don't have a key, you can generate one using the docs here [Generate OpenAI API Key](https://platform.openai.com/docs/quickstart?context=python)

6. Start the backend server:

    ```bash
    node index.js
    # OR using Yarn
    yarn node index.js
    ```

## Connecting MongoDB Compass to Node.js Backend

To connect MongoDB Compass to your Node.js backend, follow these steps:

### 1. Install MongoDB Compass:

If you haven't already installed MongoDB Compass, download and install it from the [official MongoDB website](https://www.mongodb.com/try/download/compass).

### 2. Find MongoDB Connection String:

Create a new Database and Collection in MongoDB. Once you do this:
1. Replace **databaseName** variable with your created DataBase name (in db.js)
2. Replace **uri** variable with your connection string (in db.js)
3. Replace **collectionName** variable with your collection name (in index.js)


## Usage

1. The backend server manages API connections using Express.
2. It interfaces with OpenAI's GPT-3.5 to process budget-related prompts.
3. MongoDB is utilized for database functionalities such as storing and retrieving budget plans.


## Contact

For any queries or support regarding the backend part of this project, feel free to contact [Siddharth Vijayasankar] at [sidvijay2004@gmail.com].
