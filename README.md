# Gamdom Online Betting Dashboard

This project is a Online Betting Dashboard that displays sports events and their odds and users can bet on them. The system is built using Node.js, React.js, TypeScript, and PostgreSQL, and it uses Docker for containerization.

## Features

- Display sports events and their odds
- Users can bet on events
- Database migrations for easy setup and updates

## Prerequisites

- [Docker](https://www.docker.com/get-started)
- [Node.js](https://nodejs.org/) (if running locally without Docker)
- [Yarn](https://yarnpkg.com/)

## Getting Started

### Clone the Repository

```bash
git clone https://github.com/crackdev01/gamdom-online-betting.git
cd gamdom-online-betting
```

### Setup and Run with Docker

```bash
docker compose up
```

### Setup and Run Locally

1. **Install & Run Postgres**

2. **Install Dependencies**

   ```bash
   yarn install
   ```

3. **Run Database Migrations**

   ```bash
   yarn db:migrate
   ```

4. **Start the Server**

   ```bash
   yarn start
   ```

5. **Run the React App**

   ```bash
   cd frontend
   yarn dev
   ```

## Backend Project Structure

- `src/`: Contains the source code for the backend
- `migrations/`: Contains database migration files
- `Dockerfile`: Docker configuration for containerizing the application
- `package.json`: Project metadata and dependencies

## Frontend Project Structure

- `src/`: Contains the source code for the frontend
- `public/`: Contains the public assets for the frontend
- `package.json`: Project metadata and dependencies

## Database

The project uses PostgreSQL as the database. Ensure you have a PostgreSQL instance running and update the database connection settings in the environment variables.

## Environment Variables for Backend

Create a `.env` file in the root directory and configure the following variables:

```plaintext
DATABASE_URL=postgresql://postgres:postgres@localhost:5432/postgres
```

## Environment Variables for Frontend

Create a `.env` file in the root directory and configure the following variables:

```plaintext
VITE_API_URL=http://localhost:3000
```
