export default function HomePage() {
  return (
    <div className="h-screen bg-gradient-to-b from-[rgb(156,136,207)] to-[rgb(81,36,121)]">
      
 <div className="flex justify-between items-center px-6 py-4">
    {/* Left */}
    <div className="text-lg font-semibold">About</div>

    {/* Center */}
    <div className="text-lg font-semibold">Mukilan M</div>

    {/* Right */}
    <div className="text-lg font-semibold">Projects</div>
  </div>     
  
       <div className="flex flex-col justify-center items-center h-full text-white text-center">
        <h1 className="text-4xl md:text-6xl font-bold drop-shadow-lg">
          Hi, I'm Mukilan M
        </h1>
        <p className="mt-4 text-lg md:text-2xl font-light text-white/80">
          A Passionate Frontend Developer
        </p>
      </div>
    </div>
  );
}
