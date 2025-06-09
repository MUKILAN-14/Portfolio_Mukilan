import React from 'react';

const projects = [
  {
    title: 'GitHub User Finder 🔍',
    description: 'A React app that fetches and displays GitHub user profiles using GitHub API.',
    link: 'https://github.com/MUKILAN-14/github_user'
  },
  {
    title: 'Portfolio Website 🌐',
    description: 'My personal portfolio built with React and Tailwind CSS.',
    link: 'https://github.com/MUKILAN-14/Portfolio'
  },
  {
    title: 'Employee Dashboard 👨‍💼',
    description: 'A dashboard for employee management with charts, filters, and responsive UI.',
    link: 'https://github.com/MUKILAN-14/Employee_Dashboard'
  },
  {
    title: 'React Mini Projects ⚛️',
    description: 'A collection of beginner-friendly React projects.',
    link: 'https://github.com/MUKILAN-14/React_Project'
  },
  {
    title: 'Car Game (Pygame) 🚗',
    description: 'A simple 2D car racing game built using Python and Pygame.',
    link: 'https://github.com/MUKILAN-14/Car_Game_Pygame'
  },
  {
    title: 'Task Management Dashboard ✅',
    description: 'A styled dashboard for tracking tasks with filters and statuses.',
    link: 'https://github.com/MUKILAN-14/Task_Management_Dashboard'
  },
  {
    title: 'Jewellery Landing Page 💍',
    description: 'A stylish landing page built with HTML, CSS, and JS.',
    link: 'https://github.com/MUKILAN-14/Jwellery_Landing_Page'
  },
  {
    title: 'Ball and Paddle Game 🕹️',
    description: 'A basic bounce game using HTML5 Canvas and JavaScript.',
    link: 'https://github.com/MUKILAN-14/Ball-and-Paddle-Game'
  },
  {
    title: 'Steinfield Landing Page 🛬',
    description: 'A modern landing page layout using HTML, CSS.',
    link: 'https://github.com/MUKILAN-14/Steinfield_landing_page'
  }
];

export default function Projects() {
  return (
    <div className="min-h-screen rounded-3xl bg-gradient-to-b from-[#B9A0FF] to-[#322872] text-white px-6 py-10">
      <h1 className="text-4xl font-bold text-center mb-10">🛠️ My Projects</h1>

      <div className="grid md:grid-cols-2 gap-6 max-w-5xl mx-auto">
        {projects.map((project, index) => (
          <div
            key={index}
            className="bg-white/10 backdrop-blur-md p-6 rounded-xl shadow-lg hover:scale-105 transition-transform"
          >
            <h2 className="text-2xl font-semibold mb-2">{project.title}</h2>
            <p className="mb-4 text-white/80">{project.description}</p>
            <a
              href={project.link}
              target="_blank"
              rel="noreferrer"
              className="text-blue-300 hover:underline"
            >
              View on GitHub →
            </a>
          </div>
        ))}
      </div>
    </div>
  );
}
