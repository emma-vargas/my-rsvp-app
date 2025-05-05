# My RSVP App

My RSVP App is a full-stack web application that allows users to RSVP for an event. Built with React on the frontend and Express with MongoDB on the backend, this app demonstrates a seamless integration of modern web technologies.

## Features

- **Frontend**: Built with React and styled using CSS, the app provides a clean and intuitive user interface.
- **Backend**: Powered by Express and MongoDB, the app handles RSVP submissions and stores guest information securely.
- **Routing**: React Router is used for client-side navigation between pages.
- **Proxy**: Vite is configured to forward API requests to the backend server.
- **Dynamic Responses**: Users can RSVP or decline, and the app dynamically redirects them to confirmation or decline pages.

## Project Structure

my-rsvp-app/
├── client/ # Frontend code
│ ├── src/ # React components and pages
│ ├── index.html # Entry point for the frontend
│ └── README.md # Frontend-specific documentation
├── server/ # Backend code
│ ├── models/ # MongoDB schemas
│ ├── routes/ # API routes and controllers
│ └── server.js # Entry point for the backend
├── .env # Environment variables
├── package.json # Project dependencies and scripts
└── vite.config.js # Vite configuration

## Getting Started

### Prerequisites

- Node.js (v16 or higher)
- MongoDB Atlas account (or local MongoDB instance)

### Installation

1. Clone the repository:
   ```bash
   git clone https://github.com/your-username/my-rsvp-app.git
   cd my-rsvp-app
   ```
2. Install dependencies:
   npm install
3. Set up environment variables:

- Create a .env file in the root directory.
- Add your MongoDB connection string:

  connection_string=your-mongodb-connection-string

4. Start the development server:
   npm run dev

- The frontend will run on: http://localhost:5173.
- The backend will run on: http://localhost:5001.

## Upcoming Features

- Refactoring: TypeScript implementation
- Testing: Unit and integration tests for both frontend and backend.
- Authentication: OAuth integration for secure user authentication.

## Technologies Used

- Frontend: React, Vite, React Router
- Backend: Express, MongoDB, Mongoose
- Styling: CSS
- Development Tools: Nodemon, Concurrently, dotenv

## License

This project is licensed under the MIT License. Feel free to use and modify it as needed.

Feel free to reach out if you have any questions or feedback! ```
