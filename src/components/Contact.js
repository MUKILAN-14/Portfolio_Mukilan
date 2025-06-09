import React from 'react';

export default function Contact() {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gradient-to-b from-[#B9A0FF] to-[#322b61] text-white px-4">
      <h1 className="text-4xl font-bold mb-6">📒 Get in Touch</h1>
      <p className="mb-4 text-lg">I'd love to hear from you! Reach out via email or socials 👇</p>

      <div className="flex gap-8 mt-4">
        <a href="mukilan671@gmail.com" className="hover:underline text-lg">✉️ mukilan671@gmail.com</a>
        <a href="https://www.linkedin.com/in/mukilan-m-63aa4122a/" target="_blank" rel="noreferrer" className="hover:underline text-lg">🔗 LinkedIn</a>
        <a href="https://github.com/MUKILAN-14" target="_blank" rel="noreferrer" className="hover:underline text-lg">💻 GitHub</a>
      </div>

      <footer className="mt-10 text-sm text-white/70">© {new Date().getFullYear()} Mukilan M</footer>
    </div>
  );
}
