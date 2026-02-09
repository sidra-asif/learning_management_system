# 💠 Lumina LMS - Elite Learning Management System

Lumina LMS is a state-of-the-art Learning Management System designed for elite institutions and professional educators. It features an immersive "Elite Redesign" with mesh gradients, glassmorphism, and role-based advanced dashboards.

## ✨ Key Features

- **Elite UI/UX**: Overhauled with immersive mesh gradients and motion design.
- **Student Dashboard**: Advanced progress tracking, course enrollment, and GPA overview.
- **Teacher Console**: Student engagement analytics, class roster management, and quick attendance marking.
- **Role-Based Sidebar**: Dynamic fixed-sidebar navigation tailored to user authentication.
- **Immersive Hero Section**: SaaS-style landing page with floating 3D-effect components and professional visuals.
- **Responsive Design**: Optimized for all devices from mobile to ultra-wide displays.
- **Robust Backend**: Python-Flask backend with SQLite integration for instant local performance.

## 🛠️ Tech Stack

- **Frontend**: React (Vite), Vanilla CSS (Advanced Design System)
- **Backend**: Python, Flask, SQAlchemy, JWT
- **Database**: SQLite (local-first approach)
- **Styling**: Modern CSS3 (Grid, Flexbox, Mesh Gradients, Animations)

## 📁 Project Structure

```text
learning_management_system/
├── backend/                # Flask Backend Service
│   ├── src/                # Source code
│   │   ├── components/     # API Blueprints (Auth, Student, Teacher)
│   │   ├── models/         # Database Models
│   │   ├── instance/       # Database instance (SQLite)
│   │   └── __init__.py     # App initialization & CORS config
│   └── app.py              # Backend Entry Point
│
├── frontend/               # React Frontend Service
│   ├── src/
│   │   ├── components/     # UI Components
│   │   │   ├── Auth/       # Login & Registration
│   │   │   ├── Dashboard/  # Student & Teacher consoles
│   │   │   ├── LandingPage/ # Elite Home Page Overhaul
│   │   │   └── Layout/     # Sidebar & Shared Layouts
│   │   ├── App.jsx         # Main Router & Layout logic
│   │   ├── index.css       # Premium Design Tokens
│   │   └── main.jsx        # React DOM Entry
│   ├── index.html
│   └── vite.config.js
│
└── README.md               # Project Documentation
```

## 🚀 Getting Started

### Prerequisites
- Python 3.x
- Node.js & npm

### Backend Setup
1. Navigate to the backend directory:
   ```bash
   cd backend
   ```
2. Run the application:
   ```bash
   python app.py
   ```
   *The backend will run on `http://localhost:5000`*

### Frontend Setup
1. Navigate to the frontend directory:
   ```bash
   cd frontend
   ```
2. Install dependencies (if not already done):
   ```bash
   npm install
   ```
3. Run the development server:
   ```bash
   npm run dev
   ```
   *The frontend will run on `http://localhost:5173`*

## 💎 Elite Design System
Lumina LMS uses a custom-built design system defined in `frontend/src/index.css`. Key tokens include:
- **Mesh Gradients**: `var(--mesh-bg-1)` to `var(--mesh-bg-4)`
- **Glassmorphism v2**: High saturation blurs and sharp borders (`.glass-v2`)
- **Typography**: `Outfit` for headings and `Inter` for body text.

---
Created with 💎 by the Lumina Development Team.
```
