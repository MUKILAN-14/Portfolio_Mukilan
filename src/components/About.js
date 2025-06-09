import React from 'react';

const skills = [
  { name: 'HTML', icon: '🌐' },
  { name: 'CSS', icon: '🎨' },
  { name: 'JavaScript', icon: '🟨' },
  { name: 'React', icon: '⚛️' },
  { name: 'Tailwind CSS', icon: '🌬️' },
  { name: 'Git & GitHub', icon: '🔧' },
  {name:'Java',icon:'☕'},
  {name:'MS Office Tools',icon:'🛠️'}
];

export default function About() {
  return (
    <div className="text-white text-center min-h-screen flex flex-col items-center justify-center bg-gradient-to-b from-[#B9A0FF] to-[#342b70] px-4 py-12 rounded-3xl">
      
      {/* About Section */}
      <h1 className="text-4xl font-bold mb-4">About Me</h1>
     <p className="text-lg max-w-4xl text-white/90 mb-10 bg-white/10 backdrop-blur-sm p-4 rounded-xl shadow-md">
            Hi, I’m Mukilan M, a passionate Frontend Developer focused on building clean, responsive, and user-centric web interfaces. I enjoy bringing designs to life in the browser, ensuring every detai from layout to interaction enhances the user experience.
            <br></br><br></br>
            I believe great frontend development blends design and logic to deliver smooth user experiences. I enjoy transforming ideas into interactive, accessible web solutions, and I’m always eager to learn new tools and frameworks to stay ahead in the ever-evolving tech landscape.
            </p>


      {/* Skills Section */}
      <h2 className="text-3xl font-bold mb-6">Skills</h2>
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-6 max-w-4xl w-full px-4">
        {skills.map((skill, index) => (
          <div
            key={index}
            className="bg-white/10 backdrop-blur-sm p-4 rounded-xl shadow-md hover:scale-105 transition text-white flex flex-col items-center"
          >
            <div className="text-3xl mb-2">{skill.icon}</div>
            <p className="text-lg font-medium">{skill.name}</p>
          </div>
        ))}
      </div>
    </div>
  );
}
