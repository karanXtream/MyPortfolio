# Portfolio Website Setup Guide

## 📦 What's Included

This portfolio website includes:
- **Frontend**: React application with modern UI components
- **Backend**: FastAPI server with MongoDB integration
- **Design**: Clean monochrome design with animations
- **Components**: Header, Hero, About, Skills, Projects, Experience, Contact, Footer

## 🚀 Quick Start

### Prerequisites
- Node.js (v16+)
- Python (v3.8+)
- MongoDB (local or cloud)
- Yarn package manager

### Frontend Setup

1. **Navigate to frontend directory**
   ```bash
   cd frontend
   ```

2. **Install dependencies**
   ```bash
   yarn install
   ```

3. **Create .env file**
   ```bash
   # frontend/.env
   REACT_APP_BACKEND_URL=http://localhost:8001
   ```

4. **Start development server**
   ```bash
   yarn start
   ```
   
   Frontend will run at: http://localhost:3000

### Backend Setup

1. **Navigate to backend directory**
   ```bash
   cd backend
   ```

2. **Create virtual environment**
   ```bash
   python -m venv venv
   source venv/bin/activate  # On Windows: venv\Scripts\activate
   ```

3. **Install dependencies**
   ```bash
   pip install -r requirements.txt
   ```

4. **Create .env file**
   ```bash
   # backend/.env
   MONGO_URL=mongodb://localhost:27017/
   DB_NAME=portfolio_db
   ```

5. **Start the server**
   ```bash
   uvicorn server:app --host 0.0.0.0 --port 8001 --reload
   ```
   
   Backend will run at: http://localhost:8001

## 📝 Customization Guide

### Update Your Information

Edit `/frontend/src/data/mock.js` to customize:

```javascript
export const portfolioData = {
  hero: {
    name: "Your Name",           // Change to your name
    title: "Your Title",          // Your job title
    subtitle: "Your tagline",     // Your tagline
    description: "Your intro"     // Brief introduction
  },
  
  about: {
    description: "Your story...",  // Your full bio
    highlights: [                  // Your key points
      "Your highlight 1",
      "Your highlight 2",
      // Add more...
    ]
  },
  
  skills: {
    frontend: [                    // Your frontend skills
      { name: "React", level: 90 },
      // Add your skills...
    ],
    backend: [                     // Your backend skills
      { name: "Node.js", level: 85 },
      // Add your skills...
    ]
    // databases, tools sections...
  },
  
  projects: [                      // Your projects
    {
      id: 1,
      title: "Project Name",
      description: "Project description...",
      technologies: ["React", "Node.js"],
      category: "Web Application",
      featured: true,
      links: {
        demo: "https://your-demo.com",
        github: "https://github.com/you/project"
      }
    }
    // Add more projects...
  ],
  
  experience: [                    // Your work experience
    {
      id: 1,
      role: "Your Role",
      company: "Company Name",
      duration: "2022 - Present",
      description: "What you did...",
      achievements: [
        "Achievement 1",
        "Achievement 2"
      ]
    }
    // Add more experience...
  ],
  
  contact: {
    email: "your.email@example.com",
    phone: "+1 234 567 8900",
    location: "Your City, Country",
    social: {
      github: "https://github.com/yourusername",
      linkedin: "https://linkedin.com/in/yourusername",
      twitter: "https://twitter.com/yourusername"
    }
  }
};
```

### Change Colors

Edit `/frontend/src/index.css` to modify the color scheme:

```css
:root {
  --background: 0 0% 100%;      /* White background */
  --foreground: 0 0% 3.9%;      /* Black text */
  --primary: 0 0% 9%;           /* Primary black */
  /* Modify these values to change colors */
}
```

### Customize Animations

Edit component files in `/frontend/src/components/` to modify:
- Hover effects
- Transition durations
- Animation styles

## 🎨 Design Features

- **Monochrome Color Scheme**: Professional black, white, and gray palette
- **Animated Particle Background**: Hero section with floating particles
- **Smooth Scrolling**: Natural navigation between sections
- **Hover Effects**: Interactive elements with subtle animations
- **Responsive Design**: Works on desktop, tablet, and mobile
- **Clean Typography**: Modern, light font weights
- **Shadcn UI Components**: Pre-built accessible components

## 📂 Project Structure

```
portfolio/
├── frontend/
│   ├── src/
│   │   ├── components/
│   │   │   ├── ui/          # Shadcn UI components
│   │   │   ├── Header.jsx   # Navigation
│   │   │   ├── Hero.jsx     # Hero section
│   │   │   ├── About.jsx    # About section
│   │   │   ├── Skills.jsx   # Skills section
│   │   │   ├── Projects.jsx # Projects section
│   │   │   ├── Experience.jsx # Experience timeline
│   │   │   ├── Contact.jsx  # Contact form
│   │   │   └── Footer.jsx   # Footer
│   │   ├── data/
│   │   │   └── mock.js      # Your portfolio data
│   │   ├── pages/
│   │   │   └── HomePage.jsx # Main page
│   │   ├── hooks/
│   │   │   └── use-toast.js # Toast notifications
│   │   ├── App.js           # App entry
│   │   └── index.css        # Global styles
│   └── package.json
│
└── backend/
    ├── server.py            # FastAPI server
    ├── requirements.txt     # Python dependencies
    └── .env                 # Environment variables
```

## 🔧 Backend Integration (Optional)

Currently using mock data. To integrate with backend:

1. **Create MongoDB collections** for projects, experience, etc.
2. **Update backend endpoints** in `server.py`
3. **Replace mock data calls** in frontend components with API calls

Example API call:
```javascript
import axios from 'axios';

const BACKEND_URL = process.env.REACT_APP_BACKEND_URL;

const fetchProjects = async () => {
  const response = await axios.get(`${BACKEND_URL}/api/projects`);
  return response.data;
};
```

## 📱 Deployment

### Frontend (Vercel/Netlify)
1. Push code to GitHub
2. Connect repository to Vercel/Netlify
3. Set environment variable: `REACT_APP_BACKEND_URL`
4. Deploy!

### Backend (Railway/Render)
1. Push code to GitHub
2. Connect repository to Railway/Render
3. Set environment variables: `MONGO_URL`, `DB_NAME`
4. Deploy!

## 🐛 Troubleshooting

**Frontend won't start:**
- Delete `node_modules` and `yarn.lock`
- Run `yarn install` again

**Backend connection error:**
- Check MongoDB is running
- Verify `.env` file has correct MONGO_URL

**Styles not loading:**
- Make sure Tailwind is properly configured
- Check `tailwind.config.js` includes correct paths

## 📄 License

This is your personal portfolio. Feel free to customize and use it however you like!

## 🙏 Credits

Built with:
- React
- Tailwind CSS
- Shadcn UI
- FastAPI
- MongoDB
- Lucide React Icons

---

**Need help?** Feel free to reach out or open an issue in your repository!
