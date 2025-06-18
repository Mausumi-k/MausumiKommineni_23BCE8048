# 🧠 Skill Swap Backend

Skill Swap is a Node.js-based backend application for a skill-sharing platform. It allows users to register, login, and manage their skills through secure and well-documented RESTful APIs. The backend uses MongoDB for data storage, Express.js as the framework, and JWT for authentication.

---

## 🚀 Features

- 🔐 User Registration & Login with JWT Authentication
- 📋 Skill CRUD (Create, Read, Update, Delete)
- 🛡️ Protected Routes for authenticated users
- 🔎 Swagger API Documentation at `/api-docs`
- 🌐 CORS enabled for frontend communication

---

## 🛠️ Tech Stack

- **Node.js**
- **Express.js**
- **MongoDB & Mongoose**
- **JWT (jsonwebtoken)**
- **Bcrypt (for password hashing)**
- **Swagger (API Documentation)**

---

## 📁 Folder Structure

skill-swap-backend/
├── controllers/
│ ├── userController.js
│ └── skillController.js
├── models/
│ ├── User.js
│ └── Skill.js
├── routes/
│ ├── userRoutes.js
│ └── skillRoutes.js
├── middleware/
│ └── authMiddleware.js
├── swagger/
│ └── swaggerOptions.js
├── .env
├── server.js
└── package.json

---

## 🔐 Environment Variables

Create a `.env` file in the root directory:

MONGO_URI=mongodb://localhost:27017/skillswap
JWT_SECRET=your_jwt_secret_key
PORT=27018

---

## 📦 Installation & Setup

1. Clone the repository:

```
git clone <your-repo-url>
cd source code

Install dependencies:
npm install
Set up your .env file (see above).

Run the server:
node server.js
Server will be running on: http://localhost:27018

📚 API Documentation
View Swagger API docs at:

http://localhost:27018/api-docs
Includes:

POST /api/users/register – Register a new user

POST /api/users/login – Login and receive JWT token

CRUD on /api/skills (create, update, delete require authentication)

📬 Postman Collection
The Postman collection file Skill Swap.postman_collection.json is included.

Import into Postman and test all endpoints.

After login, copy the token and set it as {{token}} variable or manually in the Authorization header.

✅ Sample Skill Schema
{
  "title": "React Developer",
  "description": "Frontend development using React.js",
  "category": "Frontend"
}
🧑 Author
Mausumi Kommineni
Project developed as part of MongoDB industrial certification.

📃 License
This project is open-source and free to use.


---

Let me know if you'd like me to:
- Bundle this and the Postman collection into a downloadable `.zip`
- Generate a markdown preview
- Add frontend instructions if you’re building that too.