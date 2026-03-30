# Chatty - Real-time Chat Application

A full-stack real-time chat application built with the MERN stack, featuring instant messaging, user authentication, online presence tracking, and a customizable themed UI.

**Live Demo:** [chatty-beryl-chi.vercel.app](https://chatty-beryl-chi.vercel.app/)

![Tech Stack](https://img.shields.io/badge/React-18-blue?logo=react) ![Tech Stack](https://img.shields.io/badge/Node.js-Express-green?logo=node.js) ![Tech Stack](https://img.shields.io/badge/MongoDB-Mongoose-brightgreen?logo=mongodb) ![Tech Stack](https://img.shields.io/badge/Socket.io-Realtime-black?logo=socket.io) ![Tech Stack](https://img.shields.io/badge/TailwindCSS-DaisyUI-purple?logo=tailwindcss)

## Features

- **Real-time Messaging** - Instant message delivery powered by Socket.io
- **Authentication & Authorization** - Secure JWT-based auth with HTTP-only cookies
- **Online User Status** - Live presence tracking across the app
- **Image Sharing** - Send images in chat via Cloudinary uploads
- **Profile Management** - Update profile picture and account details
- **Theme Customization** - 32+ themes with DaisyUI
- **Responsive Design** - Works seamlessly on desktop and mobile
- **Global State Management** - Efficient state handling with Zustand

## Tech Stack

| Layer | Technology |
|-------|-----------|
| Frontend | React 18, Vite, TailwindCSS, DaisyUI, Zustand |
| Backend | Node.js, Express.js, Socket.io |
| Database | MongoDB with Mongoose ODM |
| Auth | JWT, bcryptjs |
| Media | Cloudinary |
| Deployment | Vercel (frontend), Render (backend) |

## Getting Started

### Prerequisites

- Node.js (v18 or higher)
- MongoDB instance (local or Atlas)
- Cloudinary account

### Installation

1. **Clone the repository**

   ```bash
   git clone https://github.com/Shubham-jjain/Chatty.git
   cd Chatty
   ```

2. **Install dependencies**

   ```bash
   npm install --prefix backend
   npm install --prefix frontend
   ```

3. **Set up environment variables**

   Create a `.env` file in the `backend/` directory:

   ```env
   PORT=5001
   MONGODB_URI=your_mongodb_connection_string
   JWT_SECRET=your_jwt_secret

   CLOUDINARY_CLOUD_NAME=your_cloud_name
   CLOUDINARY_API_KEY=your_api_key
   CLOUDINARY_API_SECRET=your_api_secret

   NODE_ENV=development
   ```

4. **Seed the database** (optional)

   ```bash
   cd backend && node src/seeds/user.seed.js
   ```

5. **Run the application**

   ```bash
   # Terminal 1 - Backend
   cd backend && npm run dev

   # Terminal 2 - Frontend
   cd frontend && npm run dev
   ```

   The app will be available at `http://localhost:5173`

### Production Build

```bash
# From project root
npm run build
npm start
```

## Project Structure

```
Chatty/
├── frontend/                # React frontend
│   ├── src/
│   │   ├── components/      # UI components (Navbar, Sidebar, ChatContainer)
│   │   ├── pages/           # Route pages (Home, Login, SignUp, Profile, Settings)
│   │   ├── store/           # Zustand state stores
│   │   ├── lib/             # Axios config & utilities
│   │   └── constants/       # App constants
│   └── vercel.json          # Vercel deployment config
│
├── backend/                 # Express backend
│   ├── src/
│   │   ├── controllers/     # Request handlers
│   │   ├── routes/          # API route definitions
│   │   ├── models/          # Mongoose schemas
│   │   ├── middleware/      # Auth middleware
│   │   ├── lib/             # DB, Socket.io, Cloudinary setup
│   │   └── seeds/           # Database seed scripts
│   └── .env                 # Environment variables
│
└── package.json             # Root build & start scripts
```

## API Endpoints

| Method | Endpoint | Description |
|--------|----------|-------------|
| POST | `/api/auth/signup` | Register a new user |
| POST | `/api/auth/login` | Login user |
| POST | `/api/auth/logout` | Logout user |
| GET | `/api/auth/check` | Check auth status |
| PUT | `/api/auth/update-profile` | Update user profile |
| GET | `/api/messages/users` | Get users for sidebar |
| GET | `/api/messages/:id` | Get messages with a user |
| POST | `/api/messages/send/:id` | Send a message |

## License

This project is licensed under the ISC License.
