# MERN To-Do List Application

A full-stack web application built with the **MERN stack** (MongoDB, Express.js, React, Node.js) for managing tasks with priority, duration, and category tracking.

## Features

✅ **Task Management**
- Create tasks with title, priority (Low/Medium/High), duration, and category
- Mark tasks as complete/incomplete with visual feedback
- Delete tasks
- View all tasks with organized card layout

✅ **Responsive Design**
- Clean, modern UI with gradient background
- Mobile-friendly layout
- Interactive task cards with badges

✅ **Backend API**
- RESTful API endpoints for CRUD operations
- MongoDB Atlas integration
- CORS enabled for cross-origin requests
- Comprehensive error handling

✅ **Code Organization**
- Backend: MVC pattern with middleware layer
- Frontend: Component-based architecture with isolated styles

## Tech Stack

**Backend:**
- Node.js + Express.js
- MongoDB (Atlas)
- Mongoose ODM
- CORS middleware

**Frontend:**
- React 18
- Vite
- Axios
- CSS3

## Project Structure

```
mern-todo-app/
├── backend/
│   ├── config/
│   │   └── db.js
│   ├── middleware/
│   │   ├── corsMiddleware.js
│   │   └── errorHandler.js
│   ├── models/
│   │   └── Task.js
│   ├── controllers/
│   │   └── taskController.js
│   ├── routes/
│   │   └── taskRoutes.js
│   ├── server.js
│   ├── .env
│   └── package.json
│
└── frontend/
    ├── src/
    │   ├── components/
    │   │   ├── TaskForm/
    │   │   ├── TaskList/
    │   │   └── TaskItem/
    │   ├── services/
    │   │   └── api.js
    │   ├── App.jsx
    │   └── main.jsx
    ├── package.json
    └── vite.config.js
```

## Installation

### Prerequisites
- Node.js (v18+)
- npm or yarn
- MongoDB Atlas account

### Backend Setup

1. Navigate to the backend directory:
   ```bash
   cd backend
   ```

2. Install dependencies:
   ```bash
   npm install
   ```

3. Create a `.env` file (copy from `.env.example`):
   ```env
   PORT=5000
   MONGODB_URI=your_mongodb_atlas_connection_string
   ```

4. Start the development server:
   ```bash
   npm run dev
   ```

   The backend server will run on `http://localhost:5000`

### Frontend Setup

1. Navigate to the frontend directory:
   ```bash
   cd frontend
   ```

2. Install dependencies:
   ```bash
   npm install
   ```

3. Start the development server:
   ```bash
   npm run dev
   ```

   The frontend will run on `http://localhost:5173`

## API Endpoints

| Method | Endpoint | Description |
|--------|----------|-------------|
| `GET` | `/api/tasks` | Fetch all tasks |
| `POST` | `/api/tasks` | Create a new task |
| `PATCH` | `/api/tasks/:id/complete` | Toggle task completion status |
| `DELETE` | `/api/tasks/:id` | Delete a task |

### Example Request

```bash
curl -X POST http://localhost:5000/api/tasks \
  -H "Content-Type: application/json" \
  -d '{
    "title": "Study Node.js",
    "priority": "High",
    "duration": 60,
    "category": "Study"
  }'
```

## Usage

1. Open your browser and navigate to `http://localhost:5173`
2. Enter a task title, select priority, duration, and category
3. Click "Add Task" to create the task
4. Click "Mark Complete" to toggle completion status
5. Click "Delete" to remove a task

## Environment Variables

### Backend (.env)
```env
PORT=5000
MONGODB_URI=mongodb+srv://username:password@cluster.mongodb.net/dbname
```

### Frontend
Frontend uses Vite with `http://localhost:5000/api` as the API base URL.

## Scripts

### Backend
- `npm run dev` - Start development server with hot reload
- `npm start` - Start production server

### Frontend
- `npm run dev` - Start Vite dev server
- `npm run build` - Build for production
- `npm run preview` - Preview production build

## Error Handling

The application includes comprehensive error handling:
- **400**: Bad request (invalid input, missing fields)
- **404**: Resource not found
- **500**: Server error

## Future Enhancements

- [ ] Task filters (All/Completed/Pending)
- [ ] Search functionality
- [ ] Task editing capability
- [ ] Due dates and reminders
- [ ] User authentication
- [ ] Dark mode
- [ ] Task categories with colors
- [ ] Deployment to production

## Contributing

Feel free to fork this repository and submit pull requests with improvements.

## License

This project is open source and available under the MIT License.

## Author

Created as part of AI-assisted coding workshop at IITM.

## Support

For issues or questions, please open an issue on GitHub.
