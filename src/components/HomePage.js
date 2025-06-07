/* eslint-disable jsx-a11y/anchor-is-valid */
import Avatar from '../Assets/Avatar.png'
import Contact from'../Assets/contact.png';
import Projects from'../Assets/projects.png';
import About from '../Assets/About.png';

export default function HomePage() {
  return (
    <div className="h-full shadow-fancy rounded-3xl bg-gradient-to-b from-[rgb(185,167,231)] to-[rgb(81,36,121)]">

    <div className="flex text-white font-semibold justify-between text-lg items-center px-10 py-10">
      <a  className='flex flex-col drop-shadow-[0_0_5px_black] hover:scale-110 hover:drop-shadow-[0_0_10px_white] items-center' href="#"><img
        src={About}
        alt='about'
        className='h-14 w-14'
        /><span className="mt-2 text-white font-semibold">About</span>
      </a>
      <a  className='flex flex-col drop-shadow-[0_0_5px_black] hover:scale-110 hover:drop-shadow-[0_0_10px_white] items-center' href="#"><img
        src={Projects}
        alt='Projects'
        className='h-16'
        /><span className="mt-2 text-white font-semibold">Projects</span>
      </a>
      <a className='flex flex-col drop-shadow-[0_0_5px_black] hover:scale-110 hover:drop-shadow-[0_0_10px_white] items-center' href="#">
        <img
        src={Contact}
        alt='contact'
        className='h-16 '
        /><span className="mt-2 text-white font-semibold">Contacts</span>
      </a>
    </div>     
  
    <div className="flex flex-col justify-center items-center h-screen text-white text-center ">
        <img
        src={Avatar}
        alt="avatar"
        className="w-60 h-50 drop-shadow-[0_0_5px_black] mb-12"
        />
        <h1 className="text-4xl md:text-6xl font-bold drop-shadow-lg">
          Hi, I'm Mukilan M
        </h1>
        <p className="mt-4 text-lg md:text-2xl font-light text-white/80">
          A Passionate Frontend Developer
        </p>
        <p className="mt-6 text-base md:text-lg text-white">
          Want to know more about me?{" "}
                 <br></br>
        <a
        href="#about"
        className="text-blue-300 underline hover:text-white transition-colors duration-300"
        >
        Check out the About section
        </a>
        </p>
    </div>

    </div>
  );
}
