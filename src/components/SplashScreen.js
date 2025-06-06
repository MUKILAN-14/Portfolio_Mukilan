import { useState } from "react";
import logo from '../Assets/logo.png';

export default function SplashScreen({ onComplete }) {
  const [animate, setAnimate] = useState(false);

  const handleClick = () => {
    setAnimate(true);
    setTimeout(() => {
      onComplete(); // call to switch to homepage
    }, 1000); // wait for animation to finish
  };

  return (
    <div className="h-screen shadow-fancy rounded-3xl overflow-hidden relative">
  <div
    className="h-1/2  bg-gradient-to-b from-[rgb(106,49,156)] to-[rgb(156,136,207)] text-white transform transition-transform duration-1000 ease-in-out"
    style={{ transform: animate ? 'translateY(-100%)' : 'translateY(0)' }}
  ></div>

  <div
    className="h-1/2 bg-gradient-to-t from-[rgb(106,49,156)] to-[rgb(156,136,207)] transform transition-transform duration-1000 ease-in-out"
    style={{ transform: animate ? 'translateY(100%)' : 'translateY(0)' }}
  > <img
      src={logo}
      alt="Logo"
      onClick={handleClick}
      className="w-48 h-48 hover:scale-125  hover:shadow-white shadow-fancy rounded-full absolute left-1/2 top-0 -translate-x-1/2 -translate-y-1/2 cursor-pointer transition-transform duration-500 ease-in-out"
    /></div>
</div>


  );
}
