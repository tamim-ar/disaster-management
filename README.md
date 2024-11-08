## Disaster Management Web Application

This is a MERN (MongoDB, Express.js, React, Node.js) application designed to manage and respond to disaster scenarios. The application provides tools for crisis management, donation collection, and resource allocation. It uses Tailwind CSS and Bootstrap for the frontend design.

## Project Structure

- **Client**: Frontend code located in `disaster-management-client`
- **Server**: Backend code located in `disaster-management-server`

## Prerequisites

Ensure you have the following installed on your system:

- [Node.js](https://nodejs.org/) (v14.x or higher recommended)
- [MongoDB](https://www.mongodb.com/) (for local database or Atlas setup)

## Setup Instructions

### Step 1: Clone the Repository

Clone the project to your local machine:

```bash
git clone https://github.com/tamim-ar/disaster-management
cd disaster-management
```

### Step 2: Install Dependencies

Install dependencies for both the client and server.

1. **Client Setup**:
   - Navigate to the client folder:
     ```bash
     cd disaster-management-client
     ```
   - Install the required dependencies:
     ```bash
     npm install
     ```

2. **Server Setup**:
   - Navigate to the server folder:
     ```bash
     cd disaster-management-server
     ```
   - Install the required dependencies:
     ```bash
     npm install
     ```

### Step 3: Run the Project

Start both the client and server to run the project locally.

1. **Run Client**:
   - In the `disaster-management-client` folder, run:
     ```bash
     npm run dev
     ```
   - The client should be running at `http://localhost:5173` by default.

2. **Run Server**:
   - In the `disaster-management-server` folder, run:
     ```bash
     npm start
     ```
   - The server should be running at `http://localhost:5000` by default.

## Additional Notes

- Ensure MongoDB is running and accessible from your machine.
- For any issues, check the project documentation or consult the logs for errors.

---

Enjoy developing and improving the Disaster Management Web Application!