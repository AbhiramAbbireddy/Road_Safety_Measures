Road Safety Awareness Initiative
This project is a modern, interactive web application built with React, designed to educate users on crucial road safety measures. It provides a comprehensive learning experience through various modules, including an educational hub, video-based learning, a knowledge-testing quiz, and up-to-date statistics.

✨ Features
Modern User Interface: A clean, professional, and fully responsive UI designed for a great user experience on any device.

Interactive Learning Hub: A central "cockpit" style dashboard for navigating through different educational topics.

Multi-Level Video Courses: The "RoadGuard Learning" section offers video-based lessons categorized into Beginner, Intermediate, and Advanced levels.

Image-Based Quiz: A 20-question interactive quiz, including visual questions, to test users' knowledge and provide feedback on their performance.

Engaging Statistics: An impactful statistics page that uses modern cards and visuals to present data in a memorable way.

Component-Based Architecture: Built with React, featuring a modular and maintainable codebase.

Client-Side Routing: Smooth, fast navigation between pages powered by React Router.

🛠️ Tech Stack
Frontend: React (using Vite)

Routing: React Router

Styling: Plain CSS with a focus on modern design principles like Flexbox and Grid.

Icons: Lucide React

🚀 Getting Started
To run this project locally, follow these steps:

Prerequisites
Node.js (v18 or later)

npm (or yarn)

Installation & Setup
Clone the repository:

Bash

git clone https://github.com/AbhiramAbbireddy/Road_Safety_Measures.git
Navigate to the project directory:

Bash

cd Road_Safety_Measures
Install the dependencies:

Bash

npm install
Run the development server:

Bash

npm run dev
The application will be available at http://localhost:5173 (or the next available port).

📁 Project Structure
The project follows a standard Vite + React structure:

Road_Safety_Measures/
├── public/               # Static assets (images, videos, favicon)
├── src/
│   ├── components/       # Reusable components (Navbar, Footer, Card, etc.)
│   ├── pages/            # Page-level components (Home, Quiz, Statistics, etc.)
│   ├── styles/           # CSS stylesheets for components and pages
│   ├── App.css           # Global styles
│   ├── App.jsx           # Main app component with routing logic
│   └── main.jsx          # Entry point of the React application
├── .gitignore            # Files to be ignored by Git
├── index.html            # Main HTML template
├── package.json          # Project dependencies and scripts
└── README.md             # This file
(Deployment)
This project can be easily deployed on platforms like Vercel, Netlify, or Render.

Build the project for production:

Bash

npm run build
This command creates an optimized dist folder.

Deploy:

Vercel/Netlify: Connect your GitHub repository and the platform will automatically build and deploy the project.

Manual Deploy: Upload the contents of the dist folder to your hosting service.
