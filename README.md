# Budget Prompter Backend

Welcome to the Budget Prompter Backend! This part of the application serves as the server-side logic for managing budget prompts, interacting with OpenAI's GPT-3.5, handling API connections with Express, and interfacing with MongoDB for database functionality.

## Prerequisites

- Node.js (v20.10.0) - [Install Node.js](https://nodejs.org/)
- MongoDB (running on port 27017) - [Install MongoDB]([https://docs.mongodb.com/manual/installation/](https://www.mongodb.com/try/download/compass))

## Getting Started

1. Clone the backend repository:

    ```bash
    git clone https://github.com/your-username/budget-prompter-backend.git
    ```

2. Navigate to the backend directory:

    ```bash
    cd budget-tracker-backend
    ```

3. Install Express for API connectivity:

    ```bash
    npm install express
    # OR using Yarn
    yarn add express
    ```

4. Install OpenAI library for Node.js:

    ```bash
    npm install openai
    # OR using Yarn
    yarn add openai
    ```

5. Update OpenAI API key:

   - Locate the `index.js` file in the project.
   - Find the section where the OpenAI API key is required.
   - Replace `YOUR_OPENAI_API_KEY` with your actual OpenAI API key.

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

Create a new Database and Collection in MongoDB. Find the connection string and connect it with the existing Connection String in db.js by replacing uri variable. In addition, replace all instances of db.collection('COLLECTION') with your collection in index.js.


## Usage

1. The backend server manages API connections using Express.
2. It interfaces with OpenAI's GPT-3.5 to process budget-related prompts.
3. MongoDB is utilized for database functionalities such as storing and retrieving budget plans.


## Contact

For any queries or support regarding the backend part of this project, feel free to contact [Siddharth Vijayasankar] at [sidvijay2004@gmail.com].
