import React from 'react';

export default function Contact() {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center px-4 py-10 text-white bg-gradient-to-b from-[#B9A0FF] to-[#322b61] rounded-3xl shadow-xl">
      <h1 className="text-4xl font-bold mb-4 text-center">📒 Get in Touch</h1>
      <p className="text-lg text-center mb-6">
        I'd love to hear from you! Reach out via email or socials 👇
      </p>

      <div className="flex flex-col sm:flex-row flex-wrap gap-4 items-center justify-center text-lg mb-8 text-center">
        <a
          href="mailto:mukilan671@gmail.com"
          className="hover:underline flex items-center gap-2"
        >
          ✉️ mukilan671@gmail.com
        </a>
        <a
          href="https://www.linkedin.com/in/mukilan-m-63aa4122a/"
          target="_blank"
          rel="noreferrer"
          className="hover:underline flex items-center gap-2"
        >
          🔗 LinkedIn
        </a>
        <a
          href="https://github.com/MUKILAN-14"
          target="_blank"
          rel="noreferrer"
          className="hover:underline flex items-center gap-2"
        >
          💻 GitHub
        </a>
      </div>

      <footer className="text-sm text-white/70 text-center">
        © {new Date().getFullYear()} Mukilan M
      </footer>
    </div>
  );
}
