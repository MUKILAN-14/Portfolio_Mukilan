import { useState } from "react";
import logo from '../Assets/logo.png';
import { Link } from "react-router-dom";

export default function SplashScreen({ onComplete }) {
  const [animate, setAnimate] = useState(false);
  const [spin, setSpin] = useState(false);

  const handleClick = () => {
    setSpin(true); // trigger spin
    setTimeout(() => {
      setAnimate(true); // start sliding
  }, 200);
    setTimeout(() => {
      onComplete();
    }, 1000); 
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
  > <div className="absolute left-1/2 top-0 -translate-x-1/2 -translate-y-1/2">
          <div
            onClick={handleClick}
            className={`w-48 h-48 rounded-full cursor-pointer transition-transform duration-500 
            ease-in-out hover:scale-125 hover:shadow-white shadow-fancy 
            ${spin ? 'animate-rotate-once' : ''}`}
          >
            <Link to='/'>
            <img
              src={logo}
              alt="Logo"
              className="w-full h-full object-contain rounded-full"
            />
            </Link>
          </div>
        </div>
        </div>
</div>


  );
}
