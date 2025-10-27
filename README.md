# 3D Portfolio Website

> An interactive 3D portfolio website showcasing skills, projects, and technologies using React Three Fiber

## 🌟 Overview

This is a modern, interactive 3D portfolio website that presents personal information, projects, and technical skills through immersive 3D visualizations. The website features smooth animations, responsive design, and engaging 3D models.

**Live Demo:** [https://3d-web-app-gold.vercel.app/](https://3d-web-app-gold.vercel.app/)

## ✨ Features

- **3D Hero Section**: Interactive 3D desk scene with animated camera controls
- **Technology Showcase**: 3D floating spheres displaying technology icons
- **Project Presentation**: Detailed project information with 3D laptop visualization
- **Responsive Design**: Optimized for both desktop and mobile devices
- **Smooth Navigation**: Scroll-based navigation with smooth transitions
- **Performance Optimized**: Lazy loading and efficient 3D rendering

## 🛠️ Tech Stack

### Frontend

- **React 18.3.1** - Modern React with hooks
- **Three.js 0.171.0** - 3D graphics library
- **@react-three/fiber** - React renderer for Three.js
- **@react-three/drei** - Useful helpers for React Three Fiber

### Styling & UI

- **Tailwind CSS** - Utility-first CSS framework
- **PrimeReact** - UI component library
- **CSS Gradients** - Beautiful background effects

### Development Tools

- **Vite** - Fast build tool and development server
- **ESLint** - Code linting and formatting
- **PostCSS** - CSS processing

### Additional Libraries

- **react-scroll** - Smooth scrolling navigation
- **react-responsive** - Responsive design utilities
- **html2canvas** - Screenshot capabilities
- **leva** - 3D scene debugging
- **maath** - Math utilities for 3D

## 🚀 Getting Started

### Prerequisites

- Node.js (version 16 or higher)
- npm or yarn package manager

### Installation

1. **Clone the repository**

   ```bash
   git clone https://github.com/yourusername/3DWebApp.git
   cd 3DWebApp
   ```

2. **Install dependencies**

   ```bash
   npm install
   ```

3. **Start development server**

   ```bash
   npm run dev
   ```

4. **Open your browser**
   Navigate to `http://localhost:5173`

### Build for Production

```bash
# Build the project
npm run build

# Preview production build
npm run preview
```

## 📁 Project Structure

```
src/
├── components/
│   ├── About.jsx          # Project showcase section
│   ├── Ball.jsx           # 3D technology spheres
│   ├── CanvasLoader.jsx   # Loading component for 3D scenes
│   ├── Contact.jsx        # Contact information
│   ├── Desk.jsx           # 3D desk model
│   ├── Hero.jsx           # Main hero section with 3D scene
│   ├── HeroCamera.jsx     # Camera controls for hero section
│   ├── Laptop.jsx         # 3D laptop model
│   └── Technologies.jsx   # Technology showcase
├── App.jsx                # Main application component
└── main.jsx              # Application entry point
```

## 🎯 Key Sections

### Hero Section

- Interactive 3D desk setup scene
- Animated sparkles and lighting effects
- Responsive camera positioning
- Welcome message and introduction

### Technologies

- 3D floating spheres showcasing technical skills
- Interactive technology icons
- Grid layout optimized for different screen sizes
- Technologies include: JavaScript, TypeScript, React, Node.js, Docker, NestJS, MySQL, MongoDB, and more

### About/Project

- Detailed presentation of recent projects
- 3D laptop visualization
- Focus on "Unified Product Data Import System"
- Technologies and implementation details

## 🎨 3D Models & Assets

The project uses custom 3D models and technology icons:

- **Desk Scene**: Interactive workspace representation
- **Laptop Model**: Professional project presentation
- **Technology Icons**: Visual representation of skills
- **Lighting & Effects**: Ambient and directional lighting for realistic scenes

## 📱 Responsive Design

- **Desktop**: Full 3D experience with all interactive elements
- **Mobile**: Optimized layouts with simplified 3D scenes
- **Tablet**: Balanced experience between desktop and mobile

## 🚀 Deployment

The project is deployed on **Vercel** with automatic deployments from the main branch.

**Live URL:** [https://3d-web-app-gold.vercel.app/](https://3d-web-app-gold.vercel.app/)

### Deploy Your Own

1. Fork this repository
2. Connect to Vercel
3. Deploy with one click

[![Deploy with Vercel](https://vercel.com/button)](https://vercel.com/new/clone?repository-url=https://github.com/yourusername/3DWebApp)

## 🔧 Available Scripts

```bash
npm run dev      # Start development server
npm run build    # Build for production
npm run preview  # Preview production build
npm run lint     # Run ESLint
```

## 🤝 Contributing

1. Fork the project
2. Create a feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## 📄 License

This project is open source and available under the [MIT License](LICENSE).
)

## 🙏 Acknowledgments

- [Three.js](https://threejs.org/) - Amazing 3D library
- [React Three Fiber](https://docs.pmnd.rs/react-three-fiber) - React renderer for Three.js
- [Drei](https://docs.pmnd.rs/drei) - Useful helpers and abstractions
- [Vercel](https://vercel.com/) - Excellent hosting platform

---
