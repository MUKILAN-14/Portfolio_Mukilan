import React from 'react';

export default function Contact() {
  return (
    <div className="text-white text-center min-h-screen flex flex-col items-center justify-center bg-gradient-to-b from-[#B9A0FF] to-[#342b70] px-4 py-12 rounded-3xl">
      
      {/* Contact Title */}
      <h1 className="text-4xl font-bold mb-4">📒 Get in Touch</h1>

      {/* Contact Subtitle */}
      <p className="text-lg max-w-2xl text-white/90 mb-10 bg-white/10 backdrop-blur-sm p-4 rounded-xl shadow-md">
        I'd love to hear from you! Whether it's about collaboration, feedback, or just a hello — feel free to reach out via email or connect on my socials 👇
      </p>

      {/* Contact Cards */}
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 max-w-3xl w-full px-4 mb-12">
        {/* Email */}
        <a
          href="mailto:mukilan671@gmail.com"
          className="bg-white/10 backdrop-blur-sm p-6 rounded-xl shadow-md hover:scale-105 transition transform flex flex-col items-center"
        >
          <div className="text-3xl mb-2">✉️</div>
          <p className="text-lg font-medium">mukilan671@gmail.com</p>
        </a>

        {/* LinkedIn */}
        <a
          href="https://www.linkedin.com/in/mukilan-m-63aa4122a/"
          target="_blank"
          rel="noreferrer"
          className="bg-white/10 backdrop-blur-sm p-6 rounded-xl shadow-md hover:scale-105 transition transform flex flex-col items-center"
        >
          <div className="text-3xl mb-2">🔗</div>
          <p className="text-lg font-medium">LinkedIn Profile</p>
        </a>

        {/* GitHub */}
        <a
          href="https://github.com/MUKILAN-14"
          target="_blank"
          rel="noreferrer"
          className="bg-white/10 backdrop-blur-sm p-6 rounded-xl shadow-md hover:scale-105 transition transform flex flex-col items-center"
        >
          <div className="text-3xl mb-2">💻</div>
          <p className="text-lg font-medium">GitHub Profile</p>
        </a>
        <a
          href={`${process.env.PUBLIC_URL}/MUKILAN_RESUME.pdf`}
          download
          className="bg-white/10 backdrop-blur-sm p-6 rounded-xl shadow-md hover:scale-105 transition transform flex flex-col items-center"
        >
          <div className="text-3xl mb-2">📄</div>
          <p className="text-lg font-medium">Download Resume</p>
        </a>
      </div>

      {/* Footer */}
      <footer className="text-sm text-white/70 text-center">
        © {new Date().getFullYear()} Mukilan M
      </footer>
    </div>
  );
}
