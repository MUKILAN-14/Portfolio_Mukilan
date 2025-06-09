import React from 'react';

const projects = [
  {
    title: 'Jewellery Landing Page 💍',
    description: 'A modern and responsive landing page using HTML, CSS, and JS.',
    link: 'https://github.com/MUKILAN-14/Jwellery_Landing_Page.git'
  },
  {
    title: 'Movie Website 🎬',
    description: 'A React-based movie website showing trending movies with search.',
    link: 'https://github.com/MUKILAN-14/movie-app' // if you have
  }
];

export default function Projects() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-[#B9A0FF] to-[#322872] text-white px-6 py-10">
      <h1 className="text-4xl font-bold text-center mb-10">🛠️ My Projects</h1>
      <div className="grid md:grid-cols-2 gap-6 max-w-4xl mx-auto">
        {projects.map((project, index) => (
          <div key={index} className="bg-white/10 backdrop-blur-md p-6 rounded-xl shadow-lg hover:scale-105 transition">
            <h2 className="text-2xl font-semibold mb-2">{project.title}</h2>
            <p className="mb-4 text-white/80">{project.description}</p>
            <a href={project.link} target="_blank" rel="noreferrer" className="text-blue-300 hover:underline">
              View on GitHub →
            </a>
          </div>
        ))}
      </div>
    </div>
  );
}
