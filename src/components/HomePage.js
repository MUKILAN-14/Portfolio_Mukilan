import React from 'react';
import Avatar from '../Assets/Avatar.png';
import Contact from '../Assets/contact.png';
import Projects from '../Assets/projects.png';
import About from '../Assets/About.png';
import { Link } from 'react-router-dom';

export default function HomePage() {
  return (
    <div className="h-full shadow-fancy rounded-3xl bg-gradient-to-b from-[rgb(185,167,231)] to-[rgb(81,36,121)]">

      <div className="flex text-white font-semibold justify-between text-lg items-center px-10 py-10">
        <Link className='flex flex-col drop-shadow-[0_0_4px_black] items-center hover:scale-110 hover:drop-shadow-[0_0_4px_white]' to="/about">
          <img src={About} alt='about' className='h-11 w-11' />
          <span className="mt-2">About</span>
        </Link>
        <Link className='flex flex-col drop-shadow-[0_0_4px_black] items-center hover:scale-110 hover:drop-shadow-[0_0_4px_white]' to="/projects">
          <img src={Projects} alt='projects' className='h-12' />
          <span className="mt-2">Projects</span>
        </Link>
        <Link className='flex flex-col drop-shadow-[0_0_4px_black] items-center hover:scale-110 hover:drop-shadow-[0_0_4px_white]' to="/contact">
          <img src={Contact} alt='contact' className='h-12' />
          <span className="mt-2">Contacts</span>
        </Link>
      </div>

      <div className="flex flex-col justify-center items-center h-screen text-white text-center">
        <img src={Avatar} alt="avatar" className="w-60 h-50 mb-12 drop-shadow-[0_0_7px_black]" />
        <h1 className="text-4xl md:text-6xl font-bold">Hi, I'm Mukilan M</h1>
        <p className="mt-4 text-lg md:text-2xl font-light text-white/80">A Passionate Frontend Developer</p>
        <p className="mt-6 text-base md:text-lg">
          Want to know more about me?
          <br />
          <Link to="/about" className="text-blue-300 underline hover:text-white transition">Check out the About section</Link>
        </p>
      </div>
    </div>
  );
}
