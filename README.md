# Vector Interview Backend

Vector Interview is an asynchronous video interview platform designed to streamline the hiring process by allowing recruiters to pre-record interview questions and candidates to respond at their convenience. This repository contains the backend built using **Node.js** and **Express.js**.

## Features

- **User Authentication**: Secure login and registration for recruiters, candidates, and evaluators.
- **Interview Management**: Recruiters can create and manage interview sessions.
- **Video Upload**: Candidates can upload their video responses.
- **Evaluation System**: Evaluators can review and score candidate responses.
- **Automated Reports**: Generate insights from evaluator feedback.
- **Multi-Device Support**: Works seamlessly across different devices.

## Tech Stack

- **Backend**: Node.js, Express.js
- **Database**: MongoDB (Mongoose ODM)
- **Authentication**: JWT & OAuth
- **Environment Variables**: Managed using dotenv

## Installation

### Prerequisites
- Node.js installed (v14 or later)
- MongoDB (local or Atlas)

### Steps
1. **Clone the repository**
   ```sh
   git clone https://github.com/odey123/vector-interview.git
   cd vector-interview-backend
   ```
2. **Install dependencies**
   ```sh
   npm install
   ```
3. **Create a `.env` file in the root directory** and add:
   ```env
   PORT=5000
   MONGO_URI=mongodb+srv://jude:pqjKY0fSFWO7OsZT@cluster0.uyhiv.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0
   ```
4. **Run the server**
   ```sh
   npm start
   ```
   or in development mode:
   ```sh
   npm run dev
   ```

## API Endpoints

### **Auth Routes** (`/api/auth`)
| Method | Endpoint     | Description          |
|--------|-------------|----------------------|
| POST   | `/register` | Register a user     |
| POST   | `/login`    | Authenticate a user |

### **Interview Routes** (`/api/interviews`)
| Method | Endpoint         | Description                           |
|--------|-----------------|---------------------------------------|
| POST   | `/create`       | Create a new interview               |
| GET    | `/list`         | Get all interviews                   |

### **Response Routes** (`/api/responses`)
| Method | Endpoint         | Description                          |
|--------|-----------------|--------------------------------------|
| POST   | `/upload`       | Upload candidate response (video)   |
| GET    | `/list/:id`     | Get responses for an interview      |

### **Evaluation Routes** (`/api/evaluations`)
| Method | Endpoint         | Description                          |
|--------|-----------------|--------------------------------------|
| POST   | `/score`        | Submit evaluator scores and feedback |

## Project Structure
```
vector-interview-backend/
│── src/
│   ├── config/          # Database & storage config
│   ├── middlewares/     # Authentication & error handling
│   ├── models/          # Mongoose schemas
│   ├── routes/          # API routes
│   ├── server.js        # Entry point
│── .env                 # Environment variables
│── package.json         # Dependencies & scripts
│── README.md            # Project documentation
```

## License

This project is licensed under the MIT License.

